---
id: aws-credentials  
title: Set Up AWS Credentials
sidebar_label: AWS Credentials
---

# Set Up AWS Credentials

This guide walks you through creating and configuring AWS IAM credentials for Obelis deployments. Obelis deploys all infrastructure to your own AWS account, giving you complete control over your resources and costs.

## Why AWS Credentials Are Required

Obelis needs AWS credentials to:
- Create and manage infrastructure resources
- Deploy your applications
- Configure security and networking
- Set up monitoring and logging
- Manage costs and billing

All resources are created in **your AWS account**, ensuring:
- Full ownership and control
- Direct AWS billing (no platform markup)
- Complete transparency
- Data sovereignty

## Step 1: Create an AWS Account

If you don't have an AWS account:

1. Go to [aws.amazon.com](https://aws.amazon.com)
2. Click **"Create an AWS Account"**
3. Follow the registration process:
   - Provide email and account name
   - Verify email address
   - Enter payment information
   - Verify phone number
   - Select support plan (Basic is free)

### AWS Free Tier

New AWS accounts include 12 months of free tier usage:
- 750 hours/month of EC2 t2.micro
- 5 GB of S3 storage
- 1 million Lambda requests/month
- And many more services

## Step 2: Create an IAM User

### Access IAM Console

1. Sign in to [AWS Console](https://console.aws.amazon.com)
2. Search for **"IAM"** in the search bar
3. Click **"IAM"** to open Identity and Access Management

### Create New User

1. In IAM Dashboard, click **"Users"** in left sidebar
2. Click **"Create user"** button
3. Enter user details:
   - **User name**: `obelis-deployment` (or your preferred name)
   - **Access type**: Check **"Programmatic access"**
4. Click **"Next: Permissions"**

## Step 3: Attach Permissions

### Option 1: Administrator Access (Quickest)

For fastest setup, attach administrator policy:

1. Select **"Attach policies directly"**
2. Search for **"AdministratorAccess"**
3. Check the box next to **AdministratorAccess** policy
4. Click **"Next: Tags"**

⚠️ **Note**: This grants full AWS access. For production, use Option 2.

### Option 2: Custom Policy (Recommended)

For production deployments, create a custom policy:

1. Click **"Create policy"**
2. Select **"JSON"** tab
3. Paste this policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ObelisDeploymentAccess",
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
        "elasticloadbalancing:*",
        "autoscaling:*",
        "cloudformation:*",
        "secretsmanager:*",
        "ssm:*",
        "apigateway:*",
        "dynamodb:*",
        "rds:*",
        "elasticache:*"
      ],
      "Resource": "*"
    }
  ]
}
```

4. Click **"Next: Tags"**
5. Name the policy: `ObelisDeploymentPolicy`
6. Click **"Create policy"**
7. Return to user creation and attach this policy

### Option 3: Minimal Permissions

For specific project types, use minimal permissions:

#### Static Websites Only
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:*",
        "cloudfront:*",
        "route53:*",
        "acm:*",
        "iam:GetRole",
        "iam:PassRole"
      ],
      "Resource": "*"
    }
  ]
}
```

#### Lambda Functions Only
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "lambda:*",
        "apigateway:*",
        "iam:*",
        "logs:*",
        "cloudwatch:*"
      ],
      "Resource": "*"
    }
  ]
}
```

#### Container Applications Only
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecs:*",
        "ecr:*",
        "ec2:*",
        "elasticloadbalancing:*",
        "autoscaling:*",
        "iam:*",
        "logs:*"
      ],
      "Resource": "*"
    }
  ]
}
```

## Step 4: Create Access Keys

### Generate Keys

1. After creating the user, you'll see the **"Success"** screen
2. Click on the user name to open user details
3. Go to **"Security credentials"** tab
4. In **"Access keys"** section, click **"Create access key"**
5. Select **"Application running outside AWS"**
6. Click **"Create access key"**

### Save Your Credentials

⚠️ **IMPORTANT**: This is your only chance to view the secret key!

1. Click **"Download .csv file"** to save credentials
2. Or copy both:
   - **Access key ID**: Looks like `AKIAIOSFODNN7EXAMPLE`
   - **Secret access key**: Looks like `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
3. Store these securely - you'll need them for Obelis

### Security Best Practices

- **Never commit credentials** to version control
- **Store securely** using a password manager
- **Rotate regularly** - every 90 days recommended
- **Use separate keys** for different environments
- **Enable MFA** on your AWS root account

## Step 5: Add Credentials to Obelis

### Navigate to Credentials Page

1. Log in to [beta.obelis.ai](https://beta.obelis.ai)
2. Go to **Credentials** section
3. Click **"Add Credentials"** button
4. Select **"AWS"** as credential type

### Enter Credential Details

1. **Name**: Give your credentials a descriptive name
   - Examples: "Production AWS", "Development Account", "Personal AWS"
2. **Access Key ID**: Paste your AWS Access Key ID
3. **Secret Access Key**: Paste your AWS Secret Access Key
4. **Default Region** (optional): Select your preferred AWS region
   - Example: `us-east-1`, `eu-west-1`, `ap-southeast-1`

### Save and Verify

1. Click **"Save Credentials"**
2. Obelis will verify the credentials work
3. If successful, you'll see a green checkmark
4. If failed, verify:
   - Credentials are copied correctly
   - IAM user has required permissions
   - No extra spaces in credentials

## Step 6: Managing Multiple AWS Accounts

### Different Environments

Best practice is to use separate AWS accounts for:

- **Development**: Test new features
- **Staging**: Pre-production testing
- **Production**: Live applications

Add each as separate credentials in Obelis:
1. Name them clearly: "Dev AWS", "Staging AWS", "Prod AWS"
2. Select appropriate credential when creating projects
3. Keep credentials organized by environment

### AWS Organizations

If using AWS Organizations:

1. Create credentials for each member account
2. Use cross-account roles for better security
3. Set up consolidated billing for cost tracking

## Credential Security

### How Obelis Protects Your Credentials

- **Encryption at rest**: AES-256 encryption
- **Encryption in transit**: TLS 1.3
- **Access control**: Only you can view/use your credentials
- **No logging**: Secret keys never logged
- **Isolation**: Credentials isolated per user account

### Monitoring Credential Usage

Track how your credentials are used:

1. **AWS CloudTrail**: Monitor API calls in your AWS account
2. **Obelis Activity Log**: See deployment history
3. **AWS Cost Explorer**: Track spending by service
4. **IAM Access Analyzer**: Review permissions usage

## Rotating Credentials

### When to Rotate

Rotate credentials:
- Every 90 days (recommended)
- After employee departure
- If credentials potentially exposed
- During security audits

### How to Rotate

1. **Create new access keys** in AWS IAM
2. **Update in Obelis**:
   - Go to Credentials page
   - Edit existing credential
   - Update with new keys
3. **Test deployment** to verify new keys work
4. **Delete old keys** in AWS IAM

## Troubleshooting

### Invalid Credentials Error

**Problem**: "Invalid AWS credentials" error

**Solutions**:
1. Verify no extra spaces in keys
2. Check credentials haven't been deleted in AWS
3. Ensure IAM user is active
4. Try creating new access keys

### Insufficient Permissions

**Problem**: "Access Denied" during deployment

**Solutions**:
1. Check IAM user has required policies attached
2. Verify no AWS Organizations SCPs blocking access
3. Review CloudTrail for specific permission errors
4. Add missing permissions to IAM policy

### Region-Specific Issues

**Problem**: Resources not found in selected region

**Solutions**:
1. Verify you're using correct region
2. Some services not available in all regions
3. Check AWS service availability by region
4. Update default region in credential settings

### Quota Exceeded

**Problem**: AWS service quota limits reached

**Solutions**:
1. Check current usage in AWS Console
2. Request quota increase from AWS
3. Use different region with available capacity
4. Clean up unused resources

## Cost Management

### Monitoring Costs

Track AWS spending:

1. **AWS Cost Explorer**: Detailed cost breakdown
2. **AWS Budgets**: Set spending alerts
3. **Obelis Dashboard**: Estimated costs per project
4. **AWS Free Tier Dashboard**: Track free tier usage

### Cost Optimization

Reduce AWS costs:

- **Right-size resources**: Start small, scale as needed
- **Use spot instances**: For non-critical workloads
- **Enable auto-scaling**: Scale down during low traffic
- **Clean up unused resources**: Delete old deployments
- **Use AWS Free Tier**: For development/testing

## Advanced Configuration

### Using IAM Roles (Enterprise)

For enhanced security, use IAM roles:

1. Create IAM role with deployment permissions
2. Set up role assumption policy
3. Configure role ARN in Obelis
4. No long-term credentials needed

### Temporary Credentials

Use AWS STS for temporary credentials:

```bash
# Generate temporary credentials
aws sts get-session-token \
  --duration-seconds 3600 \
  --serial-number arn:aws:iam::account:mfa/user \
  --token-code 123456
```

### Cross-Account Deployment

Deploy to multiple AWS accounts:

1. Set up cross-account IAM roles
2. Configure trust relationships
3. Add role ARNs as credentials
4. Select target account per project

## Compliance and Auditing

### Compliance Requirements

For regulated industries:

- **HIPAA**: Use dedicated AWS accounts
- **PCI DSS**: Implement key rotation
- **SOC 2**: Enable CloudTrail logging
- **GDPR**: Configure data residency

### Audit Trail

Maintain audit trail:

1. Enable AWS CloudTrail in all regions
2. Store logs in S3 with versioning
3. Set up log analysis with CloudWatch
4. Regular security assessments

## Removing Credentials

### From Obelis

To remove credentials from Obelis:

1. Go to **Credentials** page
2. Find the credential to remove
3. Click **"Delete"** button
4. Confirm deletion

**Note**: Active projects using these credentials will fail to deploy.

### From AWS

To fully revoke access:

1. Go to AWS IAM Console
2. Find the IAM user
3. Delete all access keys
4. Optionally delete the entire user

## Best Practices Summary

1. ✅ Use separate IAM users for Obelis (not root account)
2. ✅ Apply principle of least privilege
3. ✅ Rotate credentials every 90 days
4. ✅ Use different credentials per environment
5. ✅ Enable MFA on AWS root account
6. ✅ Monitor usage with CloudTrail
7. ✅ Set up billing alerts
8. ✅ Never share or commit credentials
9. ✅ Use descriptive credential names in Obelis
10. ✅ Regular security audits

## Next Steps

With AWS credentials configured:

1. [Deploy your first application](/docs/deploy-your-first-app)
2. [Configure environment variables](/docs/howto/environment-variables)
3. [Set up custom domains](/docs/howto/custom-domains)

## Getting Help

Need assistance with AWS credentials?

- 📚 [AWS IAM Documentation](https://docs.aws.amazon.com/iam/)
- 💬 Join our [Discord community](https://discord.gg/VAeT5Q3hbc)
- 📧 Contact support@obelis.ai
- 🐛 Report issues on [GitHub](https://github.com/obelis-ai)