import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda"
import { DynamoDB } from "aws-sdk"
import { SuccessResponse, ErrorResponse } from "/opt/response/Response"
import Contact from "/opt/contact/Contact"
import checkParams from "/opt/params/checkParams"

const docClient = new DynamoDB.DocumentClient({ region: "us-east-1" })

exports.handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  if (!event.body) return new ErrorResponse(400, "Error: Request missing body.")

  const body = JSON.parse(event.body)
  const missingParams = checkParams(body, [
    "email",
    "name",
    "subject",
    "message",
  ])
  if (missingParams.length > 0)
    return new ErrorResponse(
      400,
      `Unable to process request. Missing parameters: ${missingParams.join(
        ", "
      )}`
    )

  const contact = new Contact(
    context.awsRequestId,
    body.email,
    body.name,
    Math.floor(new Date().getTime() / 1000.0),
    body.subject,
    body.message
  )

  const params = {
    TableName: `${process.env.CONTACT_TABLE}`,
    Item: contact,
  }

  try {
    await docClient.put(params).promise()
    return new SuccessResponse(JSON.stringify(contact))
  } catch (err) {
    console.log(err)
    return new ErrorResponse(503, "Unable to process request at this time.")
  }
}
