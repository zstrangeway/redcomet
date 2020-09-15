/* eslint-disable */
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { SuccessResponse } from "/opt/response/Response"

exports.handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  // TODO: Implement
  return new SuccessResponse("Hello World")
}
