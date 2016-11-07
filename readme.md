# Serverless Slack Cron

[![Build Status](https://travis-ci.org/ivanderbu2/serverless-slack-cron.svg?branch=master)](https://travis-ci.org/ivanderbu2/serverless-slack-cron)

This is simple Serverless project with one Lambda function activated via cron job.

It sends message to Slack channel. Before you can use it copy .env.example file to .env and insert your Slack incoming webhook url there. 
You'll see that webhook is separated into 2 env variabes, that is because of testing.

CD into project directory and install node modules:

```shell
npm install
```

AWS profile is passed via opt so when you deploy use:

```shell
sls deploy --profile=myProfileName
```

Before deploying you can locally test function from project directory via:

```shell
npm test
```

For testing purposes main Lambda function can be triggered via API Gateway ( GET /notify ) as well as schedule event.

Memory size limit is set to the lowest value of 128MB.