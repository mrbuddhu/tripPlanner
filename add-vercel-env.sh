#!/bin/bash

# Script to add environment variables to Vercel
# Run this script to add all required environment variables

echo "🚀 Adding environment variables to Vercel..."
echo ""

# Add to all environments (production, preview, development)
ENV_TYPES="production preview development"

# Google Gemini AI API Key
echo "Adding VITE_GOGGLE_GEMINI_AI_API_KEY..."
echo "AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c" | vercel env add VITE_GOGGLE_GEMINI_AI_API_KEY production
echo "AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c" | vercel env add VITE_GOGGLE_GEMINI_AI_API_KEY preview
echo "AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c" | vercel env add VITE_GOGGLE_GEMINI_AI_API_KEY development

# Google OAuth Client ID
echo "Adding VITE_GOGGLE_AUTH_CLIENT_ID..."
echo "54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com" | vercel env add VITE_GOGGLE_AUTH_CLIENT_ID production
echo "54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com" | vercel env add VITE_GOGGLE_AUTH_CLIENT_ID preview
echo "54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com" | vercel env add VITE_GOGGLE_AUTH_CLIENT_ID development

# Geoapify Key
echo "Adding VITE_GEOAPIFY_KEY..."
echo "a0535cbe01b3422581657c2be71d42a0" | vercel env add VITE_GEOAPIFY_KEY production
echo "a0535cbe01b3422581657c2be71d42a0" | vercel env add VITE_GEOAPIFY_KEY preview
echo "a0535cbe01b3422581657c2be71d42a0" | vercel env add VITE_GEOAPIFY_KEY development

# Pixabay Key
echo "Adding VITE_PIXABAY_KEY..."
echo "53229185-1706c9762f856c659db67b3b7" | vercel env add VITE_PIXABAY_KEY production
echo "53229185-1706c9762f856c659db67b3b7" | vercel env add VITE_PIXABAY_KEY preview
echo "53229185-1706c9762f856c659db67b3b7" | vercel env add VITE_PIXABAY_KEY development

# OpenWeather Key
echo "Adding VITE_OPENWEATHER_KEY..."
echo "9a1c2d108fbb5388039e24df27236a89" | vercel env add VITE_OPENWEATHER_KEY production
echo "9a1c2d108fbb5388039e24df27236a89" | vercel env add VITE_OPENWEATHER_KEY preview
echo "9a1c2d108fbb5388039e24df27236a89" | vercel env add VITE_OPENWEATHER_KEY development

echo ""
echo "✅ All environment variables added!"
echo "📝 Note: You may need to redeploy for changes to take effect."



