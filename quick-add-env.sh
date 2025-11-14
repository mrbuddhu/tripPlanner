#!/bin/bash

# Quick script to add all environment variables to Vercel
# This uses printf to pipe values directly

echo "🚀 Adding all environment variables to Vercel..."
echo ""

# Function to add env var to all environments
add_env() {
    local name=$1
    local value=$2
    
    echo "Adding $name..."
    printf "%s\n" "$value" | vercel env add "$name" production > /dev/null 2>&1
    printf "%s\n" "$value" | vercel env add "$name" preview > /dev/null 2>&1
    printf "%s\n" "$value" | vercel env add "$name" development > /dev/null 2>&1
    echo "✅ $name added"
}

# Add all variables
add_env "VITE_GOGGLE_GEMINI_AI_API_KEY" "AIzaSyAX06dmZlRdpDOaMA-5MgE7Ji0EI0y3a1c"
add_env "VITE_GOGGLE_AUTH_CLIENT_ID" "54555741847-kf467up0d84qo0pfv3so3rddhoai95ii.apps.googleusercontent.com"
add_env "VITE_GEOAPIFY_KEY" "a0535cbe01b3422581657c2be71d42a0"
add_env "VITE_PIXABAY_KEY" "53229185-1706c9762f856c659db67b3b7"
add_env "VITE_OPENWEATHER_KEY" "9a1c2d108fbb5388039e24df27236a89"

echo ""
echo "✅ All done! Redeploy your project now."



