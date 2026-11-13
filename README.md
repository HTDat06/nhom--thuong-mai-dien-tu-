# Website Thương Mại Điện Tử Bán Linh Kiện Máy Tính

Dự án xây dựng hệ thống thương mại điện tử chuyên cung cấp các sản phẩm linh kiện máy tính (CPU, Mainboard, RAM, VGA, Ổ cứng...), hỗ trợ quản lý danh mục, sản phẩm, giỏ hàng, đặt hàng và phân quyền người dùng (Khách hàng / Quản trị viên).

## Công nghệ sử dụng

* **Frontend:** React, Vite, CSS
* **Backend:** Node.js, Express.js
* **Cơ sở dữ liệu & ORM:** Microsoft SQL Server, Prisma ORM
* **Xác thực & Bảo mật:** JWT, bcryptjs

## Cấu trúc thư mục

```text
nhom--thuong-mai-dien-tu-/
├── .github/            # Mẫu Pull Request (pull_request_template.md)
├── ai-logs/            # Nhật ký sử dụng AI của các thành viên
├── backend/            # Mã nguồn API Server, Prisma schema, Seed dữ liệu, Migrations
├── docs/               # Tài liệu thiết kế CSDL (ERD), quy tắc Git, cấu trúc thư mục, test cases
├── frontend/           # Mã nguồn giao diện người dùng (React + Vite)
├── .gitignore
└── README.md
```

## Yêu cầu môi trường

* **Node.js:** Phiên bản v18 trở lên (khuyên dùng v20 LTS hoặc v22 LTS).
* **SQL Server:** SQL Server 2019/2022 (hoặc SQL Server Express) kèm **SQL Server Management Studio (SSMS)**.
* **Git:** Đã cài đặt và cấu hình tài khoản GitHub.

---

## Hướng dẫn cài đặt và chạy dự án

### 1. Tải mã nguồn về máy

Mở Terminal (hoặc Git Bash) và chạy lệnh sau:

```bash
git clone https://github.com/HTDat06/nhom-5v3s-thuong-mai-dien-tu-.git
cd nhom-5v3s-thuong-mai-dien-tu-
git checkout develop
git pull origin develop
```

### 2. Tạo cơ sở dữ liệu trên SQL Server

1. Mở **SSMS**, đăng nhập vào SQL Server trên máy.
2. Bấm **New Query** và chạy câu lệnh sau để tạo database trống:
   ```sql
   CREATE DATABASE linh_kien_may_tinh;
   ```
3. *(Lưu ý kết nối)* Đảm bảo dịch vụ SQL Server đang chạy và đã bật **TCP/IP** trong **SQL Server Configuration Manager** $\rightarrow$ **SQL Server Network Configuration**.

### 3. Cài đặt và khởi chạy Backend

Mở Terminal tại thư mục gốc dự án và thực hiện lần lượt các bước sau:

```powershell
# Di chuyển vào thư mục backend
cd backend

# Tạo tệp cấu hình môi trường từ tệp mẫu
powershell: Copy-Item .env.example .env
cmd: copy .env.example .env
```

Mở tệp `backend/.env` và kiểm tra dòng `DATABASE_URL` cho khớp với cấu hình SQL Server trên máy bạn:
* **Nếu dùng SQL Server mặc định (`localhost` cổng `1433`, Windows Authentication):**
  ```env
  DATABASE_URL="sqlserver://localhost:1433;database=linh_kien_may_tinh;integratedSecurity=true;trustServerCertificate=true"
  ```
* **Nếu dùng SQL Server Express (`.\SQLEXPRESS`):**
  ```env
  DATABASE_URL="sqlserver://localhost\SQLEXPRESS;database=linh_kien_may_tinh;integratedSecurity=true;trustServerCertificate=true"
  ```

Tiếp tục chạy các lệnh sau trong thư mục `backend/` để cài thư viện, đồng bộ bảng và nạp dữ liệu mẫu:

```powershell
# Cài đặt thư viện (dùng --ignore-scripts để tránh lỗi biên dịch C++ của msnodesqlv8 trên Node mới)
npm install --ignore-scripts

# Đồng bộ cấu trúc 6 bảng vào SQL Server và khởi tạo Prisma Client
npx prisma db push
npx prisma generate

# Nạp dữ liệu mẫu (5 danh mục, 30 sản phẩm, 11 tài khoản, 10 đơn hàng)
node prisma/seed.js

# Khởi động Backend Server
npm run dev
```

### 4. Cài đặt và khởi chạy Frontend

Mở một cửa sổ **Terminal thứ hai** (giữ nguyên Terminal đang chạy Backend), thực hiện:

```powershell
cd frontend
npm install
npm run dev
```

Sau khi chạy thành công, mở trình duyệt và truy cập địa chỉ hiển thị trên Terminal (mặc định là **`http://localhost:5173`**).

---

## Tài khoản mẫu kiểm thử

Sau khi chạy lệnh `node prisma/seed.js`, hệ thống tự động tạo sẵn các tài khoản sau (mật khẩu chung là **`123456`**):

| Vai trò | Email | Mật khẩu |
| :--- | :--- | :--- |
| **Quản trị viên (Admin)** | `admin@gmail.com` | `123456` |
| **Khách hàng (Customer)** | `customer1@gmail.com` (đến `customer10@gmail.com`) | `123456` |

---

## Xử lý một số lỗi thường gặp trên Windows

* **Lỗi `npm.ps1 cannot be loaded because running scripts is disabled on this system`:**
  Chạy lệnh sau trong PowerShell để cấp quyền chạy script cho tài khoản hiện tại, sau đó chạy lại lệnh `npm`:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
  ```
* **Lỗi `node-gyp` / `msnodesqlv8` khi chạy `npm install`:**
  Luôn sử dụng cờ `npm install --ignore-scripts` ở thư mục `backend/` vì dự án truy vấn cơ sở dữ liệu thông qua **Prisma**.

---

## Quy trình đóng góp mã nguồn (Git Flow)

1. Luôn cập nhật nhánh `develop` mới nhất trước khi làm tính năng mới:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Tạo nhánh mới theo quy ước (`feature/<ma-task>-<ten-chuc-nang>`, `fix/...`, `docs/...`, `chore/...`):
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```
3. Commit và đẩy nhánh lên GitHub, sau đó tạo **Pull Request** gộp vào nhánh **`develop`** và nhờ thành viên khác trong nhóm review/approve trước khi merge.
