# Fix Google OAuth Redirect URI Error

## The Problem
Error 400: `redirect_uri_mismatch` means your Vercel domain isn't authorized in Google Cloud Console.

## Quick Fix Steps

### 1. Find Your Vercel Domain
Your app is deployed at: `https://trip-planner-[hash].vercel.app` or your custom domain.

Check your Vercel dashboard to get the exact URL.

### 2. Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/
2. Select your project (or create one if needed)
3. Go to **APIs & Services** → **Credentials**
4. Find your OAuth 2.0 Client ID: `54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com`
5. Click on it to edit

### 3. Add Authorized JavaScript Origins
In the **Authorized JavaScript origins** section, add these URLs (one per line):
```
https://trip-planner-b9d7ahg5p-mrbuddhus-projects.vercel.app
https://trip-planner-mgvi66kr9-mrbuddhus-projects.vercel.app
https://trip-planner-cer8tvmhg-mrbuddhus-projects.vercel.app
http://localhost:5173
```

### 4. Add Authorized Redirect URIs
In the **Authorized redirect URIs** section, add these URLs (one per line):
```
https://trip-planner-b9d7ahg5p-mrbuddhus-projects.vercel.app
https://trip-planner-mgvi66kr9-mrbuddhus-projects.vercel.app
https://trip-planner-cer8tvmhg-mrbuddhus-projects.vercel.app
http://localhost:5173
http://localhost:3000
```

**Note:** The `@react-oauth/google` library uses the origin (domain) as the redirect URI, not a specific path.

**Important:** 
- Add your **exact Vercel deployment URL** (check your Vercel dashboard)
- Include `http://localhost:5173` for local development
- Don't add trailing slashes

### 5. Save and Wait
- Click **Save**
- Wait 1-2 minutes for changes to propagate
- Try logging in again

---

## Quick Reference

**OAuth Client ID:** `54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com`

**Common Redirect URIs to add:**
- `https://[your-vercel-url].vercel.app`
- `http://localhost:5173` (for local dev)
- `http://localhost:3000` (alternative local dev)

---

## Still Not Working?

1. **Clear browser cache** and try again
2. **Check the exact error** in browser console (F12)
3. **Verify the domain** matches exactly (no trailing slash, correct protocol)
4. **Wait a few minutes** - Google changes can take time to propagate

