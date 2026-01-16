# Deploying BookShop to Vercel

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at https://vercel.com)
3. Your Google OAuth credentials (if using Google login)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

5. Add Environment Variables:
   - `NEXTAUTH_URL`: Your Vercel deployment URL (e.g., https://your-app.vercel.app)
   - `NEXTAUTH_SECRET`: Generate a secure random string (use: `openssl rand -base64 32`)
   - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret
   - `NEXT_PUBLIC_API_URL`: Your backend API URL (see Backend Deployment below)

6. Click "Deploy"

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and add environment variables when asked

## Step 3: Backend API Deployment

Your Express server (server/index.js) needs to be deployed separately. Options:

### Option 1: Deploy to Render.com (Recommended)

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: bookshop-api
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Port**: 5000

5. After deployment, copy the URL (e.g., https://bookshop-api.onrender.com)
6. Update your Vercel environment variable `NEXT_PUBLIC_API_URL` with this URL

### Option 2: Deploy to Railway.app

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect Node.js
5. Add start command: `node server/index.js`
6. Copy the deployment URL and update Vercel environment variables

### Option 3: Deploy to Heroku

1. Install Heroku CLI
2. Create a new Heroku app
3. Deploy your backend
4. Update Vercel environment variables with Heroku URL

## Step 4: Update Google OAuth Settings

1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Navigate to your OAuth credentials
3. Add your Vercel deployment URL to:
   - **Authorized JavaScript origins**: `https://your-app.vercel.app`
   - **Authorized redirect URIs**: `https://your-app.vercel.app/api/auth/callback/google`

## Step 5: Update API URLs in Code

If you deployed your backend, update the API calls in your code:

1. Create a `.env.production` file or use Vercel environment variables
2. Replace `http://localhost:5000` with your deployed API URL

## Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test login functionality
3. Test adding books
4. Test viewing book details
5. Test dark mode toggle

## Troubleshooting

### Issue: "Invalid callback URL"
- Make sure your `NEXTAUTH_URL` matches your Vercel deployment URL
- Check Google OAuth redirect URIs

### Issue: "Failed to fetch books"
- Verify your backend API is running
- Check `NEXT_PUBLIC_API_URL` environment variable
- Ensure CORS is enabled on your backend

### Issue: "Session not persisting"
- Generate a new `NEXTAUTH_SECRET` using: `openssl rand -base64 32`
- Make sure it's set in Vercel environment variables

## Environment Variables Summary

Required environment variables in Vercel:

```
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-generated-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
```

## Continuous Deployment

Once set up, every push to your main branch will automatically deploy to Vercel!

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXTAUTH_URL` and Google OAuth settings with your custom domain
