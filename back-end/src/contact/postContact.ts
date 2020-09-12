import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { DynamoDB } from "aws-sdk"
import { SuccessResponse, ErrorResponse } from "/opt/response/Response"

const docClient = new DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {

  if (!event.body) return new ErrorResponse(400, "Error: Request missing body.")

  let body = JSON.parse(event.body);
  
  let missingParams = []
  
  if (!body.email) missingParams.push('email')
  if (!body.name) missingParams.push('name')
  if (!body.subject) missingParams.push('subject')
  if (!body.message) missingParams.push('message')
  
  if (missingParams.length > 0) {
    let missingParamsString = missingParams.join(", ")
    return new ErrorResponse(400, `Error: Missing parameters: ${missingParamsString}`)
  }

  let item = {
    email: body.email,
    name: body.name,
    date: Date.now(),
    subject: body.subject,
    message: body.message,
  }

  var params = {
    TableName: `${process.env.CONTACT_TABLE}`,
    Item: item,
  };

  try {
    await docClient.put(params).promise()
    return new SuccessResponse(JSON.stringify(item))
  
  } catch(err) {
    console.log(err)
    return new ErrorResponse(503, "Unable to process request at this time.")
  }
}
