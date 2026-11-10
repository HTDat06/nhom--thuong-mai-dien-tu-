# Dự Án Website Thương Mại Điện Tử

Hệ thống website thương mại điện tử hỗ trợ mua sắm trực tuyến, quản lý sản phẩm và đơn hàng.

---

## 🛠 1. Yêu cầu hệ thống & Công cụ
Trước khi bắt đầu, đảm bảo máy tính của bạn đã cài đặt:
- [Node.js](https://nodejs.org/) (Phiên bản 18.x trở lên)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

---

## 🚀 2. Hướng dẫn cài đặt & Chạy dự án dưới máy Local

### Bước 1: Clone dự án về máy
```bash
git clone [https://github.com/HTDat06/nhom--thuong-mai-dien-tu-.git](https://github.com/HTDat06/nhom--thuong-mai-dien-tu-.git)
cd nhom--thuong-mai-dien-tu-
Bước 2: Chuyển sang nhánh develop
git checkout develop
git pull origin develop
Bước 3: Cài đặt các thư viện phụ thuộc (Dependencies)(ở frontend và backend)
npm install
Bước 4: Cấu hình biến môi trường
Tạo tệp .env tại thư mục gốc dựa theo mẫu .env.example.
Điền các thông tin kết nối Cơ sở dữ liệu và Cổng (PORT).
Bước 5: Chạy dự án ở chế độ Development
npm run dev
