resource "aws_lambda_function" "github_issue_webhook_handler" {
  function_name = "${var.env}-github-issue-webhook-handler"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_github_issue_webhook_handler.arn
  runtime       = "nodejs16.x"

  filename         = "lambda-functions/webhook-handler/dist/bundle.zip"
  source_code_hash = filebase64sha256("lambda-functions/webhook-handler/dist/bundle.zip")
}

resource "aws_iam_role" "lambda_github_issue_webhook_handler" {
  name = "${var.env}-lambda-github-issue-webhook-handler"

  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Effect": "Allow",
        "Sid": ""
      }
    ]
  })
}
