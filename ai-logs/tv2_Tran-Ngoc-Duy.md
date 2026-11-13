# AI log – TV2 – Trần Ngọc Duy

| Mục | Thông tin |
| --- | --- |
| Họ tên, MSSV | Trần Ngọc Duy – 0306241268 |
| Nhóm, đề tài | Nhóm 8 – Thương mại điện tử |
| Vai trò | TV2 – BE (Lead) |
| Công cụ AI dùng | ChatGPT |

## Bảng tổng hợp

| Mã | Ngày | Giai đoạn | Nội dung | Commit / PR |
| --- | --- | --- | --- | --- |
| AI-01 | 09/11 | Thiết lập môi trường Backend | Cấu hình Prisma kết nối SQL Server | PR |
| AI-02 | 10/11 | Xây dựng cơ sở dữ liệu | Chạy migration và seeder | PR |
| AI-03 | 11/11 | Phát triển chức năng Backend | Xây dựng chức năng đăng ký tài khoản Backend | PR |
| AI-04 | 11/11 | Phân tích và thiết kế hệ thống | Vẽ sơ đồ kiến trúc tổng thể hệ thống | PR |
| AI-05 | 11/11 | Phát triển Backend | Xây dựng chức năng đăng ký Backend | PR |
| AI-06 | 12/11 | Phát triển Backend | Xây dựng chức năng đăng nhập và đăng xuất | PR |
| AI-07 | 12/11 | Phát triển Backend | Phân quyền Admin và điều hướng theo vai trò | PR |
| AI-08 | 12/11 | Phát triển Backend | Xử lý lỗi CORS khi kết nối Frontend với Backend | PR |


### AI LOG 01 – [AI-01] Cấu hình Prisma kết nối SQL Server

- Ngày / Người dùng: 2026-11-09 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Thiết lập môi trường Backend
- Task / Commit / PR: Cấu hình cơ sở dữ liệu / 
- Mục đích: Kết nối Backend với SQL Server bằng Prisma, sử dụng Windows Authentication thay vì tài khoản SQL Server.
- Prompt chính: "tôi đang dùng Windows Authentication. Hướng dẫn tôi cấu hình Prisma kết nối SQL Server."
- Kết quả AI trả về (tóm tắt): Hướng dẫn cấu hình `DATABASE_URL`, Prisma schema, Prisma Client và cách kiểm tra kết nối SQL Server.
- Đánh giá: Đúng một phần. Cần điều chỉnh cấu hình theo môi trường SQL Server và Windows Authentication thực tế.
- Đã chỉnh sửa gì: Cập nhật file `.env`, `schema.prisma` và cấu hình Prisma Client phù hợp với database `ecommerce`.
- Cách kiểm chứng: Chạy `npx prisma generate`, kiểm tra Prisma Client và thử truy vấn dữ liệu.
- Tỷ lệ nội dung AI còn giữ lại: 80%.
- Điều học được: Hiểu cách cấu hình Prisma, kết nối SQL Server và sử dụng Windows Authentication.

---

### AI LOG 02 – [AI-02] Chạy migration và seeder

- Ngày / Người dùng: 2026-11-10 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Xây dựng cơ sở dữ liệu
- Task / Commit / PR /
- Mục đích: đưa migration vầ seeder lên database đã kết nối.
- Prompt chính: "Hướng dẫn chạy migration và seeder cho database ecommerce bằng Sequelize, sử dụng SQL Server Windows Authentication."
- Kết quả AI trả về (tóm tắt): Hướng dẫn chạy migration, cấu hình Sequelize CLI, kết nối SQL Server và chạy dữ liệu mẫu bằng seeder.
- Đánh giá: Đúng một phần. Cần cài thêm thư viện và điều chỉnh cấu hình kết nối theo Windows Authentication.
- Đã chỉnh sửa gì: Cài đặt `sequelize`, `sequelize-cli`, `msnodesqlv8`, cấu hình kết nối và điều chỉnh migration.
- Cách kiểm chứng: Chạy `npx sequelize-cli db:migrate:status --env development`, sau đó chạy seeder và kiểm tra các bảng trong SSMS.
- Tỷ lệ nội dung AI còn giữ lại: 75%.
- Điều học được: Hiểu cách quản lý phiên bản cấu trúc database bằng migration và tạo dữ liệu mẫu bằng seeder.

---

### AI LOG 03 – [AI-03] Xây dựng chức năng đăng ký tài khoản Backend

- Ngày / Người dùng: 2026-11-11 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Phát triển chức năng Backend
- Task / Commit / PR: API đăng ký tài khoản / AI-assisted feat(TM-04): dang ky tai khoan bam mat khau 
- Mục đích: Xây dựng chức năng đăng ký tài khoản phía Server, kiểm tra dữ liệu đầu vào và trả về thông báo lỗi bằng tiếng Việt.
- Prompt chính: "Làm form đăng ký phía server: kiểm tra dữ liệu, thông báo lỗi tiếng Việt."
- Kết quả AI trả về (tóm tắt): Hướng dẫn xây dựng `AuthService`, `AuthController`, `authRoutes`, `UserRepository`; kiểm tra họ tên, email, mật khẩu, email trùng và mã hóa mật khẩu bằng bcrypt.
- Đánh giá: Đúng. Một số đoạn code cần điều chỉnh theo cấu trúc Backend hiện tại.
- Đã chỉnh sửa gì: Tổ chức chức năng đăng ký theo mô hình nhiều lớp, sử dụng Prisma để tạo tài khoản và bcrypt để mã hóa mật khẩu.
- Cách kiểm chứng: Gửi request `POST /api/auth/register`, kiểm tra response và dữ liệu được lưu trong bảng `Users`.
- Tỷ lệ nội dung AI còn giữ lại: 85%.
- Điều học được: Hiểu quy trình đăng ký tài khoản, kiểm tra dữ liệu đầu vào, xử lý email trùng và bảo mật mật khẩu.

---

### AI LOG 04 – [AI-04] Vẽ sơ đồ kiến trúc tổng thể hệ thống

- Ngày / Người dùng: 2026-11-11 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Phân tích và thiết kế hệ thống
- Task / Commit / PR: `docs/architecture.png` / AI-assisted | so do kien truc tong the
- Mục đích: Xây dựng sơ đồ kiến trúc tổng thể mô tả cách Frontend, Backend, các lớp xử lý và cơ sở dữ liệu tương tác với nhau.
- Prompt chính: "Dựa vào đặc tả hệ thống hãy vẽ sơ đồ kiến trúc tổng thể (trình duyệt – web server – các lớp – CSDL) docs/architecture.png."
- Kết quả AI trả về (tóm tắt): Tạo sơ đồ thể hiện luồng từ trình duyệt, Express Web Server, Routes, Controllers, Services, Repositories, Prisma ORM đến SQL Server.
- Đánh giá: Đúng một phần. Sơ đồ phù hợp với cấu trúc Backend hiện tại nhưng cần đối chiếu thêm với đặc tả hệ thống đầy đủ.
- Đã chỉnh sửa gì: Điều chỉnh vị trí và nội dung sơ đồ theo cấu trúc thư mục và các bảng dữ liệu thực tế của dự án.
- Cách kiểm chứng: Đối chiếu sơ đồ với source code Backend và cấu trúc database trong SQL Server.
- Tỷ lệ nội dung AI còn giữ lại: 90%.
- Điều học được: Hiểu rõ luồng xử lý request và response giữa Frontend, Backend và cơ sở dữ liệu.

---

### AI LOG 05 – [AI-05] Xây dựng chức năng đăng ký Backend

- Ngày / Người dùng: 2026-11-11 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Phát triển Backend
- Task / Commit / PR: feature/TM-04-dang-ky / AI-assisted feat(TM-04): dang ky tai khoan bam mat khau
- Mục đích: Xây dựng chức năng đăng ký tài khoản an toàn.
- Prompt chính: "Hướng dẫn tạo Model User, UserRepository, AuthService.register(), kiểm tra email trùng, băm mật khẩu bằng bcrypt và kiểm tra dữ liệu đăng ký, thông báo lỗi tiếng Việt."
- Kết quả AI trả về: Hướng dẫn tạo User, Repository và Service; kiểm tra email trùng, mã hóa mật khẩu bằng bcrypt và validate dữ liệu.
- Đánh giá: Đúng, phù hợp yêu cầu.
- Đã chỉnh sửa gì: Điều chỉnh code theo cấu trúc Backend và database SQL Server.
- Cách kiểm chứng: Thử đăng ký hợp lệ, email trùng, dữ liệu thiếu và kiểm tra mật khẩu đã mã hóa trong database.
- Tỷ lệ nội dung AI còn giữ lại: 85%.
- Điều học được: Hiểu cách tổ chức Repository, Service, kiểm tra dữ liệu và bảo mật mật khẩu bằng bcrypt.

---

### AI LOG 06 – [AI-06] Xây dựng chức năng đăng nhập và đăng xuất

- Ngày / Người dùng: 2026-11-12 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Phát triển chức năng xác thực
- Task / Commit / PR: `feature/TM-04-dang-nhap` /
- Mục đích: Xây dựng chức năng đăng nhập, kiểm tra email và mật khẩu, xác thực tài khoản và quản lý trạng thái đăng nhập.
- Prompt chính: "Hướng dẫn xây dựng chức năng đăng nhập, đăng xuất, tạo JWT và kiểm tra quyền truy cập."
- Kết quả AI trả về (tóm tắt): Đề xuất sử dụng bcrypt để so sánh mật khẩu, JWT để xác thực người dùng và middleware để kiểm tra token.
- Đánh giá: Đúng về hướng triển khai. Cần kiểm tra các trường hợp đăng nhập sai, tài khoản bị khóa và đăng xuất thực tế.
- Đã chỉnh sửa gì: Bổ sung luồng xử lý đăng nhập và xác thực theo cấu trúc Backend hiện có.
- Cách kiểm chứng: Thử đăng nhập với tài khoản hợp lệ, sai mật khẩu và kiểm tra token trả về.
- Tỷ lệ nội dung AI còn giữ lại: 80%.
- Điều học được: Hiểu cách xác thực người dùng bằng JWT, bcrypt và cách quản lý phiên đăng nhập.

---

### AI LOG 07 – [AI-07] Phân quyền Admin và điều hướng theo vai trò

- Ngày / Người dùng: 2026-11-12 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Phát triển chức năng phân quyền
- Task / Commit / PR: `feature/TM-04-dang-nhap` / 
- Mục đích: Phân quyền admin và customer, điều hướng người dùng đến đúng trang sau khi đăng nhập và bảo vệ trang quản trị.
- Prompt chính: "Kết hợp Frontend và Backend để thực hiện điều hướng: admin vào /admin, khách hàng về trang chủ; chặn khách hàng truy cập /admin."
- Kết quả AI trả về (tóm tắt): Đề xuất sử dụng role trong JWT, middleware xác thực, middleware kiểm tra quyền admin và cơ chế bảo vệ route phía Frontend.
- Đánh giá: Đúng về logic. Cần kiểm chứng bằng hai tài khoản có role khác nhau và thử truy cập trực tiếp URL `/admin`.
- Đã chỉnh sửa gì: Bổ sung hướng xử lý điều hướng theo role và cập nhật role tài khoản trong SQL Server để phục vụ kiểm thử.
- Cách kiểm chứng: Đăng nhập bằng admin và customer, kiểm tra điều hướng; thử dùng customer truy cập `/admin`.
- Tỷ lệ nội dung AI còn giữ lại: 80%.
- Điều học được: Phân biệt xác thực và phân quyền; hiểu rằng bảo vệ route phải được thực hiện ở cả Frontend và Backend.

---

### AI LOG 08 – [AI-08] Xử lý lỗi CORS khi kết nối Frontend với Backend

- Ngày / Người dùng: 2026-11-12 / Trần Ngọc Duy
- Công cụ: ChatGPT – GPT-6
- Giai đoạn: Tích hợp và kiểm thử hệ thống
- Task / Commit / PR: Cấu hình CORS cho API đăng ký / commit feat(TM-04): dang nhap dang xuat phan quyen
- Mục đích: Khắc phục lỗi trình duyệt chặn request từ Frontend tại `localhost:5173` đến Backend tại `localhost:5000`.
- Prompt chính: "Hướng dẫn xử lý lỗi CORS khi Frontend gọi API đăng ký từ localhost:5173 đến Backend localhost:5000."
- Kết quả AI trả về (tóm tắt): Xác định nguyên nhân do Backend chưa trả về header `Access-Control-Allow-Origin`, hướng dẫn cài thư viện `cors` và cấu hình middleware Express.
- Đánh giá: Đúng. Cần kiểm tra lại request sau khi Backend được khởi động lại.
- Đã chỉnh sửa gì: Bổ sung middleware CORS, cho phép origin Frontend và các phương thức HTTP cần thiết.
- Cách kiểm chứng: Gửi lại request đăng ký từ trình duyệt, kiểm tra Console và Network để xác nhận request không còn bị trình duyệt chặn.
- Tỷ lệ nội dung AI còn giữ lại: 90%.
- Điều học được: Hiểu nguyên nhân lỗi CORS, cách cấu hình middleware và cách kiểm tra lỗi tích hợp Frontend – Backend.
