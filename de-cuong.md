NHÓM 5v3s
# ĐỀ TÀI DỰ ÁN
## 1. Đề tài chọn: THƯƠNG MẠI ĐIỆN TỬ

## 2. Công nghệ sử dụng:
**Tổ hợp công nghệ: E- Nodejs + SQL**
- **Backend (BE):** Node.js kết hợp framework Express.js
- **Frontend (FE):** ReactJS
- **Cơ sở dữ liệu (CSDL):** SQL Server
- **ORM:** Sử dụng Sequelize / Prisma để tương tác với CSDL
- **Công cụ hỗ trợ:** 
  - RESTful API: Giao tiếp độc lập giữa Frontend và Backend.
  - Swagger: Quản lý và xây dựng tài liệu API.
  - Quản lý công việc: Trello.
  - Quản lý mã nguồn: Git/GitHub.
**Lý do lựa chọn:**
1. **Phù hợp với năng lực thành viên:**
   - ReactJS có cấu trúc component, thuận tiện chia nhỏ giao diện, phổ biến và dễ sử dụng.
   - Node.js và Express.js có cú pháp tương đối dễ tiếp cận, phù hợp để xây dựng backend nhanh chóng.
2. **Phù hợp với đề tài Thương mại điện tử:**
   - ReactJS giúp xây dựng trải nghiệm mượt mà cho giao diện mua sắm, giỏ hàng, quản lý tài khoản và đơn hàng.
   - Node.js + Express.js hỗ trợ xây dựng API xử lý hiệu quả các nghiệp vụ: đăng nhập, quản lý sản phẩm, giỏ hàng, đơn hàng và thanh toán.
   - SQL Server phù hợp để lưu trữ dữ liệu có tính toàn vẹn và quan hệ chặt chẽ như người dùng, sản phẩm, danh mục và đơn hàng.
3. **Dễ phát triển và mở rộng:**
   - ORM (Prisma/Sequelize) giúp truy vấn, quản lý cơ sở dữ liệu thuận tiện và an toàn.
   - Kiến trúc RESTful API giúp frontend và backend giao tiếp độc lập, dễ dàng bảo trì hoặc mở rộng sau này.

## 3. Vai trò:
- **TV1 - [Nguyễn Chí Hải]:** Trưởng nhóm (PM/Scrum Master).
- **TV2 - [Trần Ngọc Duy]:** BackEnd 
- **TV3 - [Phạm Thiên Phúc]:** FrontEnd
- **TV4 - [Mai Thanh Tân]:** Cơ sở dữ liệu
- **TV5 - [Hoàng Tiến Đạt]:** Git & kiểm thử (QA)


## 4. Chức năng bắt buộc:
- **TV1 (Nguyễn Chí Hải):**
  - `TM-08`: Hồ sơ cá nhân (Chỉnh sửa họ tên, SĐT, địa chỉ nhận hàng; đổi mật khẩu yêu cầu mật khẩu cũ).
  - `TM-14`: Admin - Quản lý người dùng (Xem danh sách, tìm kiếm theo email, khóa/mở khóa tài khoản).

- **TV2 (Trần Ngọc Duy):**
  - `TM-04`: Đăng ký, đăng nhập tài khoản (Băm mật khẩu Bcrypt, tự động điều hướng theo vai trò).
  - `TM-06`: Đặt hàng và Thanh toán COD (Tạo đơn "Chờ xác nhận", trừ tồn kho và xóa giỏ hàng trong 1 transaction).

- **TV3 (Phạm Thiên Phúc):**
  - `TM-01`: Trang chủ (Hiển thị linh kiện mới nhập và danh mục sản phẩm nổi bật).
  - `TM-02`: Tìm kiếm, lọc sản phẩm linh kiện (Lọc theo hãng, khoảng giá, sắp xếp, phân trang server)[cite: 13].
  - `TM-03`: Xem chi tiết sản phẩm linh kiện (Hiển thị thông số kỹ thuật, tồn kho, kiểm tra đăng nhập khi bấm thêm giỏ).

- **TV4 (Mai Thanh Tân):**
  - `TM-11`: Admin - Quản lý danh mục linh kiện (CRUD danh mục, ràng buộc không xóa danh mục đang có sản phẩm).
  - `TM-12`: Admin - Quản lý sản phẩm linh kiện (CRUD sản phẩm, tải ảnh đại diện <=2MB, ẩn/hiện sản phẩm).

- **TV5 (Hoàng Tiến Đạt):**
  - `TM-05`: Quản lý giỏ hàng (Thêm, sửa số lượng, xóa; chặn chọn vượt tồn kho; lưu CSDL).
  - `TM-07`: Đơn hàng của tôi (Xem danh sách/chi tiết đơn; cho phép hủy đơn "Chờ xác nhận" và hoàn tồn kho).
  - `TM-13`: Admin - Quản lý đơn hàng (Lọc theo trạng thái, chuyển trạng thái đơn theo đúng luồng 1 chiều).
## 5. Rủi ro:
1. **Trễ tiến độ tích hợp (Integration Delay):** Dự án thực hiện trong 3 tuần, rủi ro không kịp tích hợp API giữa Frontend (ReactJS) và Backend (Node.js) ở tuần cuối.
2. **Xung đột mã nguồn trên Git (Merge Conflict):** 5 thành viên làm việc đồng thời dễ gây đè mã nguồn nếu không tuân thủ nghiêm quy tắc checkout nhánh feature và review PR qua TV5.
3. **Thiết kế CSDL thiếu trường thông tin (Database Schema Flaw):** Sản phẩm linh kiện có nhiều thuộc tính phức tạp. Nếu ERD ban đầu thiếu các trường quan trọng (giá tại thời điểm mua, số lượng tồn kho, trạng thái đơn), sẽ tốn thời gian refactor toàn bộ API ở Sprint S2.