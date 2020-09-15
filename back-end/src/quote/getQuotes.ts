import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { SuccessResponse } from "/opt/response/Response"

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  return new SuccessResponse("Hello World")
}
