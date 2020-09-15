#!/bin/bash

# Run serverless API locally on docker at http://127.0.0.1:5000
# FIXME: This currently is not functining as SAM is unable to find the DynamoDB resrouce.
sam local start-api \
  --profile default \
  --region us-east-1 \
  --parameter-overrides 'Environment=dev' \
  --port 5000