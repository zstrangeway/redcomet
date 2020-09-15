import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { DynamoDB } from "aws-sdk"
import { ErrorResponse, SuccessResponse } from "/opt/response/Response"
const docClient = new DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  if (!event.pathParameters?.id) return new ErrorResponse(400, "Missing User ID")

  const id = event.pathParameters.id

  var params = {
    TableName: `${process.env.CONTACT_TABLE}`,
    Key: {
      id
    },
  };
  
  try {
    const contact = await docClient.get(params).promise()
    return contact.Item ? 
      new SuccessResponse(JSON.stringify(contact.Item)) : 
      new ErrorResponse(404, `No users found with id: ${id}`)
  } catch(err) {
    console.log(err)
    return new ErrorResponse(503, "Unable to process request at this time.")
  }
}
