#!/bin/bash

LOCAL_DIR=$1
S3_BUCKET=$2

aws s3 rm $S3_BUCKET \
--recursive \
--profile rc_zac

aws s3 sync \
$LOCAL_DIR $S3_BUCKET \
--region us-east-1 \
--profile rc_zac