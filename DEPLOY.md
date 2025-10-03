# SkillMark - Vercel Deployment Guide

## Prerequisites
- Git installed on your computer
- GitHub account (free)
- Vercel account (free) - Sign up at https://vercel.com

## Step 1: Push to GitHub

### Option A: Using Git Command Line

1. **Initialize Git** (if not already done):
```bash
git init
```

2. **Add all files**:
```bash
git add .
```

3. **Commit your changes**:
```bash
git commit -m "Initial commit - SkillMark website"
```

4. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it "skillmark"
   - Don't initialize with README
   - Click "Create repository"

5. **Link and push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/skillmark.git
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Download GitHub Desktop from https://desktop.github.com
2. Open GitHub Desktop and sign in
3. Click "Add" → "Add Existing Repository"
4. Select your project folder
5. Click "Publish repository"
6. Name it "skillmark" and click "Publish Repository"

## Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Click "Import" next to your "skillmark" repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Project** (usually auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://skillmark-xxxxx.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow prompts**:
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No
   - Project name? skillmark
   - Directory? ./
   - Override settings? No

5. **Deploy to production**:
```bash
vercel --prod
```

## Step 3: Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Features Included

✅ Particle.js animated background with colorful particles
✅ Fully responsive design (mobile, tablet, desktop)
✅ Three certificate cards with unique gradients
✅ Interactive hover effects and animations
✅ Google Form integration for purchases
✅ Copyright footer with SN SECURITY branding
✅ Production-ready build optimization
✅ SEO-friendly configuration

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically redeploy your site!

## Support

For issues or questions:
- Vercel Docs: https://vercel.com/docs
- GitHub Help: https://docs.github.com

---

**© 2025 All Rights Reserved by SN SECURITY**
