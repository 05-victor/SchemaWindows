# MyShop 2025 Roadmap - Shared Progress Tracker

## 🚀 Tính năng chính

- **Đồng bộ real-time**: Tiến độ được lưu trữ trên server, tất cả người dùng thấy cùng một trạng thái
- **Auto-save**: Tự động lưu khi tick/untick tasks
- **Fallback localStorage**: Nếu server không khả dụng, sẽ dùng localStorage tạm thời
- **Export/Import**: Backup và khôi phục tiến độ
- **Loading states**: Hiển thị trạng thái loading và saving

## 🛠️ Cài đặt và chạy

### Cách 1: Sử dụng script tự động (Windows)

```bash
# Chạy file batch
start.bat
```

### Cách 2: Chạy thủ công

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy cả server và client
npm run start:all

# Hoặc chạy riêng lẻ:
# Terminal 1: Server (API)
npm run server

# Terminal 2: Client (React)
npm run dev
```

## 🌐 URLs

- **Client (React App)**: http://localhost:5173
- **Server (API)**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/health

## 📡 API Endpoints

- `GET /api/progress` - Lấy tiến độ hiện tại
- `POST /api/progress` - Lưu tiến độ mới
- `PATCH /api/progress/task/:id` - Toggle specific task
- `DELETE /api/progress` - Reset tất cả tiến độ

## 💾 Dữ liệu

- File dữ liệu: `progress-data.json` (tự động tạo)
- Backup: localStorage (fallback)
- Export format: JSON file

## 🔧 Troubleshooting

### Lỗi "Server không kết nối được"

1. Kiểm tra server có chạy trên port 3001
2. Kiểm tra firewall/antivirus
3. App sẽ tự động fallback về localStorage

### Reset dữ liệu

1. Dùng nút "Reset" trong app
2. Hoặc xóa file `progress-data.json`

### Backup/Restore

1. Export để tạo backup
2. Import để khôi phục từ backup

## 🎯 Sử dụng trong team

1. **Setup server**: Một người chạy server
2. **Share IP**: Thay `localhost` bằng IP của máy chạy server
3. **Access**: Tất cả truy cập cùng một URL
4. **Real-time sync**: Mọi người thấy tiến độ real-time

## 📝 Notes

- Server data lưu trong file JSON đơn giản
- Không cần database phức tạp
- Phù hợp cho team nhỏ (5-10 người)
- Production: nên dùng database thật (MongoDB, PostgreSQL, etc.)
