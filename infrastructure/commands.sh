#!/bin/bash
# serves as an easy access to shell scripts in ./infrastructure/scripts

echo -e "Select Command:\n\
1: Deploy Dev Stack\n\
2: Sync Dev Web App\n\
3: Sync Dev Web Admin\n\
4: Sync CloudFormation Templates\
1p: Create Prod Stack\n\
2p: Sync Prod Web App\n\
3p: Sync Prod Web Admin"

read COMMAND

case $COMMAND in
1)
    echo "Deploying Dev Stack..."
    ./infrastructure/scripts/deployCfnStack.sh RedComet-DEV DEV https://red-comet-cfn-templates.s3.amazonaws.com
    ;;

2)
    echo "Syncing Dev Web App..."
    ./infrastructure/scripts/syncS3Bucket.sh ./web-app/dist s3://red-comet-webapp-dev
    ;;

3)
    echo "Syncing Dev Web Admin..."
    ./infrastructure/scripts/syncS3Bucket.sh ./web-admin/dist s3://red-comet-webadmin-dev
    ;;

4)
    echo "Syncing CloudFormation Templates..."
    ./infrastructure/scripts/syncCfnFiles.sh
    ;;

1p)
    echo "Deploying Prod Stack..."
    ./infrastructure/scripts/deployCfnStack.sh RedComet-PROD PROD https://red-comet-cfn-templates.s3.amazonaws.com
    ;;

2p)
    echo "Syncing Prod Web App..."
    ./infrastructure/scripts/syncS3Bucket.sh ./web-app/dist s3://red-comet-webapp-prod
    ;;

3p)
    echo "Syncing Prod Web Admin..."
    ./infrastructure/scripts/syncS3Bucket.sh ./web-admin/dist s3://red-comet-webadmin-prod
    ;;

*)
  Message="Invalid Command."
  ;;
esac