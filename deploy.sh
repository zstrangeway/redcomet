#!/bin/bash

# dev:   ./deploy.sh
# prod:  ./deploy.sh prod
STAGE=${1:-dev}
PROJECT=red-comet-$STAGE
BUILD_DIR=.build
OUTPUT_FILE=$BUILD_DIR/output.yml

# Change the suffix on the bucket to something unique!
BUCKET=$PROJECT-deployment-files

# make a build directory to store artifacts
rm -rf $BUILD_DIR
mkdir $BUILD_DIR

# make the deployment bucket in case it doesn't exist
aws s3 mb s3://$BUCKET

# generate next stage yml file
sam package \
    --template-file infrastructure/root.yml \
    --output-template-file $OUTPUT_FILE \
    --s3-bucket $BUCKET                      

# the actual deployment step
sam deploy \
    --template-file $OUTPUT_FILE \
    --stack-name $PROJECT \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --parameter-overrides Environment=$STAGE