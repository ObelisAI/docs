---
id: intro
title: Welcome to Obelis
sidebar_label: Welcome
---

# Welcome to Obelis AI

Obelis AI is your intelligent DevOps engineer that deploys applications to your own AWS account with zero DevOps knowledge required. Simply connect your GitHub repository, add your AWS credentials, and let AI handle the complex infrastructure setup, configuration, and deployment.

## What is Obelis AI?

Obelis AI is an AI-powered deployment platform that transforms the way developers ship applications to AWS. Instead of spending weeks learning AWS services, writing Terraform scripts, or configuring CI/CD pipelines, Obelis AI analyzes your code and automatically:

- **Detects your application type** (React, Node.js, Python, etc.)
- **Generates optimal AWS infrastructure** tailored to your needs
- **Configures security, networking, and scaling** following AWS best practices
- **Manages continuous deployment** from your GitHub repository
- **Monitors and maintains** your application health

## Key Benefits

### 🚀 Deploy in Minutes, Not Weeks
From GitHub repository to production on AWS in under 5 minutes. No DevOps expertise required.

### 💰 Cost-Effective
Deploy to your own AWS account and pay AWS directly. No platform markup or hidden fees. Full cost transparency.

### 🔒 Enterprise-Grade Security
Your AWS credentials are encrypted and never leave your control. All infrastructure follows AWS security best practices.

### 🤖 AI-Powered Intelligence
Our AI analyzes your codebase to automatically configure build settings, environment variables, and infrastructure requirements.

### 🎯 Full AWS Control
Everything runs in your AWS account. You maintain complete control over your infrastructure, data, and costs.

## How It Works

1. **Connect Your GitHub Repository**
   - Authorize Obelis to access your repositories
   - Select the repository and branch you want to deploy

2. **Add AWS Credentials**
   - Create an IAM user in your AWS account
   - Provide the credentials to Obelis (encrypted and secure)

3. **AI Configuration**
   - Obelis AI analyzes your codebase
   - Automatically detects project type and requirements
   - Generates optimal build and deployment settings

4. **Deploy**
   - Click deploy and watch your infrastructure provision
   - Monitor real-time deployment progress
   - Access your live application URL

## Platform Components

### 📦 Projects
Manage multiple applications with different configurations. Support for:
- **Static Websites** - React, Vue, Angular, Next.js
- **Lambda Functions** - Serverless Node.js and Python applications  
- **Container Applications** - Docker-based services

### 🔐 Credentials Management
Securely store and manage:
- **AWS Credentials** - IAM access keys for deployment
- **Neon Credentials** - Database access for serverless PostgreSQL
- **API Keys** - For MCP integration and automation

### 💾 Storage (Powered by Neon)
Serverless PostgreSQL databases with:
- Auto-scaling from zero to massive workloads
- Instant database branching for development
- Built-in connection pooling
- Point-in-time recovery

### 🤖 MCP Integration
Model Context Protocol (MCP) server for AI-assisted deployments:
- Integrate with Cursor IDE or Claude
- Deploy and manage infrastructure through AI chat
- Automate complex DevOps tasks with natural language

## Supported Technologies

### Frontend Frameworks
- React, Next.js
- Vue.js, Nuxt
- Angular
- Static HTML/CSS/JS
- Gatsby, Hugo, Jekyll

### Backend Technologies
- Node.js (Express, Fastify, NestJS)
- Python (Flask, Django, FastAPI)
- Go
- Ruby on Rails
- PHP (Laravel, Symfony)

### Databases
- PostgreSQL (via Neon)
- MySQL (RDS)
- MongoDB (DocumentDB)
- Redis (ElastiCache)

### AWS Services Utilized
- EC2, Lambda, ECS/Fargate
- S3, CloudFront
- RDS, DynamoDB
- VPC, Security Groups
- Route53, ACM
- CloudWatch, X-Ray

## Getting Started

Ready to deploy your first application? Follow our [Quickstart Guide](/docs/quickstart) to go from code to production in minutes.

## Need Help?

- Join our [Discord Community](https://discord.gg/VAeT5Q3hbc)
- Check our [FAQ](/docs/faq)
- Review [Troubleshooting Guide](/docs/troubleshooting)
- Contact support at support@obelis.ai