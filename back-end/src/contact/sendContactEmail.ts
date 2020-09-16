import { Callback, Context, DynamoDBStreamEvent } from "aws-lambda"
import { SES } from "aws-sdk"
import { SendEmailRequest } from "aws-sdk/clients/ses"

const ses = new SES()

exports.handler = async (
  event: DynamoDBStreamEvent,
  _: Context,
  callback: Callback
) => {
  let successes = 0
  let errors: Array<string> = []

  event.Records.forEach( async (record) => {
    if (record.eventName === 'INSERT') {
      const email = record.dynamodb?.NewImage?.email.S ? `${record.dynamodb?.NewImage.email.S}` : "_blank"
      const name = record.dynamodb?.NewImage?.name.S ? `${record.dynamodb?.NewImage.name.S}` : "_blank"
      const subject = record.dynamodb?.NewImage?.subject.S ? `${record.dynamodb?.NewImage.subject.S}` : "_blank"
      const message = record.dynamodb?.NewImage?.message.S ? `${record.dynamodb?.NewImage.message.S}` : "_blank"

      const emailSubject = `New message from Red Comet website: ${subject}`
      const emailMessage = 
`Name: ${name}

Email: ${email}

Subject: ${subject}

Message:

${message}`

      const params: SendEmailRequest = {
        Source: `${process.env.FROM_EMAIL}`,
        Destination: {
          ToAddresses: [ `${process.env.TO_EMAIL}` ],
        },
        Message: {
          Subject: { Data: emailSubject },
          Body: {
            Text: { Data: emailMessage },
          },
        },
      }

      try {
        await ses.sendEmail(params).promise()
      } catch ( err ) {
        errors.push(JSON.stringify(err))
        console.log(JSON.stringify(err, null, 2))
      }
    }
  })

  if ( errors.length === 0 ) {
    callback(null, `Successfully processed ${successes} records.`);
  } else {
    const errorsJoined = errors.join(";")
    callback(`Failed to send ${errors.length} messages. Errors: ${errorsJoined}`, null);
  }
}
