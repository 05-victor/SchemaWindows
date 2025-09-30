@echo off
echo ===========================================
echo MyShop Roadmap - Vercel Deployment Script
echo ===========================================
echo.

echo 1. Deploying SERVER (API)...
cd server
call vercel --prod
echo.

echo 2. Deploying CLIENT (Frontend)...
cd ..\client
call vercel --prod
echo.

echo ==========================================
echo Deployment Complete!
echo ==========================================
echo.
echo Server deployed to: https://[your-server].vercel.app
echo Client deployed to: https://[your-client].vercel.app
echo.
echo Don't forget to:
echo 1. Set JSONBIN_API_KEY and JSONBIN_BIN_ID in server env vars
echo 2. Set VITE_API_URL in client env vars
echo 3. Update .env files with correct URLs
echo.
pause