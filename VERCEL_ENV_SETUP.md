# Vercel Environment Variables Setup Guide

## Quick Setup via Vercel Dashboard

1. **Go to your Vercel project:**
   - Visit https://vercel.com/dashboard
   - Click on your `tripPlanner` project

2. **Navigate to Settings:**
   - Click on **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add each variable:**
   Click **Add New** for each variable below:

### Required Variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `VITE_GOGGLE_GEMINI_AI_API_KEY` | `AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c` | Production, Preview, Development |
| `VITE_GOGGLE_AUTH_CLIENT_ID` | `54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com` | Production, Preview, Development |
| `VITE_GEOAPIFY_KEY` | `a0535cbe01b3422581657c2be71d42a0` | Production, Preview, Development |
| `VITE_PIXABAY_KEY` | `53229185-1706c9762f856c659db67b3b7` | Production, Preview, Development |
| `VITE_OPENWEATHER_KEY` | `9a1c2d108fbb5388039e24df27236a89` | Production, Preview, Development |

4. **After adding all variables:**
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on the latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger automatic redeployment

---

## Alternative: Using Vercel CLI

If you have Vercel CLI installed, you can run these commands:

```bash
vercel env add VITE_GOGGLE_GEMINI_AI_API_KEY production
# Paste: AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c

vercel env add VITE_GOGGLE_AUTH_CLIENT_ID production
# Paste: 54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com

vercel env add VITE_GEOAPIFY_KEY production
# Paste: a0535cbe01b3422581657c2be71d42a0

vercel env add VITE_PIXABAY_KEY production
# Paste: 53229185-1706c9762f856c659db67b3b7

vercel env add VITE_OPENWEATHER_KEY production
# Paste: 9a1c2d108fbb5388039e24df27236a89
```

Repeat for `preview` and `development` environments, or use `vercel env add` without specifying environment to add to all.

---

## Verify Setup

After adding variables and redeploying:
1. Check the deployment logs for any errors
2. Visit your deployed site
3. Open browser console (F12) - you should see "✅ App rendered successfully"
4. Try creating a trip to test the AI functionality

---

## Notes

- Environment variables starting with `VITE_` are exposed to the browser
- Never commit `.env.local` to git (it's already in .gitignore)
- These keys are for your project only - keep them secure



