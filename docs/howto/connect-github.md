---
id: connect-github
title: Connect Your GitHub Account
sidebar_label: Connect GitHub
---

# Connect Your GitHub Account

This guide walks you through connecting your GitHub account to Obelis AI for seamless repository access and automatic deployments.

## Prerequisites

- An active GitHub account
- At least one repository you want to deploy
- Admin access to the repository (for private repos)

## Step 1: Access GitHub Integration

### From the Projects Page

1. Log in to [beta.obelis.ai](https://beta.obelis.ai)
2. Navigate to **Projects** section
3. Click **"New Project"**
4. In the Source step, click **"Select Repository"**

### From Settings

1. Go to **Settings** → **Integrations**
2. Find the GitHub section
3. Click **"Connect GitHub"**

## Step 2: Authorize Obelis

### Initial Authorization

When you click to connect GitHub, you'll be redirected to GitHub's OAuth page:

1. **Review Permissions**
   - Read access to repositories
   - Read access to repository metadata
   - Webhook creation for automatic deployments

2. **Select Repository Access**
   - **All repositories**: Grants access to all current and future repos
   - **Selected repositories**: Choose specific repos (recommended)

3. **Confirm Authorization**
   - Click **"Authorize Obelis"**
   - You'll be redirected back to Obelis

### Permission Scopes

Obelis requests minimal permissions:

| Permission | Purpose |
|------------|---------|
| `repo:status` | Read commit statuses |
| `public_repo` | Access public repositories |
| `repo` (private) | Access private repositories |
| `read:org` | List your organizations |
| `webhook` | Create deployment webhooks |

## Step 3: Configure Repository Access

### Managing Repository Access

After authorization, configure which repositories Obelis can access:

1. **View Connected Repositories**
   - Go to Settings → Integrations
   - See list of accessible repositories

2. **Add More Repositories**
   - Click **"Configure GitHub Access"**
   - Select additional repositories
   - Save changes

3. **Remove Repository Access**
   - Click **"Configure GitHub Access"**
   - Deselect repositories
   - Save changes

### Organization Repositories

For organization-owned repositories:

1. **Organization Admin Approval**
   - Organization owner must approve Obelis access
   - Check organization settings if repos aren't visible

2. **Team Permissions**
   - Ensure you have at least "Write" access to the repository
   - Admin access required for webhook creation

## Step 4: Verify Connection

### Test Repository Access

1. Go to **Projects** → **New Project**
2. Click **"Select Repository"**
3. Verify your repositories appear in the list

### Check Webhook Installation

For automatic deployments, verify webhook installation:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Webhooks**
3. Look for Obelis webhook (created after first deployment)

### Webhook Events

Obelis listens for:
- `push` - Triggers deployment on branch push
- `pull_request` - Updates deployment status
- `release` - Deploys release tags

## Working with Private Repositories

### Access Requirements

For private repositories:

1. **Repository Permissions**
   - You must have at least "Read" access
   - "Admin" access needed for automatic deployments

2. **GitHub Plan**
   - Free GitHub accounts support unlimited private repos
   - No special GitHub plan required

### Security Considerations

- **Token Storage**: GitHub tokens are encrypted at rest
- **Token Scope**: Limited to selected repositories only
- **Token Rotation**: Tokens auto-refresh using OAuth
- **Revocation**: Can revoke access anytime from GitHub

## Managing Multiple GitHub Accounts

### Switching Accounts

To use a different GitHub account:

1. Go to **Settings** → **Integrations**
2. Click **"Disconnect GitHub"**
3. Click **"Connect GitHub"** 
4. Log in with different GitHub account

### Using GitHub Organizations

To deploy from organization repositories:

1. Ensure you're a member of the organization
2. Have appropriate repository permissions
3. Organization owner must approve Obelis

## Automatic Deployments

### Enable Auto-Deploy

Once connected, enable automatic deployments:

1. In your project settings
2. Toggle **"Auto-deploy on push"**
3. Select the branch to monitor (e.g., `main`)

### Deploy on Push

With auto-deploy enabled:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main

# Obelis automatically detects push and starts deployment
```

### Deployment Notifications

Get notified about deployments:

- **GitHub Status Checks**: See deployment status on PRs
- **Email Notifications**: Configure in Obelis settings
- **Webhook Notifications**: Set up custom webhooks

## Troubleshooting

### Repositories Not Showing

**Problem**: Your repositories don't appear in the list

**Solutions**:
1. Click **"Configure GitHub Access"** and verify permissions
2. For organizations, check admin approval status
3. Refresh the page or reconnect GitHub
4. Ensure you have at least read access to repositories

### Webhook Not Triggering

**Problem**: Pushes don't trigger automatic deployments

**Solutions**:
1. Verify webhook exists in GitHub repo settings
2. Check webhook recent deliveries for errors
3. Ensure auto-deploy is enabled in project settings
4. Verify you're pushing to the configured branch

### Permission Denied

**Problem**: Can't access certain repositories

**Solutions**:
1. Check your GitHub repository permissions
2. For org repos, verify organization approved Obelis
3. Reconnect GitHub with proper repository selection
4. Contact repository admin for access

### Connection Expired

**Problem**: GitHub connection stops working

**Solutions**:
1. Go to Settings → Integrations
2. Click **"Reconnect GitHub"**
3. Re-authorize Obelis
4. Verify repository access

## Security Best Practices

### Access Management

1. **Principle of Least Privilege**
   - Only grant access to required repositories
   - Use "Selected repositories" instead of "All"

2. **Regular Audits**
   - Review connected repositories monthly
   - Remove access to unused repositories
   - Check webhook activity logs

3. **Token Security**
   - Never share OAuth tokens
   - Revoke access if account compromised
   - Use GitHub's security alerts

### Monitoring Access

Monitor Obelis access from GitHub:

1. Go to GitHub → Settings → Applications
2. Find "Obelis AI" in authorized apps
3. Review permissions and repository access
4. Check last accessed timestamp

## Disconnecting GitHub

### Temporary Disconnection

To temporarily disconnect:

1. Go to Obelis Settings → Integrations
2. Click **"Disconnect GitHub"**
3. Existing projects continue to work
4. Can't create new projects or trigger deployments

### Permanent Revocation

To permanently revoke access:

1. Go to GitHub → Settings → Applications
2. Find "Obelis AI"
3. Click **"Revoke access"**
4. Optionally remove webhooks from repositories

### Data Retention

After disconnection:
- Existing deployments remain active
- Project configurations are preserved
- Deployment history is retained
- Can reconnect anytime to resume

## Advanced Configuration

### Deploy Keys (Alternative)

For enhanced security, use deploy keys:

1. Generate SSH key pair
2. Add public key to GitHub repository
3. Configure in Obelis project settings
4. Limited to single repository access

### GitHub Actions Integration

Combine with GitHub Actions:

```yaml
name: Deploy with Obelis
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Trigger Obelis Deployment
        run: |
          curl -X POST https://api.obelis.ai/deploy \
            -H "Authorization: Bearer ${{ secrets.OBELIS_TOKEN }}" \
            -d '{"project_id": "${{ secrets.PROJECT_ID }}"}'
```

### Branch Protection

Work with protected branches:

1. Enable branch protection in GitHub
2. Configure required status checks
3. Obelis reports deployment status
4. Merge only after successful deploy

## API Access

### Using GitHub API with Obelis

Access repository information programmatically:

```bash
# Get connected repositories
curl https://api.obelis.ai/github/repos \
  -H "Authorization: Bearer YOUR_API_KEY"

# Trigger deployment for specific commit
curl -X POST https://api.obelis.ai/deploy \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"repo": "owner/repo", "commit": "abc123"}'
```

## Next Steps

Now that GitHub is connected:

1. [Create your first project](/docs/deploy-your-first-app)
2. [Configure environment variables](/docs/howto/environment-variables)
3. [Add custom domains](/docs/howto/custom-domains)

## Getting Help

Need assistance with GitHub integration?

- 📚 Check our [FAQ](/docs/faq#github)
- 💬 Join our [Discord community](https://discord.gg/VAeT5Q3hbc)
- 📧 Contact support@obelis.ai
- 🐛 Report issues on [GitHub](https://github.com/obelis-ai)