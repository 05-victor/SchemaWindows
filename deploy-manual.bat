@echo off
echo ================================================
echo    MyShop Roadmap - Vercel Deployment Script
echo ================================================
echo.

echo BƯỚC 1: Setup JSONBin.io Database
echo --------------------------------
echo 1. Truy cập: https://jsonbin.io
echo 2. Tạo tài khoản miễn phí
echo 3. Tạo Bin mới với nội dung file: jsonbin-initial-data.json
echo 4. Lưu lại Bin ID và Master Key
echo.
pause

echo BƯỚC 2: Deploy Server (API)
echo ----------------------------
cd server
echo Deploying server...
call vercel --prod
echo.
echo Sau khi deploy thành công:
echo 1. Vào Vercel Dashboard
echo 2. Chọn project server
echo 3. Settings → Environment Variables
echo 4. Thêm: JSONBIN_API_KEY và JSONBIN_BIN_ID
echo 5. Redeploy: vercel --prod
echo.
pause

echo BƯỚC 3: Deploy Client (Frontend)
echo ---------------------------------
cd ..\client
echo Cập nhật VITE_API_URL trong .env...
echo Deploying client...
call vercel --prod
echo.
echo Sau khi deploy thành công:
echo 1. Vào Vercel Dashboard
echo 2. Chọn project client
echo 3. Settings → Environment Variables
echo 4. Thêm: VITE_API_URL=https://your-server.vercel.app/api
echo 5. Redeploy: vercel --prod
echo.

echo ================================================
echo               DEPLOYMENT COMPLETE!
echo ================================================
echo.
echo URLs:
echo - Client: https://your-client.vercel.app
echo - Server: https://your-server.vercel.app/api
echo - Health: https://your-server.vercel.app/api/health
echo.
echo Nhớ cấu hình Environment Variables!
pause