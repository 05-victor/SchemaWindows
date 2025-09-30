# MyShop 2025 Roadmap - Vercel Deployment

## 📁 Project Structure

```
SchemaWindows/
├── client/              # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json
│   └── .env
└── server/              # Vercel serverless API
    ├── api/
    │   ├── progress.js  # Main API endpoint
    │   └── health.js    # Health check
    ├── package.json
    └── vercel.json
```

## 🚀 Deployment Instructions

### 1. Setup JSONBin.io Database (Free)

1. Go to [JSONBin.io](https://jsonbin.io)
2. Create a free account
3. Create a new bin with this initial data:

```json
{
  "completedTasks": {},
  "expandedPhases": {},
  "selectedView": "gantt",
  "lastUpdated": "2025-09-30T00:00:00.000Z",
  "updateCount": 0
}
```

4. Note down the Bin ID and your API Key

### 2. Deploy Server (API)

```bash
cd server
vercel

# Set environment variables in Vercel dashboard:
# JSONBIN_API_KEY=your_api_key
# JSONBIN_BIN_ID=your_bin_id
```

### 3. Deploy Client (Frontend)

```bash
cd client
vercel

# Set environment variable in Vercel dashboard:
# VITE_API_URL=https://your-server-domain.vercel.app/api
```

## 🔧 Local Development

### Server

```bash
cd server
npm install -g vercel
vercel dev
# Runs on http://localhost:3000
```

### Client

```bash
cd client
npm install
npm run dev
# Runs on http://localhost:5173
```

## 🌐 API Endpoints

- `GET /api/progress` - Get current progress
- `POST /api/progress` - Save progress
- `DELETE /api/progress` - Reset all progress
- `GET /api/health` - Health check

## 🔒 Environment Variables

### Server (.env)

```
JSONBIN_API_KEY=your_jsonbin_api_key
JSONBIN_BIN_ID=your_jsonbin_bin_id
```

### Client (.env)

```
VITE_API_URL=https://your-server-domain.vercel.app/api
```

## ✅ Features

- ✅ **Shared Progress**: Real-time sync giữa tất cả users
- ✅ **Persistent Storage**: Dữ liệu lưu trên JSONBin.io (miễn phí)
- ✅ **Serverless**: Không cần maintain server
- ✅ **Auto-deploy**: Push code = auto deploy
- ✅ **Fallback**: LocalStorage nếu API down
- ✅ **CORS Ready**: Hoạt động cross-domain

## 🔄 How to Update

1. **Update task data**: Modify JSONBin directly or use API
2. **Update code**: Push to Git = auto deploy
3. **Update config**: Change env vars in Vercel dashboard

## 💡 Tips

- JSONBin free tier: 100K requests/month (đủ cho team nhỏ)
- Vercel free tier: 100GB bandwidth (đủ cho team nhỏ)
- Backup data: Export progress regularly
- Multiple environments: Tạo separate bins cho dev/prod
