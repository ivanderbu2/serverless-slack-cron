# Serverless Slack Cron

This is simple Serverless project with one Lambda function activated via cron job.

It sends message to Slack channel. Before you can use it copy .env.example file to .env and insert your Slack incoming webhook url there.

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