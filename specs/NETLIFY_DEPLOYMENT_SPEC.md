# Netlify Deployment Specification
## PHC Conference 2026 Website

### Overview
This document outlines the deployment configuration for the PHC Conference 2026 website on Netlify, enabling automatic deployments from GitHub pushes similar to the existing PHC Conference sites.

---

## 1. Prerequisites

### GitHub Repository
- Repository URL: Connect your GitHub repository containing the PHC Conference 2026 codebase
- Branch: `main` (or your default branch)
- Authentication: GitHub OAuth via Netlify dashboard

### Current Build Configuration
- **Framework**: Next.js 15 with static export
- **Output**: Static HTML/CSS/JS (via `next build` with `output: 'export'`)
- **Node Version**: 20.x or higher recommended
- **Package Manager**: npm

---

## 2. Netlify Site Configuration

### Initial Setup
1. Log into Netlify with GitHub account
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select the PHC Conference 2026 repository
4. Configure build settings as specified below

### Build Settings
```yaml
Base directory: /
Build command: npm run build
Publish directory: out
Node version: 20.x
```

### Environment Variables
```env
# Production URLs
NEXT_PUBLIC_SITE_URL=https://phcukconference.org
NEXT_PUBLIC_TICKET_URL=https://your-ticket-platform.com

# AWS Configuration (if keeping AWS integrations)
AWS_REGION=eu-west-2
AWS_S3_BUCKET=phc-conference-2026
AWS_DYNAMODB_TABLE=phc-conference-data
```

---

## 3. Deploy Configuration Files

### netlify.toml (Root Directory)
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/conference"
  to = "/"
  status = 301

# Add custom 404 page
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

### .nvmrc (Root Directory)
```
20
```

---

## 4. Build Optimization

### Package.json Scripts
Ensure your package.json includes:
```json
{
  "scripts": {
    "dev": "next dev -p 3010",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export"
  }
}
```

### Next.js Configuration
Current `next.config.ts` is already configured for static export:
```typescript
{
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

---

## 5. Deployment Workflow

### Automatic Deployments
1. **Production Deploys**: Every push to `main` branch
2. **Preview Deploys**: Automatic for all pull requests
3. **Branch Deploys**: Optional for specific branches

### Deploy Contexts
- **Production**: `main` branch → phcukconference.org
- **Deploy Previews**: PR branches → unique preview URLs
- **Branch Deploys**: Feature branches → branch-name--sitename.netlify.app

---

## 6. Domain Configuration

### Primary Domain Setup
1. In Netlify dashboard → Domain settings
2. Add custom domain: `phcukconference.org`
3. Configure DNS:
   - Option A: Use Netlify DNS (recommended)
   - Option B: Add CNAME record pointing to Netlify subdomain

### SSL/HTTPS
- Automatic SSL provisioning via Let's Encrypt
- Force HTTPS: Enabled by default
- HTTP/2: Enabled automatically

---

## 7. Performance & Optimization

### Build Plugins
Recommended Netlify plugins:
- **Essential Next.js**: Automatic Next.js optimizations
- **Lighthouse**: Performance monitoring
- **Submit Sitemap**: Auto-submit to search engines

### Asset Optimization
- Images: Already configured with `unoptimized: true` for static export
- JavaScript/CSS: Automatically minified by Next.js
- Caching: Configured via headers in netlify.toml

---

## 8. Migration Checklist

### Pre-Deployment
- [x] Remove/update AWS-specific code or make conditional
- [x] Update environment variables configuration (.env.example created)
- [x] Test build locally with `npm run build`
- [x] Verify `out` directory contains expected files

### Deployment Steps
1. [ ] Connect GitHub repository to Netlify
2. [ ] Configure build settings
3. [ ] Add environment variables
4. [ ] Deploy site (initial build)
5. [ ] Test preview URL
6. [ ] Configure custom domain
7. [ ] Update DNS records
8. [ ] Verify SSL certificate
9. [ ] Test production site

### Post-Deployment
- [ ] Set up deploy notifications (email/Slack)
- [ ] Configure build hooks if needed
- [ ] Document deploy URLs for team
- [x] Update CLAUDE.md with new deployment info

---

## 9. Rollback Strategy

### Quick Rollback
1. Netlify dashboard → Deploys tab
2. Find previous successful deploy
3. Click "Publish deploy" to instantly rollback

### Git-based Rollback
```bash
git revert HEAD
git push origin main
```

---

## 10. Monitoring & Maintenance

### Build Monitoring
- Build time: Target < 2 minutes
- Build status: Available in Netlify dashboard
- Build logs: Accessible for debugging

### Analytics
- Netlify Analytics (paid feature)
- Or integrate Google Analytics/Plausible

### Regular Updates
- Review and update Node version quarterly
- Monitor dependency security alerts
- Update build plugins as needed

---

## 11. Team Access

### Netlify Team Setup
1. Invite team members via Netlify dashboard
2. Assign roles:
   - **Owner**: Full access
   - **Developer**: Deploy and configure
   - **Reviewer**: View only

### GitHub Integration
- Maintain GitHub repository access controls
- Use branch protection for `main` branch
- Require PR reviews before merge

---

## Notes

### AWS Services Migration
If removing AWS dependencies:
1. Replace DynamoDB with Netlify Forms or third-party service
2. Host images directly in repository or use CDN
3. Update data fetching to use static JSON or API routes

### Keeping AWS Services
If maintaining AWS services:
1. Ensure AWS credentials are securely stored in Netlify env vars
2. Consider using Netlify Functions for server-side AWS calls
3. Update CORS settings for new domain

---

## Support & Resources

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/)
- [Netlify Support](https://www.netlify.com/support/)
- Previous PHC Conference site configs for reference