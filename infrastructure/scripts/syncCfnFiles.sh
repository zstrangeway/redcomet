#!/bin/bash

aws s3 sync \
./infrastructure s3://red-comet-cfn-templates \
--exclude "*" \
--include "*.yml" \
--region us-east-1 \
--profile rc_zac