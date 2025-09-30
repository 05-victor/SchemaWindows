@echo off
echo Starting MyShop Progress Server...
echo.

REM Install dependencies if needed
if not exist node_modules (
    echo Installing dependencies...
    npm install
)

echo.
echo Starting both server and client...
echo Server will run on http://localhost:3001
echo Client will run on http://localhost:5173
echo.

npm run start:all