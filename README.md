# Running the app locally

```
npm run start
```

# Executing tests

```
npm run test
```

# Debugging tests

A launch config for the test cases(Mocha tests) has been added. 
In the visual studio code debug pane, make sure the above launch config is selected and then hit the green play button.

# Deploy API

```
serverless deploy --stage dev --region ap-south-1
```

# Codebuild

Webhook Event Type: `PUSH`

Start a build under these conditions: `HEAD_REF` = `refs/heads/master`

Environment Image: `aws/codebuild/nodejs:8.11.0-1.3.0`

`Enable Cloudwatch logs`

## Code Build Role Permissions

1. AWSLambdaFullAccess
2. AmazonS3FullAccess
3. AmazonDynamoDBFullAccess
4. CloudFrontFullAccess
5. CloudWatchLogsFullAccess
6. AmazonAPIGatewayAdministrator
7. AmazonRoute53FullAccess
