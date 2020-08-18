const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler =  async function(event, context, callback) {

  if (!event.body) return respond(400, "Error: Request missing body.")
  
  let body = JSON.parse(event.body);
  
  let missingParams = []
  
  if (!body.email) missingParams.push('email')
  if (!body.name) missingParams.push('name')
  if (!body.subject) missingParams.push('subject')
  if (!body.message) missingParams.push('message')
  
  if (missingParams.length > 0) {
    let missingParamsString = missingParams.join(", ")
    return respond(400, `Error: Missing parameters: ${missingParamsString}`)
  }

  var params = {
    Item: {
      email: body.email,
      name: body.name,
      date: Date.now(),
      subject: body.subject,
      message: body.message,
    },
    TableName: process.env.CONTACT_TABLE,
  };
  
  try {
    await docClient.put(params).promise()
    return respond(200, "Success")
  } catch(err) {
    console.log(err)
    return respond(503, "Unable to process request at this time.")
  }
}

// TODO: Extract and make reusable acress all lambdas
function respond(code, message) {
  return {
    statusCode: code,
    headers: {
      "x-custom-header" : "my custom header value" // TODO: Change this is to make more sense
    },
    body: message
  };
}