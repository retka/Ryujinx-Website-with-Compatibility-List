
resource "aws_api_gateway_rest_api" "github_webhooks" {
    name = "${var.env}-Ryujinx-Compatibility-List-Webhooks"
    
    endpoint_configuration {
      types = ["REGIONAL"]
    }
}

resource "aws_api_gateway_deployment" "env" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.github_webhooks.body))
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [aws_api_gateway_integration_response.webhooks_github_issues_POST_mock_200]
}

resource "aws_api_gateway_stage" "env" {
  rest_api_id   = aws_api_gateway_rest_api.github_webhooks.id
  deployment_id = aws_api_gateway_deployment.env.id
  stage_name    = var.env
}

resource "aws_api_gateway_resource" "webhooks" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  parent_id   = aws_api_gateway_rest_api.github_webhooks.root_resource_id
  path_part   = "webhooks"
}

resource "aws_api_gateway_resource" "webhooks_github" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  parent_id   = aws_api_gateway_resource.webhooks.id
  path_part   = "github"
}

resource "aws_api_gateway_resource" "webhooks_github_issues" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  parent_id   = aws_api_gateway_resource.webhooks_github.id
  path_part   = "issues"
}

resource "aws_api_gateway_method" "webhooks_github_issues_POST" {
  rest_api_id   = aws_api_gateway_rest_api.github_webhooks.id
  resource_id   = aws_api_gateway_resource.webhooks_github_issues.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "webhooks_github_issues_POST_mock" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  resource_id = aws_api_gateway_resource.webhooks_github_issues.id
  http_method = aws_api_gateway_method.webhooks_github_issues_POST.http_method
  type        = "MOCK"

  passthrough_behavior = "WHEN_NO_TEMPLATES"

  request_templates = {
    "application/json" = <<E0F
#set($inputRoot = $input.path('$'))
{
  "statusCode": 200
}
E0F
  }
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  resource_id = aws_api_gateway_resource.webhooks_github_issues.id
  http_method = aws_api_gateway_method.webhooks_github_issues_POST.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "webhooks_github_issues_POST_mock_200" {
  rest_api_id = aws_api_gateway_rest_api.github_webhooks.id
  resource_id = aws_api_gateway_resource.webhooks_github_issues.id
  http_method = aws_api_gateway_method.webhooks_github_issues_POST.http_method
  status_code = aws_api_gateway_method_response.response_200.status_code

  response_templates = {
    "application/json" = <<E0F
#set($inputRoot = $input.path('$'))
{
  "message": "Luke, I am a fucking nerd."
}
E0F
  }
}
