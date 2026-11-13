# Cấu Trúc Thư Mục Dự Án

Tài liệu mô tả tổ chức cây thư mục và vai trò của từng thành phần trong hệ thống **Website Thương Mại Điện Tử Bán Linh Kiện Máy Tính** (Nhóm 6), giúp các thành viên dễ dàng tra cứu, phát triển tính năng và kiểm thử đồng bộ.

---

## 1. Cấu trúc thư mục gốc (Root)

```text
nhom--thuong-mai-dien-tu-/
├── .github/                # Cấu hình GitHub và mẫu Pull Request
├── ai-logs/                # Nhật ký sử dụng công cụ AI của các thành viên
├── backend/                # Mã nguồn phía máy chủ (API Server, CSDL, Prisma)
├── docs/                   # Tài liệu phân tích, thiết kế, quy trình và kiểm thử
├── frontend/               # Mã nguồn giao diện người dùng (React + Vite)
├── .gitignore              # Danh sách tệp/thư mục loại trừ khỏi Git
└── README.md               # Tài liệu tổng quan và hướng dẫn cài đặt, chạy dự án
```

| Thư mục / Tệp | Vai trò chính |
| :--- | :--- |
| **`.github/`** | Chứa tệp mẫu `pull_request_template.md` chuẩn hóa nội dung mô tả và checklist khi tạo Pull Request vào `develop`. |
| **`ai-logs/`** | Lưu trữ nhật ký minh chứng việc ứng dụng AI hỗ trợ lập trình, viết tài liệu và kiểm thử của từng thành viên (`tv1` đến `tv5`). |
| **`backend/`** | Chứa toàn bộ mã nguồn Node.js/Express, cấu hình kết nối SQL Server, schema Prisma, migration và dữ liệu mẫu (`seed.js`). |
| **`docs/`** | Lưu trữ tài liệu kỹ thuật của dự án: mô tả Use Case, thiết kế CSDL (ERD), kịch bản kiểm thử (`test-cases.md`) và cấu trúc thư mục. |
| **`frontend/`** | Chứa mã nguồn giao diện web (React + Vite), bố cục trang (Layouts), các thành phần UI và kết nối gọi API từ Backend. |
| **`.gitignore`** | Ngăn chặn việc đẩy nhầm các tệp nhạy cảm hoặc tệp sinh tự động lên kho lưu trữ (như `.env`, `node_modules/`, tệp build). |
| **`README.md`** | Cung cấp thông tin giới thiệu đề tài, yêu cầu môi trường, hướng dẫn khởi chạy dự án, tài khoản demo và quy ước Git Flow. |

---

## 2. Chi tiết thư mục `backend/`

Thư mục `backend/` được tổ chức theo kiến trúc phân lớp (Layered Architecture) kết hợp với **Prisma ORM** để quản lý cơ sở dữ liệu **SQL Server** (`linh_kien_may_tinh`):

```text
backend/
├── config/                 # Cấu hình kết nối CSDL cho Sequelize
│   └── config.js
├── migrations/             # Các tệp định nghĩa cấu trúc bảng, khóa ngoại, ràng buộc CSDL
├── prisma/                 # Quản lý lược đồ dữ liệu và nạp dữ liệu mẫu bằng Prisma
│   ├── schema.prisma       # Khai báo 6 model ánh xạ với các bảng trong SQL Server
│   └── seed.js             # Kịch bản nạp dữ liệu mẫu (danh mục, sản phẩm, tài khoản, đơn hàng)
├── seeders/                # Các tệp dữ liệu mẫu gốc theo chuẩn Sequelize
├── src/                    # Mã nguồn xử lý nghiệp vụ chính của Backend
│   ├── config/             # Khởi tạo Prisma Client, biến môi trường và cấu hình hệ thống
│   ├── controllers/        # Tiếp nhận HTTP Request, gọi Service và trả về HTTP Response
│   ├── middlewares/        # Xác thực JWT, phân quyền (Admin/Customer), kiểm tra dữ liệu đầu vào
│   ├── repositories/       # Tầng truy vấn trực tiếp cơ sở dữ liệu thông qua Prisma
│   ├── routes/             # Định nghĩa các đường dẫn API (Endpoints) theo từng phân hệ
│   └── services/           # Xử lý logic nghiệp vụ (đăng ký, đăng nhập, giỏ hàng, đặt hàng...)
├── .env.example            # Tệp mẫu các biến môi trường cần thiết (DATABASE_URL, JWT_SECRET, PORT)
├── package.json            # Khai báo thư viện phụ thuộc và các lệnh chạy (scripts) của Backend
└── prisma.config.ts        # Tệp cấu hình đường dẫn schema và biến môi trường cho Prisma
```

---

## 3. Chi tiết thư mục `frontend/`

Thư mục `frontend/` được xây dựng bằng **React** và **Vite**, tách biệt phần bố cục dùng chung với các trang chức năng:

```text
frontend/
├── public/                 # Chứa các tệp tĩnh công khai (favicon, hình ảnh tĩnh...)
├── src/                    # Mã nguồn giao diện chính
│   ├── assets/             # Hình ảnh, biểu tượng (icons) và tài nguyên nội bộ
│   ├── components/         # Các thành phần giao diện tái sử dụng (Header, Footer, ProductCard...)
│   ├── Layouts/            # Khung bố cục chuẩn cho trang khách hàng và trang quản trị
│   ├── pages/              # Các trang chức năng chính (Trang chủ, Sản phẩm, Giỏ hàng, Đăng nhập...)
│   ├── services/           # Các hàm gọi API giao tiếp với Backend (Axios / Fetch)
│   ├── App.jsx             # Cấu hình định tuyến (Routing) tổng của ứng dụng
│   └── main.jsx            # Điểm khởi chạy (Entry point) gắn ứng dụng React vào DOM
├── index.html              # Tệp HTML gốc của ứng dụng
├── package.json            # Khai báo thư viện và lệnh khởi chạy Frontend
└── vite.config.js          # Cấu hình công cụ đóng gói Vite và cổng chạy local
```

---

## 4. Chi tiết thư mục `docs/` và `ai-logs/`

```text
docs/
├── cau-truc-thu-muc.md     # Tài liệu mô tả tổ chức thư mục dự án (tệp hiện tại)
├── test-cases.md           # Bộ kịch bản kiểm thử chức năng và kiểm thử bảo mật/API
└── ...                     # Các tài liệu đặc tả Use Case, ERD và quy tắc làm việc nhóm

ai-logs/
├── tv1_<ho-ten>.md         # Nhật ký sử dụng AI của Thành viên 1
├── tv2_Tran-Ngoc-Duy.md    # Nhật ký sử dụng AI của Thành viên 2
├── tv3_<ho-ten>.md         # Nhật ký sử dụng AI của Thành viên 3
├── tv4_<ho-ten>.md         # Nhật ký sử dụng AI của Thành viên 4
└── tv5_Hoang-Tien-Dat.md   # Nhật ký sử dụng AI của Thành viên 5
```

---

## 5. Quy ước đặt tên khi bổ sung tệp mới

* **Tên thư mục:** Dùng chữ thường, phân tách bằng dấu gạch ngang nếu nhiều từ (ví dụ: `ai-logs/`, `cart-items/`).
* **Tên tệp tài liệu (`.md`):** Dùng chữ thường không dấu, nối bằng dấu gạch ngang (ví dụ: `cau-truc-thu-muc.md`, `test-cases.md`).
* **Tên tệp mã nguồn Backend:** Đặt theo chức năng và hậu tố vai trò (`AuthController.js`, `AuthService.js`, `UserRepository.js`).
* **Tên tệp thành phần Frontend:** Đặt theo chuẩn PascalCase cho Component/Page (`HomePage.jsx`, `Navbar.jsx`).