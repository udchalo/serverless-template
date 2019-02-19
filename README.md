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
8. Custom policy for CloudformationReadWriteAccess
9. Custom policy for managing IAM roles for AWS Lambda

For `pt#9` above, following items are needed in the custom policy:
```
"Effect": "Allow",
      "Action": [
        "iam:GetRole",
        "iam:PassRole",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:DetachRolePolicy",
        "iam:PutRolePolicy",
        "iam:AttachRolePolicy",
        "iam:DeleteRolePolicy"
      ]
      ...
```

# Stuff to edit after copying

1. Open `serverless.yml`, change top line to mention the actual service name, usually, simply change from ${opt:product} to `name of your repo` .. dont change product name anywhere else
2. Open `buildspec.yml`, add commands for test cases, change `product` in the `serverless command` to something more sensible to a higher level product's name for disambuguation of deployed articles
