#!/bin/bash

STACK_NAME=$1
ENVIRONMENT=$2
TEMPLATE_PATH=$3

aws cloudformation deploy \
--stack-name $STACK_NAME \
--template-file ./infrastructure/root.yml \
--parameter-overrides \
    Environment=$ENVIRONMENT \
    TemplatePath=$TEMPLATE_PATH \
--region us-east-1 \
--profile rc_zac