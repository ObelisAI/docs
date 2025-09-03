---
id: requirements
title: System Requirements
sidebar_label: Requirements
---

# System Requirements

Before you can start deploying applications with Obelis AI, ensure you have the following requirements in place.

## Required Accounts

### AWS Account

You'll need an active AWS account to deploy your applications. Obelis deploys all infrastructure to your own AWS account, giving you full control and transparency.

- **Sign up for AWS**: If you don't have an account, create one at [aws.amazon.com](https://aws.amazon.com)
- **Free Tier**: New AWS accounts include 12 months of free tier usage for many services
- **Billing**: You pay AWS directly for resources used - Obelis has no platform fees

### GitHub Account

A GitHub account is required to connect your source code repositories.

- **Public or Private Repos**: Both are supported
- **Organization Repos**: Supported with proper permissions
- **Branch Protection**: Compatible with protected branches
- **Git LFS**: Supported for large file storage

## AWS IAM Permissions

To deploy infrastructure, Obelis needs an IAM user with specific permissions in your AWS account.

### Minimum Required Permissions

Create an IAM user with the following AWS managed policies:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:*",
        "ecs:*",
        "ecr:*",
        "lambda:*",
        "s3:*",
        "cloudfront:*",
        "route53:*",
        "acm:*",
        "iam:*",
        "logs:*",
        "cloudwatch:*",
        "rds:*",
        "elasticache:*",
        "dynamodb:*",
        "secretsmanager:*",
        "ssm:*"
      ],
      "Resource": "*"
    }
  ]
}
```

### Recommended Setup

For production use, we recommend:

1. **Dedicated AWS Account**: Use a separate AWS account for Obelis deployments
2. **MFA Protection**: Enable MFA on your AWS root account
3. **Regular Key Rotation**: Rotate IAM access keys every 90 days
4. **CloudTrail Logging**: Enable for audit trail of all API calls

## Browser Requirements

Obelis works best with modern web browsers:

### Supported Browsers

- **Chrome**: Version 90 or later (Recommended)
- **Firefox**: Version 88 or later
- **Safari**: Version 14 or later
- **Edge**: Version 90 or later

### Browser Features Required

- JavaScript enabled
- Cookies enabled
- WebSocket support for real-time updates
- Local storage for session management

## Optional Requirements

### Neon Database Account

For serverless PostgreSQL databases:

- Sign up at [neon.tech](https://neon.tech)
- Free tier includes:
  - 1 project with 10 branches
  - 3 GB of storage
  - Unlimited compute (with autosuspend after 5 minutes)

### Custom Domain

For production deployments with custom domains:

- **Domain Registration**: Any registrar (AWS Route53, GoDaddy, Namecheap, etc.)
- **DNS Management**: Ability to update NS records
- **SSL Certificates**: Automatically provisioned via AWS ACM (free)

### MCP Integration (For AI-Assisted Deployments)

To use Obelis with AI assistants like Claude or Cursor:

- **Cursor IDE**: Latest version with MCP support
- **API Key**: Generated from Obelis settings
- **Node.js**: Version 18 or later for MCP client

## Network Requirements

### Outbound Connections

Your browser needs to access:

- `beta.obelis.ai` - Main application
- `api.obelis.ai` - API endpoints
- `*.amazonaws.com` - AWS services
- `github.com` - Repository access
- `api.neon.tech` - Database management (if using Neon)

### Firewall Rules

If you're behind a corporate firewall, ensure these ports are open:

- **HTTPS (443)**: For web access and API calls
- **WSS (443)**: For WebSocket connections (real-time updates)

## Project Size Limits

### Repository Limits

- **Maximum repo size**: 2 GB
- **Maximum file count**: 100,000 files
- **Build timeout**: 30 minutes
- **Deployment timeout**: 60 minutes

### AWS Resource Limits

Default AWS service limits apply:

- **EC2 Instances**: 20 per region (can be increased)
- **Lambda Functions**: 1,000 concurrent executions
- **S3 Buckets**: 100 per account
- **CloudFront Distributions**: 200 per account

### Environment Variables

- **Maximum variables**: 100 per project
- **Key length**: 255 characters
- **Value length**: 5,000 characters
- **Total size**: 32 KB per project

## Supported Application Types

### Static Websites
- HTML/CSS/JavaScript
- React, Vue, Angular
- Next.js, Gatsby, Hugo
- Build output up to 500 MB

### Lambda Functions
- Node.js 18.x, 20.x
- Python 3.9, 3.10, 3.11
- Deployment package up to 250 MB
- Container images up to 10 GB

### Container Applications
- Docker images up to 10 GB
- Any language/framework in container
- Multi-container applications supported
- Docker Compose configurations

## Regional Availability

Obelis can deploy to any AWS region. Popular regions include:

- **US East (N. Virginia)** - us-east-1
- **US West (Oregon)** - us-west-2
- **EU (Ireland)** - eu-west-1
- **EU (Frankfurt)** - eu-central-1
- **Asia Pacific (Singapore)** - ap-southeast-1
- **Asia Pacific (Tokyo)** - ap-northeast-1

## Getting Help

If you have questions about requirements:

- Check our [FAQ](/docs/faq)
- Join our [Discord Community](https://discord.gg/VAeT5Q3hbc)
- Contact support at support@obelis.ai

## Next Steps

Once you've verified all requirements are met:

1. [Connect your GitHub account](/docs/howto/connect-github)
2. [Set up AWS credentials](/docs/howto/aws-credentials)
3. [Deploy your first application](/docs/deploy-your-first-app)