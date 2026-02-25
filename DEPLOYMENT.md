# Deployment Guide — Share Design Preview

> Host your design system preview to share with your business partner

---

## Quick Start (Recommended: Vercel)

**Fastest:** 2 minutes to deploy with password protection

### Step 1: Create GitHub Repo

```bash
cd /Users/christopherekraus/code/personal/design-studio-poc

# Commit files
git add -A
git commit -m "feat: AiSU design system POC"

# Create repo on GitHub (via gh CLI)
gh repo create design-studio-poc --private --source=. --remote=origin --push
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `design-studio-poc` repository
4. Click "Deploy"
5. **Done!** You'll get a URL like: `https://design-studio-poc-xyz.vercel.app`

### Step 3: Add Password Protection (Vercel Pro)

**Option A: Vercel Pro ($20/month)**
- Go to Project Settings → Password Protection
- Enable and set password
- Your partner needs password to access

**Option B: Free (Current Setup)**
- Uses `index.html` as password gate (already included)
- Default password: `aisu2026`
- Change password in `index.html` (line 140)

---

## Alternative Hosting Options

### Option 1: GitHub Pages (Free)

**Pros:** Free, simple, works with private repos (Pro)
**Cons:** Public URL (anyone with link can access), no server-side auth

```bash
# Enable GitHub Pages
gh repo view --web
# → Settings → Pages → Deploy from branch: main → /root

# Your URL will be:
# https://[your-username].github.io/design-studio-poc
```

**Password Protection:**
- Uses client-side protection (included in `index.html`)
- Password: `aisu2026` (change in code)
- Not secure for sensitive data, but fine for demos

---

### Option 2: Netlify (Free)

**Pros:** Free, easy, better than GH Pages
**Cons:** Password protection requires paid plan

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /Users/christopherekraus/code/personal/design-studio-poc
netlify deploy --prod

# Follow prompts, get URL like:
# https://design-studio-poc-xyz.netlify.app
```

**Password Protection:**
- Free tier: Uses `index.html` password gate (included)
- Paid tier ($19/mo): True password protection in dashboard

---

### Option 3: Simple HTTP Server (Local Network Only)

**For demo on same network (e.g., in-person meeting):**

```bash
cd /Users/christopherekraus/code/personal/design-studio-poc

# Python HTTP server
python3 -m http.server 8000

# Your partner accesses: http://[your-ip]:8000
# Get your IP: ifconfig | grep "inet "
```

---

## Security Levels

### Current Setup (Client-Side Protection)
- **Security:** Low (password visible in source code)
- **Use Case:** Internal demos, non-sensitive designs
- **Cost:** Free
- **Setup:** Already done ✓

### Vercel Pro Password Protection
- **Security:** Medium (server-side, hashed passwords)
- **Use Case:** Client presentations, partner reviews
- **Cost:** $20/month
- **Setup:** 1 click in dashboard

### Custom Server-Side Auth
- **Security:** High (full authentication system)
- **Use Case:** Production, customer-facing
- **Cost:** Varies
- **Setup:** Requires backend development

---

## Recommended Approach for Business Partner

### For Your Use Case:

**Best Option: Vercel Free + Client-Side Password**

**Why:**
- ✅ Free
- ✅ 2 minutes to deploy
- ✅ Professional URL
- ✅ SSL included
- ✅ Password gate included (adequate for demo)
- ✅ Easy to share (just send URL + password)

**Security Note:**
- Client-side password (not secure for sensitive data)
- Fine for design system demos
- Partner needs password to view
- Not indexed by search engines

---

## Step-by-Step: Deploy to Vercel (Recommended)

### 1. Commit and Push to GitHub

```bash
cd /Users/christopherekraus/code/personal/design-studio-poc

# Initialize git (if not already done)
git init
git add -A
git commit -m "feat: AiSU design system POC with password protection"

# Create private GitHub repo
gh repo create design-studio-poc --private --source=. --remote=origin

# Push
git push -u origin main
```

### 2. Deploy to Vercel

**Via Web:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select `design-studio-poc` repo
5. Click "Deploy"
6. Wait 30 seconds

**Via CLI (Alternative):**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 3. Share with Business Partner

Send them:
```
Hi [Partner],

Here's the design system preview for AiSU:

URL: https://design-studio-poc-xyz.vercel.app
Password: aisu2026

This shows:
- Color palette (Navy + Electric Blue)
- Typography (Inter variable font)
- Component examples (TestimonialCard with 3 variants)
- Live hero section mockup
- Full spacing/layout system
- Dark mode toggle

Let me know your thoughts!

Best,
Chris
```

---

## Customization

### Change Password

Edit `index.html`, line 140:

```javascript
// Change this:
const VALID_PASSWORD = 'aisu2026';

// To:
const VALID_PASSWORD = 'your-custom-password';
```

Then redeploy:
```bash
git add index.html
git commit -m "chore: update password"
git push
# Vercel auto-deploys on push
```

### Change URL Slug

**Vercel:**
- Project Settings → Domains → Add custom domain
- Or rename project for new vercel.app subdomain

**GitHub Pages:**
- Rename repo to change URL

---

## Troubleshooting

### "Password not working"
- Clear browser cache/sessionStorage
- Check password in `index.html` (case-sensitive)
- Try incognito window

### "Page not found"
- Check GitHub repo is public or you have access
- Verify deployment succeeded (Vercel/Netlify dashboard)
- Check URL is correct

### "Dark mode not working"
- Click "Toggle Dark Mode" button in header
- Refresh page if issues persist

---

## Next Steps After Partner Review

### If Approved:
1. Run `/design-implement` to build full system
2. Deploy to production AiSU site
3. Archive this preview

### If Changes Needed:
1. Note feedback
2. Re-run `/design-studio` with adjustments
3. Update preview
4. Reshare URL (same link, auto-updates)

---

## Cost Summary

| Option | Setup Time | Monthly Cost | Security | Best For |
|--------|------------|--------------|----------|----------|
| **Vercel Free** | 2 min | $0 | Client-side | ✅ Recommended |
| Vercel Pro | 2 min | $20 | Server-side | High security |
| GitHub Pages | 5 min | $0 | Client-side | Simple demos |
| Netlify Free | 3 min | $0 | Client-side | Alternative |
| Netlify Pro | 3 min | $19 | Server-side | Alternative |

---

## URLs After Deployment

After deployment, you'll have:

**Live Preview:**
- `https://[your-project].vercel.app` (or similar)
- Password: `aisu2026` (or custom)

**GitHub Repo:**
- `https://github.com/[your-username]/design-studio-poc`
- Private repo (only you can see)

**Local Preview:**
- `file:///Users/christopherekraus/.../design-preview.html`
- Always works offline

---

**Ready to deploy? Follow "Step-by-Step: Deploy to Vercel" above!**
