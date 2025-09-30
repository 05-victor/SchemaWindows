# MyShop Roadmap - Vercel Deployment Guide

## 📊 Bước 1: Setup JSONBin.io Database

### 1.1 Tạo tài khoản JSONBin.io

1. Truy cập: https://jsonbin.io
2. Đăng ký tài khoản miễn phí
3. Xác nhận email

### 1.2 Tạo Bin mới

1. Đăng nhập JSONBin.io
2. Click "Create Bin"
3. Copy nội dung file `jsonbin-initial-data.json` vào:

```json
{
  "completedTasks": {},
  "expandedPhases": {},
  "selectedView": "gantt",
  "lastUpdated": "2025-09-30T14:30:00.000Z",
  "updateCount": 0,
  "metadata": {
    "projectName": "MyShop 2025 Roadmap",
    "totalPhases": 4,
    "totalWeeks": 14,
    "createdAt": "2025-09-30T14:30:00.000Z",
    "version": "1.0.0"
  },
  "statistics": {
    "totalTasks": 0,
    "completedTasks": 0,
    "completionPercentage": 0,
    "totalHours": 550,
    "completedHours": 0
  }
}
```

4. Click "Create"
5. Lưu lại **Bin ID** (ví dụ: `6123456789abcdef12345678`)

### 1.3 Lấy API Key

1. Vào Dashboard → API Keys
2. Copy **Master Key**
3. Lưu lại để dùng sau

---

## 🔧 Bước 2: Deploy Server (API) lên Vercel

### 2.1 Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### 2.2 Deploy Server

```bash
# Di chuyển vào thư mục server
cd server

# Deploy lên Vercel
vercel

# Làm theo hướng dẫn:
# - Set up and deploy? [Y/n] Y
# - Which scope? (chọn account của bạn)
# - Link to existing project? [y/N] N
# - What's your project's name? myshop-roadmap-server
# - In which directory is your code located? ./
# - Auto-detected project settings... Override? [y/N] N

# Deploy production
vercel --prod
```

### 2.3 Cấu hình Environment Variables cho Server

1. Sau khi deploy, vào Vercel Dashboard
2. Chọn project `myshop-roadmap-server`
3. Vào Settings → Environment Variables
4. Thêm 2 biến:

| Name              | Value                          | Environment |
| ----------------- | ------------------------------ | ----------- |
| `JSONBIN_API_KEY` | `your_master_key_from_jsonbin` | Production  |
| `JSONBIN_BIN_ID`  | `your_bin_id_from_jsonbin`     | Production  |

5. Redeploy để áp dụng env vars:

```bash
vercel --prod
```

### 2.4 Test Server API

Sau khi deploy, test các endpoint:

- Health check: `https://your-server.vercel.app/api/health`
- Get progress: `https://your-server.vercel.app/api/progress`

---

## 📱 Bước 3: Deploy Client (Frontend) lên Vercel

### 3.1 Cập nhật API URL trong Client

```bash
cd ../client
```

Chỉnh sửa file `.env`:

```env
VITE_API_URL=https://your-server-domain.vercel.app/api
```

### 3.2 Deploy Client

```bash
# Deploy client
vercel

# Cấu hình:
# - Set up and deploy? [Y/n] Y
# - Which scope? (chọn account của bạn)
# - Link to existing project? [y/N] N
# - What's your project's name? myshop-roadmap-client
# - In which directory is your code located? ./
# - Want to override settings? [y/N] N

# Deploy production
vercel --prod
```

### 3.3 Cấu hình Environment Variables cho Client

1. Vào Vercel Dashboard
2. Chọn project `myshop-roadmap-client`
3. Settings → Environment Variables
4. Thêm:

| Name           | Value                                       | Environment |
| -------------- | ------------------------------------------- | ----------- |
| `VITE_API_URL` | `https://your-server-domain.vercel.app/api` | Production  |

5. Redeploy:

```bash
vercel --prod
```

---

## 🎯 Bước 4: Test toàn bộ hệ thống

### 4.1 Kiểm tra URLs

- **Client**: `https://your-client.vercel.app`
- **Server API**: `https://your-server.vercel.app/api`
- **Health Check**: `https://your-server.vercel.app/api/health`

### 4.2 Test chức năng

1. Mở client URL
2. Tick vài tasks
3. Mở tab mới → check tasks vẫn được lưu
4. Export/Import progress
5. Reset và test lại

---

## 🔧 Bước 5: Maintenance

### 5.1 Update code

```bash
# Update server
cd server
git add . && git commit -m "Update server"
vercel --prod

# Update client
cd ../client
git add . && git commit -m "Update client"
vercel --prod
```

### 5.2 Monitor

- Vercel Dashboard: theo dõi traffic, errors
- JSONBin Dashboard: theo dõi API usage

### 5.3 Backup data

- Định kỳ export progress từ app
- Backup JSONBin data

---

## 📋 Checklist Deployment

### JSONBin.io Setup

- [ ] Tạo tài khoản JSONBin.io
- [ ] Tạo bin với data structure
- [ ] Lưu Bin ID và Master Key

### Server Deployment

- [ ] Cài đặt Vercel CLI
- [ ] Deploy server với `vercel --prod`
- [ ] Cấu hình env vars (JSONBIN_API_KEY, JSONBIN_BIN_ID)
- [ ] Test API endpoints

### Client Deployment

- [ ] Cập nhật VITE_API_URL trong .env
- [ ] Deploy client với `vercel --prod`
- [ ] Cấu hình env vars
- [ ] Test frontend

### Final Testing

- [ ] Test real-time sync
- [ ] Test export/import
- [ ] Test reset functionality
- [ ] Test offline fallback

---

## 🆘 Troubleshooting

### Server Issues

- **503 Error**: Check env vars trong Vercel
- **CORS Error**: Đảm bảo headers được set đúng
- **JSONBin Error**: Check API key và Bin ID

### Client Issues

- **API Error**: Check VITE_API_URL
- **Build Error**: Check dependencies trong package.json
- **Routing Error**: Check vercel.json

### Database Issues

- **Data not saving**: Check JSONBin credentials
- **Quota exceeded**: Upgrade JSONBin plan hoặc create new bin

---

**🎉 Sau khi hoàn thành, bạn sẽ có:**

- Client URL để share với team
- API working với persistent storage
- Real-time collaboration cho tất cả team members!
