# Vercel Environment Variables Setup

Go to your Vercel dashboard and add these environment variables:

1. Go to: https://vercel.com/dashboard
2. Select your project: `mybookapp`
3. Go to: Settings → Environment Variables
4. Add the following variables for **Production, Preview, and Development**:

```
NEXTAUTH_URL=https://mybookapp-woad.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret_here
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

**Use the same values from your `.env.local` file**

5. After adding, go to Deployments tab
6. Click the three dots on your latest deployment
7. Click "Redeploy"

## What Changed?

✅ Converted Express backend to Next.js API routes
✅ All API endpoints now at `/api/books` (same domain)
✅ No CORS issues - everything runs on Vercel
✅ No separate backend deployment needed

## API Endpoints

- `GET /api/books` - Get all books
- `POST /api/books` - Add new book
- `GET /api/books/[id]` - Get single book
- `DELETE /api/books/[id]` - Delete book

Your app will work perfectly after redeployment!
