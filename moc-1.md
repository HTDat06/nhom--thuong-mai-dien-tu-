# BÁO CÁO MỐC 1
# WEBSITE THƯƠNG MẠI ĐIỆN TỬ BÁN LINH KIỆN MÁY TÍNH

## 1. GIỚI THIỆU ĐỀ TÀI

### 1.1. Tên đề tài
Xây dựng website thương mại điện tử bán linh kiện máy tính.

### 1.2. Mục tiêu
Xây dựng một website thương mại điện tử giúp khách hàng tìm kiếm, xem thông tin và đặt mua linh kiện máy tính trực tuyến.

Hệ thống hỗ trợ quản trị viên quản lý sản phẩm, khách hàng và đơn hàng.

### 1.3. Đối tượng sử dụng

- Khách vãng lai: Xem sản phẩm, tìm kiếm sản phẩm, xem chi tiết và đăng ký tài khoản.
- Khách hàng: Đăng nhập, quản lý giỏ hàng và đặt hàng.
- Quản trị viên: Quản lý sản phẩm, khách hàng và đơn hàng.

### 1.4. Phạm vi chức năng

- Đăng ký, đăng nhập, đăng xuất.
- Xem danh sách và chi tiết linh kiện máy tính.
- Tìm kiếm và phân loại sản phẩm.
- Quản lý giỏ hàng.
- Đặt hàng và thanh toán khi nhận hàng (COD).
- Quản lý sản phẩm.
- Quản lý đơn hàng.
- Quản lý khách hàng.

## 2. CÔNG NGHỆ SỬ DỤNG

| Thành phần | Công nghệ |
| --- | --- |
| Backend | Node.js + Express|
| Frontend | ReactJS |
| Cơ sở dữ liệu | SQL Server |
| ORM | Sequelize |
| Công cụ phát triển | Visual Studio Code |
| Quản lý mã nguồn | GitHub |
| Quản lý công việc | Trello |

## 3. KIẾN TRÚC HỆ THỐNG

### 3.1. Mô hình kiến trúc

- Hệ thống sử dụng kiến trúc Client - Server, trong đó Frontend và Backend được tổ chức riêng biệt.
 1. Frontend sử dụng ReactJS.
 2. Backend sử dụng Node.js kết hợp Express.
 3. Database sử dụng hệ quản trị cơ sở dữ liệu SQL.

### 3.2. Các thành phần chính

1. Frontend (ReactJS)
    - Chịu trách nhiệm xây dựng giao diện người dùng, bao gồm:
    - Client: Giao diện dành cho khách hàng.
    - Admin: Giao diện dành cho quản trị viên.
    - Trang chủ.
    - Trang danh sách sản phẩm.
    - Trang chi tiết sản phẩm.
    - Trang đăng nhập, đăng ký.
    - Trang giỏ hàng và đặt hàng.

2. Backend (Node.js + Express)
    - Chịu trách nhiệm xử lý nghiệp vụ của hệ thống:
    - Xử lý đăng ký, đăng nhập, đăng xuất.
    - Quản lý tài khoản và phân quyền.
    - Quản lý sản phẩm và danh mục.
    - Quản lý giỏ hàng.
    - Xử lý đặt hàng.
    - Quản lý đơn hàng.

3. Database (SQL Server)
    - Chịu trách nhiệm lưu trữ dữ liệu của hệ thống:
    - Thông tin người dùng.
    - Thông tin sản phẩm.
    - Thông tin danh mục.
    - Thông tin giỏ hàng.
    - Thông tin đơn hàng.
    - Chi tiết đơn hàng.

4. ORM 
- Hỗ trợ Backend kết nối và thao tác với cơ sở dữ liệu thông qua Sequelize theo lựa chọn triển khai của nhóm.


### 3.3. Luồng hoạt động của hệ thống

Hệ thống hoạt động theo mô hình Client - Server, trong đó Frontend sử dụng ReactJS, Backend sử dụng Node.js kết hợp Express và cơ sở dữ liệu sử dụng MySQL hoặc SQL Server.
Quy trình hoạt động gồm các bước:
1. **Người dùng:** Truy cập website thông qua trình duyệt và thực hiện các thao tác như xem sản phẩm, tìm kiếm, đăng nhập hoặc đặt hàng.
2. **Frontend (ReactJS):** Tiếp nhận thao tác của người dùng, hiển thị giao diện và gửi yêu cầu HTTP đến Backend thông qua API.
3. **Backend (Node.js + Express):** Tiếp nhận yêu cầu từ Frontend, kiểm tra dữ liệu, xác thực tài khoản và xử lý nghiệp vụ tương ứng.
4. **ORM / Query Builder:** Hỗ trợ Backend thực hiện các thao tác truy vấn, thêm, sửa và xóa dữ liệu trong cơ sở dữ liệu.
5. **Database (MySQL / SQL Server):** Tiếp nhận truy vấn, xử lý và trả kết quả dữ liệu về Backend.
6. **Backend:** Nhận kết quả từ Database, xử lý dữ liệu và gửi phản hồi về Frontend dưới dạng JSON.
7. **Frontend (ReactJS):** Nhận dữ liệu phản hồi từ Backend và cập nhật giao diện để hiển thị kết quả cho người dùng.



## 4. THIẾT KẾ CƠ SỞ DỮ LIỆU (ERD)

### 4.1. Mục đích

Cơ sở dữ liệu được thiết kế nhằm quản lý và lưu trữ thông tin của hệ thống website thương mại điện tử bán linh kiện máy tính, bao gồm thông tin người dùng, sản phẩm, danh mục, giỏ hàng và đơn hàng.

Việc thiết kế cơ sở dữ liệu giúp dữ liệu được tổ chức khoa học, hạn chế trùng lặp và hỗ trợ quá trình truy vấn, quản lý thông tin.

### 4.2. Các nhóm dữ liệu chính

| Nhóm dữ liệu | Chức năng |
| --- | --- |
| Người dùng (Users) | Lưu thông tin tài khoản và quyền truy cập của người dùng. |
| Danh mục (Categories) | Quản lý các loại linh kiện máy tính như CPU, RAM, VGA, Mainboard, SSD. |
| Sản phẩm (Products) | Lưu thông tin linh kiện, giá bán, hình ảnh, thông số kỹ thuật và số lượng tồn kho. |
| Giỏ hàng (Carts) | Lưu thông tin giỏ hàng của khách hàng. |
| Chi tiết giỏ hàng (CartItems) | Lưu danh sách sản phẩm và số lượng sản phẩm trong giỏ hàng. |
| Đơn hàng (Orders) | Lưu thông tin đặt hàng của khách hàng. |
| Chi tiết đơn hàng (OrderItems) | Lưu sản phẩm, số lượng và giá bán tại thời điểm đặt hàng. |

### 4.3. Các mối quan hệ dữ liệu

Các mối quan hệ chính trong cơ sở dữ liệu bao gồm:

- **Users và Orders:** Một khách hàng có thể thực hiện nhiều đơn hàng.
- **Categories và Products:** Một danh mục có thể chứa nhiều sản phẩm.
- **Carts và CartItems:** Một giỏ hàng có thể chứa nhiều sản phẩm.
- **Products và CartItems:** Một sản phẩm có thể xuất hiện trong nhiều giỏ hàng.
- **Orders và OrderItems:** Một đơn hàng có thể chứa nhiều sản phẩm.
- **Products và OrderItems:** Một sản phẩm có thể xuất hiện trong nhiều chi tiết đơn hàng.

Các mối quan hệ trên được thể hiện trong sơ đồ ERD của hệ thống.

### 4.4. Sơ đồ ERD

Sơ đồ ERD mô tả cấu trúc cơ sở dữ liệu, các bảng dữ liệu, khóa chính, khóa ngoại và mối quan hệ giữa các bảng.

**Đường dẫn sơ đồ ERD:**

`docs/database/erd-final.png`

**Tài liệu mô tả các bảng:**

`docs/database/mo-ta-bang.md`

---

## 5. DANH SÁCH USER STORY

User Story mô tả các nhu cầu và chức năng mà từng đối tượng sử dụng mong muốn thực hiện trên hệ thống.

### 5.1. Danh sách User Story

|  ID  |                                             User Story                                     |    Tác nhân    |
| --- | --- | --- |
| US01 | Là khách vãng lai, tôi muốn xem danh sách linh kiện máy tính để lựa chọn sản phẩm.         | Khách vãng lai |
| US02 | Là khách vãng lai, tôi muốn tìm kiếm sản phẩm theo tên để tìm linh kiện nhanh chóng.       | Khách vãng lai |
| US03 | Là khách vãng lai, tôi muốn xem chi tiết sản phẩm để biết giá bán và thông số kỹ thuật.    | Khách vãng lai |
| US04 | Là khách vãng lai, tôi muốn đăng ký tài khoản để sử dụng các chức năng mua hàng.           | Khách vãng lai |
| US05 | Là khách hàng, tôi muốn đăng nhập để sử dụng tài khoản cá nhân.                            |   Khách hàng   |
| US06 | Là khách hàng, tôi muốn thêm sản phẩm vào giỏ hàng để chuẩn bị mua hàng.                   |   Khách hàng   |
| US07 | Là khách hàng, tôi muốn đặt hàng và thanh toán COD để nhận linh kiện tại nhà.              |   Khách hàng   |
| US08 | Là quản trị viên, tôi muốn thêm, sửa và xóa sản phẩm để quản lý linh kiện.                 | Quản trị viên  |
| US09 | Là quản trị viên, tôi muốn quản lý đơn hàng để theo dõi và cập nhật trạng thái đơn.        | Quản trị viên  |
| US10 | Là quản trị viên, tôi muốn quản lý khách hàng để theo dõi thông tin tài khoản.             | Quản trị viên  |

---

## 6. KẾ HOẠCH SPRINT S2

### 6.1. Mục tiêu Sprint S2

Tiếp tục phát triển và hoàn thiện các chức năng chính của website thương mại điện tử bán linh kiện máy tính.

Tập trung xây dựng giao diện người dùng, xử lý nghiệp vụ Backend, kết nối cơ sở dữ liệu và kiểm thử các chức năng của hệ thống.

### 6.2. Danh sách công việc Sprint S2

| STT |       Công việc         | Nội dung thực hiện                                                    |
| --- | --- | --- |
|  1  |     Quản lý sản phẩm    | Xây dựng chức năng thêm, sửa, xóa và hiển thị sản phẩm.               |
|  2  |   Đăng nhập, đăng xuất  | Xây dựng chức năng xác thực tài khoản và phân quyền người dùng.       |
|  3  |  Giao diện Client/Admin | Hoàn thiện giao diện dành cho khách hàng và quản trị viên.            |
|  4  |     Cơ sở dữ liệu       | Kiểm tra và hoàn thiện cấu trúc cơ sở dữ liệu.                        |
|  5  |       Giỏ hàng          | Xây dựng chức năng thêm, sửa số lượng và xóa sản phẩm trong giỏ hàng. |
|  6  |       Đặt hàng          | Xử lý thông tin nhận hàng và phương thức thanh toán COD.              |
|  7  |     Quản lý đơn hàng    | Xây dựng chức năng xem và cập nhật trạng thái đơn hàng.               |
|  8  |       Kiểm thử          | Kiểm tra các chức năng, phát hiện và sửa lỗi phát sinh.               |

### 6.3. Phân công thực hiện

Nhóm gồm 5 thành viên, phối hợp thực hiện các công việc theo nhiệm vụ được phân công.

| Thành viên | Vai trò và nhiệm vụ |
| --- | --- | --- |
|   TV1      | Trưởng nhóm, quản lý tiến độ, điều phối và theo dõi công việc. |
|   TV2      | Phụ trách Backend và xử lý nghiệp vụ. |
|   TV3      | Phụ trách Frontend và xây dựng giao diện. |
|   TV4      | Phụ trách thiết kế và quản lý cơ sở dữ liệu. |
|   TV5      | Phụ trách kiểm thử và kiểm tra chất lượng hệ thống. |

Chi tiết công việc, người phụ trách và thời hạn hoàn thành được quản lý trên Trello.

### 6.4. Kết quả mong đợi

Sau khi hoàn thành Sprint S2, nhóm dự kiến đạt được các kết quả sau:
- Hoàn thiện các chức năng theo kế hoạch Sprint S2.
- Giao diện Client và Admin hoạt động ổn định.
- Frontend kết nối với Backend thông qua API.
- Backend có thể truy vấn và thao tác với cơ sở dữ liệu.
- Hoàn thiện quy trình quản lý giỏ hàng và đặt hàng.
- Các chức năng được kiểm thử và sửa những lỗi phát sinh.

---

## 7. KẾT LUẬN
- Trong Mốc 1, nhóm đã tiến hành phân tích yêu cầu hệ thống, xác định các tác nhân, xây dựng sơ đồ Use Case, thiết kế cơ sở dữ liệu ERD, xác định kiến trúc hệ thống và xây dựng wireframe giao diện.
- Các tài liệu thiết kế là cơ sở để nhóm tiếp tục triển khai và phát triển những chức năng chính của website thương mại điện tử bán linh kiện máy tính.
- Trong Sprint S2, nhóm sẽ tập trung hoàn thiện giao diện, phát triển các chức năng Backend, kết nối Frontend với Backend, xử lý dữ liệu và kiểm thử hệ thống nhằm đảm bảo website hoạt động đúng theo yêu cầu đề tài.