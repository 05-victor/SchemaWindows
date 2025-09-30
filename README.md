# 🚀 MyShop 2025 Roadmap - Vercel Ready

Ứng dụng quản lý roadmap cho dự án MyShop 2025 với khả năng đồng bộ real-time giữa nhiều người dùng.

## 📁 Project Structure

```
SchemaWindows/
├── 📱 client/              # React Frontend (Vercel)
│   ├── src/                # React components
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # App entry point
│   │   └── assets/        # Static assets
│   ├── public/            # Public files
│   ├── package.json       # Client dependencies
│   ├── vercel.json        # Vercel client config
│   ├── vite.config.js     # Vite config
│   └── .env               # Environment variables
│
├── 🔧 server/             # Serverless API (Vercel)
│   ├── api/               # Vercel serverless functions
│   │   ├── progress.js    # Main progress API
│   │   └── health.js      # Health check endpoint
│   ├── package.json       # Server dependencies
│   ├── vercel.json        # Vercel server config
│   └── .env.example       # Environment template
│
├── 📖 README-DEPLOYMENT.md # Deployment guide
├── 🚀 deploy.bat          # Deployment script
└── 📋 README.md           # This file
```

## ✨ Features

### 🎯 **Core Features**

- ✅ **Interactive Roadmap**: 14-week detailed timeline
- ✅ **Task Management**: Click to mark tasks as completed
- ✅ **Progress Tracking**: Real-time progress statistics
- ✅ **Phase Management**: Expandable phase details
- ✅ **Gantt Timeline**: Visual project timeline

### 🌐 **Shared Features**

- ✅ **Real-time Sync**: Changes sync across all users instantly
- ✅ **Persistent Storage**: Data stored on JSONBin.io (free)
- ✅ **Offline Fallback**: LocalStorage backup when server unavailable
- ✅ **Export/Import**: Backup and restore progress data

### 🚀 **Deployment Ready**

- ✅ **Vercel Optimized**: Separate client/server for easy deployment
- ✅ **Serverless Architecture**: No server maintenance required
- ✅ **Environment Config**: Easy configuration via env variables
- ✅ **CORS Ready**: Cross-domain API access

## 🔧 Quick Start

### Local Development

```bash
# 1. Setup Client
cd client
npm install
npm run dev        # http://localhost:5173

# 2. Setup Server (optional for local testing)
cd ../server
npm install -g vercel
vercel dev         # http://localhost:3000
```

### Production Deployment

```bash
# Quick deploy both client and server
deploy.bat

# Or deploy manually:
cd server && vercel --prod
cd ../client && vercel --prod
```

## 🔗 Live Demo

- **Frontend**: https://your-client.vercel.app
- **API**: https://your-server.vercel.app/api
- **Health Check**: https://your-server.vercel.app/api/health

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons

### Backend

- **Vercel Serverless** - API hosting
- **JSONBin.io** - Database (free tier)
- **Node.js** - Runtime

### Deployment

- **Vercel** - Hosting platform
- **GitHub** - Source control

## 📊 Data Structure

### Task Progress Data

```json
{
  "completedTasks": {
    "p1w1t1": true,
    "p1w1t2": false
    // ... more tasks
  },
  "expandedPhases": {
    "phase1": true,
    "phase2": false
  },
  "selectedView": "gantt",
  "lastUpdated": "2025-09-30T14:30:00.000Z",
  "updateCount": 42
}
```

## 🔒 Environment Variables

### Client (.env)

```env
VITE_API_URL=https://your-server.vercel.app/api
```

### Server (.env)

```env
JSONBIN_API_KEY=your_jsonbin_api_key
JSONBIN_BIN_ID=your_jsonbin_bin_id
```

## 📖 Documentation

- [📋 Deployment Guide](README-DEPLOYMENT.md) - Detailed deployment instructions
- [🔧 API Documentation](server/api/) - API endpoint details
- [⚙️ Configuration](client/.env.example) - Environment setup

## 🎯 Usage Scenarios

### 👥 **Team Collaboration**

1. Deploy to Vercel (one time setup)
2. Share the deployed URL with team
3. Everyone can track and update progress real-time
4. Perfect for project management and sprint tracking

### 📈 **Project Management**

1. Track 14-week MyShop development timeline
2. Mark completed tasks and see progress
3. Export progress reports
4. Visual timeline for stakeholder updates

### 🎓 **Educational Use**

1. Learn project planning and tracking
2. Understand software development phases
3. Practice with real-world project structure

## 🔄 Workflow

1. **Access App** → Open deployed URL
2. **Select View** → Choose Gantt or Detailed view
3. **Track Progress** → Click tasks to mark as completed
4. **View Stats** → See real-time progress statistics
5. **Export Data** → Backup progress anytime
6. **Reset** → Start fresh when needed

## 🆘 Support

- **Issues**: GitHub Issues
- **Documentation**: README files
- **Examples**: .env.example files

## 📝 License

MIT License - Free to use and modify

---

**Made with ❤️ for MyShop 2025 Project**

> 🎯 Goal: 10/10 điểm | 📅 Timeline: 14 weeks | 💻 Tech: C# WPF + PostgreSQL + EF Core
