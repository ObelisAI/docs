---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

# Getting Started with Obelis AI

Deploy your first application to AWS in under 5 minutes with Obelis AI - your intelligent DevOps engineer.

## Prerequisites

Before you begin, make sure you have:

- A GitHub account with a repository you want to deploy
- An AWS account (or create one at [aws.amazon.com](https://aws.amazon.com))
- Access to [beta.obelis.ai](https://beta.obelis.ai)

## Step 1: Sign Up for Obelis

1. Navigate to [beta.obelis.ai](https://beta.obelis.ai)
2. Sign in with your GitHub account
3. Authorize Obelis to access your repositories

## Step 2: Connect Your AWS Account

1. In the Obelis dashboard, click **"Add AWS Credentials"**
2. Create an IAM user in your AWS account with the following permissions:
   - `AmazonEC2FullAccess`
   - `AmazonRDSFullAccess`
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess`
   - `IAMFullAccess`
3. Copy your Access Key ID and Secret Access Key
4. Paste them into Obelis and click **"Connect AWS"**

> **Note:** Your credentials are encrypted and stored securely. You can revoke access at any time from your AWS console.

## Step 3: Deploy Your First App

1. Click **"New Project"** in your Obelis dashboard
2. Select the GitHub repository you want to deploy
3. Obelis AI will automatically:
   - Detect your application type (Node.js, Python, React, etc.)
   - Analyze your codebase structure
   - Identify required environment variables
   - Configure optimal AWS infrastructure

4. Review the AI-generated configuration
5. Click **"Deploy"** to start the deployment

## Step 4: Monitor Your Deployment

Once deployment begins, you can:

- View real-time deployment logs
- Monitor resource provisioning
- Track build and deployment progress
- Access your application URL once deployed

## What Obelis Deploys

For a typical application, Obelis sets up:

### Infrastructure
- **VPC** with public/private subnets
- **Auto-scaling EC2 instances** or **Lambda functions**
- **Application Load Balancer** with SSL certificates
- **CloudFront CDN** for static assets

### Database (if needed)
- **Neon serverless PostgreSQL** with auto-scaling
- Automatic backups and point-in-time recovery
- Connection pooling configured

### Security
- **Security groups** with minimal required access
- **IAM roles** following least privilege principle
- **Secrets management** for credentials
- **SSL/TLS certificates** auto-provisioned

### Monitoring
- **CloudWatch** logs and metrics
- **AI-powered anomaly detection**
- **Automatic alerting** for issues

## Supported Application Types

Obelis AI currently supports:

- **Frontend:** React, Vue, Angular, Next.js, static sites
- **Backend:** Node.js, Python (Flask/Django), Go, Ruby
- **Databases:** PostgreSQL (via Neon), MySQL, MongoDB
- **Full-stack:** MERN, MEAN, Django + React, Rails

## Next Steps

- [Configure environment variables](/docs/howto/environment-variables)
- [Set up custom domains](/docs/howto/custom-domains)
- [Connect your GitHub repository](/docs/howto/connect-github)
- [Configure AWS credentials](/docs/howto/aws-credentials)

## Need Help?

- Join our [Discord community](https://discord.gg/VAeT5Q3hbc)
- Check the [FAQ](/docs/faq)
- View [troubleshooting guide](/docs/troubleshooting)