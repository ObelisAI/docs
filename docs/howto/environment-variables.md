---
id: environment-variables
title: Configure Environment Variables
sidebar_label: Environment Variables
---

# Configure Environment Variables

Environment variables allow you to configure your application without hardcoding sensitive information or environment-specific settings in your code. Obelis makes it easy to manage environment variables for each project.

## Understanding Environment Variables

### What Are Environment Variables?

Environment variables are key-value pairs that your application can read at runtime:

- **Configuration**: Database URLs, API endpoints, feature flags
- **Secrets**: API keys, passwords, tokens
- **Environment-specific**: Development vs production settings
- **Dynamic values**: Generated URLs, resource identifiers

### Security Benefits

Using environment variables provides:

- **Separation of concerns**: Config separate from code
- **Security**: Secrets never in version control
- **Flexibility**: Different values per environment
- **Portability**: Same code runs everywhere

## Adding Environment Variables

### During Project Creation

When creating a new project, add variables in Step 6:

1. Navigate to the **Environment Variables** step
2. Click **"Add Variable"**
3. Enter the **Key** (variable name)
4. Enter the **Value**
5. Check **"Secret"** for sensitive values
6. Repeat for all variables needed

### To Existing Projects

Add variables to deployed projects:

1. Go to your project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Click **"Add Variable"**
4. Enter key and value
5. Click **"Save"**
6. Variables apply on next deployment

## Variable Types

### Regular Variables

Non-sensitive configuration values:

```bash
NODE_ENV=production
API_URL=https://api.example.com
LOG_LEVEL=info
FEATURE_FLAG_NEW_UI=true
MAX_UPLOAD_SIZE=10485760
```

### Secret Variables

Sensitive values that should be encrypted:

```bash
DATABASE_URL=postgresql://user:pass@host/db
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI...
STRIPE_SECRET_KEY=sk_live_...
JWT_SECRET=your-secret-key
SMTP_PASSWORD=secure-password
```

Mark as **"Secret"** to:
- Encrypt at rest
- Hide in UI (show as •••••)
- Exclude from logs
- Restrict access

### System Variables

Obelis automatically provides:

| Variable | Description | Example |
|----------|-------------|---------|
| `AWS_REGION` | Deployment region | `us-east-1` |
| `NODE_ENV` | Environment name | `production` |
| `PORT` | Application port | `3000` |
| `AWS_EXECUTION_ENV` | Runtime environment | `AWS_Lambda` |

## Naming Conventions

### Best Practices

Follow these naming conventions:

1. **Use UPPER_SNAKE_CASE**: `DATABASE_URL`, not `databaseUrl`
2. **Be descriptive**: `POSTGRES_CONNECTION_STRING` not `DB`
3. **Prefix by service**: `STRIPE_API_KEY`, `SENDGRID_API_KEY`
4. **Environment suffix**: `API_URL_STAGING`, `API_URL_PRODUCTION`

### Common Patterns

```bash
# Database
DATABASE_URL=postgresql://...
DATABASE_HOST=db.example.com
DATABASE_PORT=5432
DATABASE_NAME=myapp
DATABASE_USER=appuser
DATABASE_PASSWORD=secretpass

# API Keys
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
SENDGRID_API_KEY=SG...
TWILIO_AUTH_TOKEN=...

# URLs
API_BASE_URL=https://api.example.com
FRONTEND_URL=https://app.example.com
WEBHOOK_URL=https://app.example.com/webhooks

# Feature Flags
FEATURE_NEW_DASHBOARD=true
FEATURE_BETA_ACCESS=false
MAINTENANCE_MODE=false

# Configuration
MAX_UPLOAD_SIZE=10485760
SESSION_TIMEOUT=3600
RATE_LIMIT_REQUESTS=100
```

## Using Variables in Your Code

### Node.js / JavaScript

Access variables via `process.env`:

```javascript
// Basic usage
const apiUrl = process.env.API_URL;
const port = process.env.PORT || 3000;

// With defaults
const dbUrl = process.env.DATABASE_URL || 'postgresql://localhost/dev';

// Type conversion
const maxSize = parseInt(process.env.MAX_UPLOAD_SIZE) || 5242880;
const debugMode = process.env.DEBUG === 'true';

// Validation
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is required');
}
```

### Python

Access variables via `os.environ`:

```python
import os

# Basic usage
api_url = os.environ.get('API_URL')
port = int(os.environ.get('PORT', 3000))

# With defaults
db_url = os.getenv('DATABASE_URL', 'postgresql://localhost/dev')

# Type conversion
max_size = int(os.getenv('MAX_UPLOAD_SIZE', '5242880'))
debug_mode = os.getenv('DEBUG', 'false').lower() == 'true'

# Validation
stripe_key = os.environ.get('STRIPE_SECRET_KEY')
if not stripe_key:
    raise ValueError('STRIPE_SECRET_KEY is required')
```

### React / Frontend

For build-time variables:

```javascript
// Create React App
const apiUrl = process.env.REACT_APP_API_URL;

// Next.js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Vite
const apiUrl = import.meta.env.VITE_API_URL;

// Note: Only variables with correct prefix are exposed
// REACT_APP_, NEXT_PUBLIC_, VITE_, etc.
```

## Environment-Specific Configuration

### Multiple Environments

Manage different values per environment:

#### Development
```bash
API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost/dev
LOG_LEVEL=debug
STRIPE_SECRET_KEY=sk_test_...
```

#### Staging
```bash
API_URL=https://staging-api.example.com
DATABASE_URL=postgresql://staging.db/app
LOG_LEVEL=info
STRIPE_SECRET_KEY=sk_test_...
```

#### Production
```bash
API_URL=https://api.example.com
DATABASE_URL=postgresql://prod.db/app
LOG_LEVEL=error
STRIPE_SECRET_KEY=sk_live_...
```

### Managing Multiple Environments

1. **Separate Projects**: Create different Obelis projects
2. **Branch-based**: Deploy different branches with different vars
3. **Variable Groups**: Organize variables by environment

## Database Connections

### PostgreSQL with Neon

For Neon databases created through Obelis:

```bash
# Automatically provided
DATABASE_URL=postgresql://user:pass@host/dbname?sslmode=require

# Additional options
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
DATABASE_SSL=true
```

### External Databases

Connect to existing databases:

```bash
# MySQL
MYSQL_HOST=mysql.example.com
MYSQL_PORT=3306
MYSQL_DATABASE=myapp
MYSQL_USER=appuser
MYSQL_PASSWORD=secretpass

# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db

# Redis
REDIS_URL=redis://user:pass@redis.example.com:6379
```

## Third-Party Services

### Common Service Variables

#### Stripe Payments
```bash
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### SendGrid Email
```bash
SENDGRID_API_KEY=SG...
SENDGRID_FROM_EMAIL=noreply@example.com
SENDGRID_TEMPLATE_ID=d-abc123...
```

#### AWS Services
```bash
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_S3_BUCKET=my-app-uploads
AWS_SES_REGION=us-east-1
```

#### Auth0 / OAuth
```bash
AUTH0_DOMAIN=myapp.auth0.com
AUTH0_CLIENT_ID=...
AUTH0_CLIENT_SECRET=...
AUTH0_CALLBACK_URL=https://app.example.com/callback
```

## Build-Time vs Runtime Variables

### Build-Time Variables

Set during build process:

```bash
# React build variables
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=$npm_package_version

# Next.js public variables
NEXT_PUBLIC_ANALYTICS_ID=GA-123456
NEXT_PUBLIC_API_URL=https://api.example.com
```

These are:
- Embedded in build output
- Visible in browser code
- Cannot be changed without rebuild

### Runtime Variables

Read when application starts:

```bash
# Server-side only
DATABASE_URL=postgresql://...
JWT_SECRET=secret-key
ADMIN_EMAIL=admin@example.com
```

These are:
- Never exposed to client
- Can change without rebuild
- Read fresh on each start

## Variable Validation

### Required Variables Check

Validate on application start:

```javascript
// Node.js validation
function validateEnv() {
  const required = [
    'DATABASE_URL',
    'JWT_SECRET',
    'STRIPE_SECRET_KEY'
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }
}

// Run on startup
validateEnv();
```

### Type Validation

Ensure correct types:

```javascript
// Using joi or similar
const schema = joi.object({
  PORT: joi.number().default(3000),
  DATABASE_URL: joi.string().required(),
  LOG_LEVEL: joi.string().valid('debug', 'info', 'error'),
  MAX_RETRIES: joi.number().min(1).max(10)
});

const config = schema.validate(process.env);
```

## Debugging Variables

### Viewing Current Variables

Check active variables:

1. **In Obelis Dashboard**:
   - Go to Project → Settings → Environment Variables
   - See all non-secret values

2. **In Application Logs**:
   ```javascript
   // Log non-sensitive vars (never log secrets!)
   console.log('Config:', {
     NODE_ENV: process.env.NODE_ENV,
     API_URL: process.env.API_URL,
     LOG_LEVEL: process.env.LOG_LEVEL
   });
   ```

3. **Via SSH/Console**:
   ```bash
   # List all variables (be careful with secrets)
   printenv | grep -v SECRET
   ```

### Common Issues

#### Variable Not Found

**Problem**: `undefined` when reading variable

**Solutions**:
1. Verify variable name matches exactly (case-sensitive)
2. Check variable is set in Obelis dashboard
3. Redeploy after adding new variables
4. For React, ensure correct prefix (`REACT_APP_`)

#### Variable Not Updating

**Problem**: Old value still used after update

**Solutions**:
1. Trigger new deployment after changing
2. For Lambda, wait for cold start
3. Clear CDN cache for static sites
4. Restart application containers

## Security Best Practices

### Do's ✅

1. **Use secrets management**: Mark sensitive values as secrets
2. **Rotate regularly**: Change API keys periodically
3. **Limit scope**: Use minimal permissions for API keys
4. **Validate input**: Check variable values on startup
5. **Use strong values**: Long, random secrets
6. **Different per environment**: Never share prod secrets

### Don'ts ❌

1. **Never commit secrets**: Keep out of version control
2. **Don't log secrets**: Never print sensitive values
3. **Avoid hardcoding**: Always use variables for config
4. **Don't share secrets**: Each env needs unique values
5. **Don't expose to client**: Keep secrets server-side only
6. **Don't use defaults**: Require explicit secret values

## Migration Guide

### From .env Files

Migrate from local `.env` files:

1. **Extract variables**:
   ```bash
   # List all variables
   cat .env | grep -v '^#' | grep -v '^$'
   ```

2. **Add to Obelis**: Copy each variable to dashboard

3. **Update code**: Remove `.env` file loading:
   ```javascript
   // Remove this
   require('dotenv').config();
   
   // Variables still work via process.env
   ```

### From Heroku/Vercel

Export and import config:

```bash
# Export from Heroku
heroku config -s > config.txt

# Or from Vercel
vercel env pull

# Then add each to Obelis dashboard
```

## Advanced Usage

### Dynamic Variables

Generate values at build/deploy time:

```javascript
// In build script
const variables = {
  BUILD_TIME: new Date().toISOString(),
  GIT_COMMIT: process.env.GITHUB_SHA,
  VERSION: require('./package.json').version
};

// Use in application
console.log(`Deployed version ${process.env.VERSION}`);
```

### Variable Injection

Inject variables into static files:

```html
<!-- index.html template -->
<script>
  window.ENV = {
    API_URL: '%REACT_APP_API_URL%',
    VERSION: '%REACT_APP_VERSION%'
  };
</script>
```

### Environment Detection

Auto-detect environment:

```javascript
function getEnvironment() {
  // Check explicit setting
  if (process.env.ENVIRONMENT) {
    return process.env.ENVIRONMENT;
  }
  
  // Detect from URL
  const host = process.env.APP_URL || '';
  if (host.includes('localhost')) return 'development';
  if (host.includes('staging')) return 'staging';
  return 'production';
}
```

## Troubleshooting

### Variable Interpolation

Some frameworks support variable references:

```bash
# Reference other variables
BASE_URL=https://example.com
API_URL=${BASE_URL}/api
WEBHOOK_URL=${BASE_URL}/webhooks
```

**Note**: Not all platforms support this. Test thoroughly.

### Special Characters

Handle special characters carefully:

```bash
# Escape special characters
PASSWORD="p@$$w0rd!"  # Use quotes
JSON_CONFIG='{"key": "value"}'  # Single quotes for JSON

# URL encoding
DATABASE_URL=postgresql://user:p%40ssw0rd@host/db
```

### Large Values

For large values (certificates, keys):

1. Consider using AWS Secrets Manager
2. Store in files and read at runtime
3. Use multi-line values with proper escaping

## Next Steps

With environment variables configured:

1. [Set up custom domains](/docs/howto/custom-domains)
2. [Connect GitHub repository](/docs/howto/connect-github)
3. [Deploy your first application](/docs/deploy-your-first-app)

## Getting Help

Need assistance with environment variables?

- 📚 Check our [FAQ](/docs/faq#environment-variables)
- 💬 Join our [Discord community](https://discord.gg/VAeT5Q3hbc)
- 📧 Contact support@obelis.ai
- 🐛 Report issues on [GitHub](https://github.com/obelis-ai)