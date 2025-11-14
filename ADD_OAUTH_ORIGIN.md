# Fix: Add JavaScript Origin to Google Cloud Console

## Your App URL
**Origin:** `https://trip-planner-nu-wine.vercel.app`

## Quick Fix Steps

### 1. Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/apis/credentials
2. Find your OAuth 2.0 Client ID: `54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com`
3. Click on it to **Edit**

### 2. Add to Authorized JavaScript Origins
In the **Authorized JavaScript origins** section, click **+ ADD URI** and add:
```
https://trip-planner-nu-wine.vercel.app
```

### 3. Add to Authorized Redirect URIs
In the **Authorized redirect URIs** section, click **+ ADD URI** and add:
```
https://trip-planner-nu-wine.vercel.app
```

### 4. Also Add These (for all environments)
Add all of these URLs to both sections:

**Authorized JavaScript origins:**
```
https://trip-planner-nu-wine.vercel.app
https://trip-planner-b9d7ahg5p-mrbuddhus-projects.vercel.app
https://trip-planner-mgvi66kr9-mrbuddhus-projects.vercel.app
https://trip-planner-cer8tvmhg-mrbuddhus-projects.vercel.app
http://localhost:5173
```

**Authorized redirect URIs:**
```
https://trip-planner-nu-wine.vercel.app
https://trip-planner-b9d7ahg5p-mrbuddhus-projects.vercel.app
https://trip-planner-mgvi66kr9-mrbuddhus-projects.vercel.app
https://trip-planner-cer8tvmhg-mrbuddhus-projects.vercel.app
http://localhost:5173
http://localhost:3000
```

### 5. Save
- Click **SAVE** at the bottom
- Wait 2-5 minutes for changes to propagate
- Try signing in again

---

## Important Notes

✅ **DO:**
- Add the exact URL (no trailing slash)
- Include `http://` or `https://` protocol
- Add both JavaScript origins AND redirect URIs

❌ **DON'T:**
- Don't add trailing slashes (`/`)
- Don't add paths (just the domain)
- Don't forget to click Save

---

## Verify It's Working

After adding and saving:
1. Wait 2-5 minutes
2. Clear your browser cache (or use incognito mode)
3. Try signing in again
4. Check browser console (F12) for any errors



