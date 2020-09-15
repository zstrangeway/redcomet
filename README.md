# Red Comet
Red Comet website and (maybe) online store

# Description:
JamStack website built with Nuxt.js and backed with AWS serverless (Lambda, DynamoDB, API Gateway, SES, etc.)  Its a bit overkill, but good for learning and virtually free to host.

# Prerequisites:
- Node 12+
- AWS CLI
  - https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
- AWS SAM
  - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
- Docker (for local testing)

# Installation:
- Start local API with `sh local.sh`
- Run `sh deploy.sh` to deploy to dec evironment or `sh deploy.sh prod` to deploy to prod.

# Backlog:
- Fix linting issues
- CICD
- finish web app
  - quilting quote form
  - integrate quilting quote form with backend
- better deployment automation
- write back-end
  - send emails 
  - gallery
  - quilting form

- Later:
  - write web admin
  - create user accounts
  - online payments?

