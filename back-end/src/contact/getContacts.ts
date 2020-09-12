import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { DynamoDB } from "aws-sdk"
const docClient = new DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {

  var params = {
    TableName: process.env.CONTACT_TABLE,
  };
  
  try {
    // await docClient.put(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello world',
        input: event,
      })
    }
  } catch(err) {
    console.log(err)
    // TODO: return better error
    return {
      statusCode: 503,
      body: "Error"
    }
  }
}
