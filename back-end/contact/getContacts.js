const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async function(event, context, callback) {

  var params = {
    TableName: process.env.CONTACT_TABLE,
  };
  
  try {
    let response = await docClient.put(params).promise()
    console.log(`RESPONSE: ${response}`)
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