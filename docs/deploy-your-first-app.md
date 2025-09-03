---
id: deploy-your-first-app
title: Deploy Your First Application
sidebar_label: Deploy Your First App
---

# Deploy Your First Application

This guide walks you through deploying your first application with Obelis AI. We'll cover everything from initial setup to accessing your live application.

## Prerequisites

Before starting, ensure you have:

- ✅ An Obelis account ([Sign up at beta.obelis.ai](https://beta.obelis.ai))
- ✅ A GitHub account with a repository to deploy
- ✅ An AWS account with IAM credentials ready

Don't have these yet? Check our [Requirements Guide](/docs/requirements) for detailed setup instructions.

## Step 1: Create a New Project

### Access the Projects Dashboard

1. Log in to [beta.obelis.ai](https://beta.obelis.ai)
2. Navigate to the **Projects** section
3. Click the **"New Project"** button

You'll be guided through a 6-step wizard to configure your deployment.

## Step 2: Connect Your Source Code

### Select Repository and Branch

In the Source step, you'll connect your GitHub repository:

1. **Repository Selection**
   - Click "Select Repository" to see your GitHub repositories
   - Choose the repository containing your application
   - If you don't see your repo, click "Configure GitHub Access" to grant permissions

2. **Branch Selection**
   - Select the branch you want to deploy (e.g., `main`, `master`, `develop`)
   - This branch will be monitored for automatic deployments

3. **Repository Requirements**
   - Public or private repositories are supported
   - Repository should contain a valid application (React, Node.js, Python, etc.)
   - Maximum repository size: 2 GB

Click **"Next"** to proceed to project type selection.

## Step 3: Select Project Type

Obelis supports three main project types:

### 🌐 Static Website
Best for:
- React, Vue, Angular applications
- Next.js, Gatsby, Hugo sites
- Plain HTML/CSS/JavaScript

**Infrastructure Created:**
- S3 bucket for hosting
- CloudFront CDN for global distribution
- Route53 for DNS (if custom domain)
- ACM for SSL certificates

### ⚡ Lambda Server
Best for:
- Node.js or Python APIs
- Serverless functions
- Event-driven applications

**Infrastructure Created:**
- Lambda functions
- API Gateway
- CloudWatch logs
- IAM roles and policies

### 📦 Container Server
Best for:
- Dockerized applications
- Microservices
- Complex backend applications

**Infrastructure Created:**
- ECS/Fargate cluster
- Application Load Balancer
- VPC with subnets
- Security groups
- Auto-scaling configuration

Select the type that matches your application and click **"Next"**.

## Step 4: Configure AWS Credentials

### Select or Add Credentials

If you haven't added AWS credentials yet:

1. Click **"Add New Credentials"**
2. Enter a name for these credentials (e.g., "Production AWS")
3. Provide your AWS Access Key ID and Secret Access Key
4. Click **"Save Credentials"**

If you already have credentials saved:
1. Select from the dropdown list
2. Click **"Next"** to continue

> 🔒 **Security Note**: Credentials are encrypted and never exposed. You can delete them anytime from the Credentials page.

## Step 5: Configure Build Settings

Obelis AI automatically analyzes your repository and suggests optimal build settings.

### For Static Websites

Common settings include:

```yaml
Build Command: npm run build
Output Directory: build
Install Command: npm install
Node Version: 18
```

### For Lambda Functions

```yaml
Runtime: nodejs18.x
Handler: index.handler
Memory: 512 MB
Timeout: 30 seconds
```

### For Container Applications

```yaml
Dockerfile: ./Dockerfile
Port: 3000
CPU: 256
Memory: 512 MB
```

**AI-Powered Detection**: Obelis analyzes your `package.json`, `requirements.txt`, or other configuration files to automatically populate these settings.

Review and adjust if needed, then click **"Next"**.

## Step 6: Set Environment Variables

Add any environment variables your application needs:

### Adding Variables

1. Click **"Add Variable"**
2. Enter the key (e.g., `DATABASE_URL`)
3. Enter the value
4. Mark as "Secret" if it contains sensitive data

### Common Variables

- `NODE_ENV`: `production`
- `API_URL`: Your backend API endpoint
- `DATABASE_URL`: Connection string (for database apps)
- `AWS_REGION`: Target AWS region

### Best Practices

- Never commit secrets to your repository
- Use descriptive variable names
- Document required variables in your README

Click **"Next"** to review your configuration.

## Step 7: Review and Deploy

### Final Review

Review all your settings:

- **Source**: Repository and branch
- **Type**: Project type
- **Credentials**: AWS account
- **Build Settings**: Commands and configuration
- **Environment**: Variables and secrets

### Estimated Costs

Obelis provides an estimated monthly cost based on:
- Selected project type
- AWS region
- Expected traffic (for static sites)
- Compute resources (for servers)

Example estimates:
- Static Website: $0.50 - $5/month
- Lambda Server: $0 - $10/month (pay per request)
- Container Server: $20 - $50/month

### Start Deployment

Click **"Deploy"** to start the deployment process.

## Step 8: Monitor Deployment Progress

### Real-Time Updates

Once deployment starts, you'll see:

1. **Infrastructure Provisioning**
   - Creating AWS resources
   - Setting up networking
   - Configuring security

2. **Build Process**
   - Installing dependencies
   - Running build commands
   - Optimizing assets

3. **Deployment**
   - Uploading code
   - Configuring services
   - Starting application

### Deployment Stages

| Stage | Duration | Description |
|-------|----------|-------------|
| Initialize | 30s | Setting up deployment environment |
| Provision | 2-5 min | Creating AWS infrastructure |
| Build | 1-10 min | Building your application |
| Deploy | 1-2 min | Deploying to AWS |
| Verify | 30s | Health checks and validation |

### Handling Errors

If deployment fails:

1. Check the error message in the logs
2. Common issues:
   - Invalid build commands
   - Missing environment variables
   - AWS quota limits
   - Repository access issues
3. Fix the issue and click "Retry Deployment"

## Step 9: Access Your Application

### Deployment Success

Once deployment completes successfully:

1. **Application URL**: Your app is accessible at the provided URL
   - Static sites: CloudFront distribution URL
   - Lambda: API Gateway endpoint
   - Container: Load balancer URL

2. **Custom Domain** (optional):
   - Navigate to project settings
   - Add your custom domain
   - Update DNS records as instructed

3. **View Logs**:
   - Click "View Logs" to see application logs
   - Monitor performance in CloudWatch

### Example URLs

- Static: `https://d1234abcd.cloudfront.net`
- Lambda: `https://abc123.execute-api.us-east-1.amazonaws.com`
- Container: `https://app-lb-1234567890.us-east-1.elb.amazonaws.com`

## Step 10: Continuous Deployment

### Automatic Deployments

Obelis automatically deploys when you push to your configured branch:

1. Push code to GitHub
2. Obelis detects the change
3. Automatic build and deploy
4. Notification on completion

### Manual Deployments

To manually trigger a deployment:

1. Go to your project dashboard
2. Click "Deploy" button
3. Select branch (if different from default)
4. Confirm deployment

## Managing Your Deployment

### Project Dashboard

From your project dashboard, you can:

- **View Status**: Current deployment state
- **Access Logs**: Real-time application logs
- **Manage Variables**: Update environment variables
- **Configure Domains**: Add custom domains
- **Scale Resources**: Adjust compute resources
- **Delete Project**: Remove all AWS resources

### Monitoring

Monitor your application with:

- **Metrics**: CPU, memory, requests
- **Logs**: Application and error logs
- **Alerts**: Set up notifications
- **Cost Tracking**: View AWS costs

## Best Practices

### Development Workflow

1. **Use Branches**: Deploy staging from `develop`, production from `main`
2. **Test Locally**: Ensure your app builds locally before deploying
3. **Environment Variables**: Use different values for staging/production
4. **Monitor Costs**: Regularly check AWS billing dashboard

### Security

1. **Rotate Credentials**: Change AWS keys every 90 days
2. **Use Secrets**: Mark sensitive variables as secrets
3. **Review Permissions**: Ensure IAM policies follow least privilege
4. **Enable MFA**: On both GitHub and AWS accounts

### Performance

1. **Optimize Builds**: Use caching for dependencies
2. **CDN Usage**: Leverage CloudFront for static assets
3. **Right-size Resources**: Start small and scale as needed
4. **Monitor Metrics**: Watch for performance bottlenecks

## Troubleshooting Common Issues

### Build Failures

**Problem**: Build command fails
**Solution**: 
- Verify build command works locally
- Check Node.js version compatibility
- Ensure all dependencies are in package.json

### Missing Environment Variables

**Problem**: Application crashes due to missing config
**Solution**:
- Add required variables in project settings
- Check variable names match your code
- Restart application after adding variables

### AWS Limits

**Problem**: Deployment fails with quota error
**Solution**:
- Check AWS service quotas
- Request limit increase from AWS
- Use different region if needed

### Repository Access

**Problem**: Can't access private repository
**Solution**:
- Reconnect GitHub in settings
- Verify repository permissions
- Check GitHub token hasn't expired

## Next Steps

Congratulations! Your application is now live. Here's what to do next:

1. **Set Up Monitoring**: Configure CloudWatch alerts
2. **Add Custom Domain**: Professional URL for your app
3. **Enable Auto-scaling**: Handle traffic spikes
4. **Set Up CI/CD**: Integrate with your workflow
5. **Explore Advanced Features**: 
   - Database integration with Neon
   - MCP for AI-assisted management
   - Multi-environment deployments

## Getting Help

Need assistance?

- 📚 Browse our [documentation](/docs/intro)
- 💬 Join our [Discord community](https://discord.gg/VAeT5Q3hbc)
- 📧 Email support at support@obelis.ai
- 🐛 Report issues on [GitHub](https://github.com/obelis-ai)

Happy deploying! 🚀