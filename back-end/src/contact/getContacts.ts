import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import AWS from "aws-sdk"
import { ErrorResponse, SuccessResponse } from "/opt/response/Response"

const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" })

exports.handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const nextToken = event.headers.nextToken
    ? { id: { S: `${event.headers.nextToken}` } }
    : undefined
  const params = {
    TableName: `${process.env.CONTACT_TABLE}`,
    Limit: 25,
    ExclusiveStartKey: nextToken,
  }

  try {
    const query = await dynamodb.scan(params).promise()
    const result = {
      contacts: query.Items?.map((item) => {
        return {
          id: item.id.S,
          date: item.date.N,
          email: item.email.S,
          name: item.name.S,
          subject: item.subject.S,
          message: item.message.S,
        }
      }),
      nextToken: query.LastEvaluatedKey?.id.S,
    }
    return new SuccessResponse(JSON.stringify(result))
  } catch (err) {
    return new ErrorResponse(503, "Unable to retrieve records at this time.")
  }
}
