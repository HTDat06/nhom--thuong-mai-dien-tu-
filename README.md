# Dự Án Website Thương Mại Điện Tử

## 1. Yêu cầu hệ thống
- **Node.js**: v18.x trở lên
- **Git**: Phiên bản mới nhất
- **Database**: PostgreSQL / MySQL (tùy theo dự án)

---

## 2. Hướng dẫn cài đặt & Chạy dự án (Local)

### Bước 1: Clone dự án và chuyên sang nhánh develop
```bash
git clone [https://github.com/HTDat06/nhom--thuong-mai-dien-tu-.git](https://github.com/HTDat06/nhom--thuong-mai-dien-tu-.git)
cd nhom--thuong-mai-dien-tu-
git checkout develop
git pull origin develop
### Bước 2: Cài đặt các thư viện phụ thuộc(di chuyển vào frontend và backend để tải)
npm install
### Bước 3: Cấu hình biến môi trường
Tạo file .env tại thư mục gốc của dự án.
Sao chép nội dung từ file .env.example sang .env và cập nhật thông số kết nối
### Bước 4: Chạy ứng dụng
npm run dev
