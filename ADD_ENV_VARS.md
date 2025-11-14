# Quick Guide: Add Environment Variables to Vercel

## Method 1: Vercel Dashboard (Easiest)

1. **Go to:** https://vercel.com/dashboard
2. **Click** on your `tripPlanner` project
3. **Click** "Settings" tab
4. **Click** "Environment Variables" in the left menu
5. **Click** "Add New" button

### Add these 5 variables (one at a time):

**1. Google Gemini AI Key:**
- Name: `VITE_GOGGLE_GEMINI_AI_API_KEY`
- Value: `AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c`
- Environments: ✅ Production ✅ Preview ✅ Development

**2. Google OAuth Client ID:**
- Name: `VITE_GOGGLE_AUTH_CLIENT_ID`
- Value: `54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com`
- Environments: ✅ Production ✅ Preview ✅ Development

**3. Geoapify Key:**
- Name: `VITE_GEOAPIFY_KEY`
- Value: `a0535cbe01b3422581657c2be71d42a0`
- Environments: ✅ Production ✅ Preview ✅ Development

**4. Pixabay Key:**
- Name: `VITE_PIXABAY_KEY`
- Value: `53229185-1706c9762f856c659db67b3b7`
- Environments: ✅ Production ✅ Preview ✅ Development

**5. OpenWeather Key:**
- Name: `VITE_OPENWEATHER_KEY`
- Value: `9a1c2d108fbb5388039e24df27236a89`
- Environments: ✅ Production ✅ Preview ✅ Development

6. **After adding all 5 variables:**
   - Go to "Deployments" tab
   - Click "⋯" (three dots) on latest deployment
   - Click "Redeploy"

---

## Method 2: Vercel CLI (If you prefer terminal)

First, link your project:
```bash
vercel link --yes
```

Then add each variable (it will prompt you to paste the value):
```bash
vercel env add VITE_GOGGLE_GEMINI_AI_API_KEY production
# When prompted, paste: AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c
# Repeat for preview and development

vercel env add VITE_GOGGLE_AUTH_CLIENT_ID production
# Paste: 54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com

vercel env add VITE_GEOAPIFY_KEY production
# Paste: a0535cbe01b3422581657c2be71d42a0

vercel env add VITE_PIXABAY_KEY production
# Paste: 53229185-1706c9762f856c659db67b3b7

vercel env add VITE_OPENWEATHER_KEY production
# Paste: 9a1c2d108fbb5388039e24df27236a89
```

---

## ✅ After Adding Variables

1. **Redeploy** your project (either via dashboard or push a new commit)
2. **Wait** for deployment to complete
3. **Visit** your site - it should work now! 🎉



