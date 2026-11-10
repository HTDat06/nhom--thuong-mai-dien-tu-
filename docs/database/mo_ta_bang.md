# MÔ TẢ CẤU TRÚC CƠ SỞ DỮ LIỆU
## 1. Tổng quan
Cơ sở dữ liệu được thiết kế cho hệ thống bán hàng, gồm 6 bảng:
1. Users
2. categories
3. products
4. cart_items
5. orders
6. order_items
Các bảng được liên kết với nhau thông qua khóa chính (PK) và khóa ngoại (FK), đảm bảo tính toàn vẹn và nhất quán dữ liệu.
## 2. Chi tiết các bảng
### 2.1. Bảng Users
**Mục đích:** Lưu trữ thông tin tài khoản người dùng.

| Tên cột  | Kiểu dữ liệu | Ràng buộc           | Mô tả |
| user_id  | INT          | PK, AUTO_INCREMENT  | Mã người dùng |
| name     | VARCHAR(225) |                     | Họ tên người dùng |
| email    | VARCHAR(225) | UNIQUE              | Email đăng nhập |
| password | VARCHAR(225) | NOT NULL            | Mật khẩu |
| phone    | VARCHAR(225) |                     | Số điện thoại |

### 2.2. Bảng categories
**Mục đích:** Lưu trữ thông tin danh mục sản phẩm.

| Tên cột       | Kiểu dữ liệu | Ràng buộc          | Mô tả |
| category_id   | INT          | PK, AUTO_INCREMENT | Mã danh mục |
| category_name | VARCHAR(225) |                    | Tên danh mục |
| description   | TEXT         |                    | Mô tả danh mục |

### 2.3. Bảng products

**Mục đích:** Lưu trữ thông tin sản phẩm trong hệ thống.

| Tên cột      | Kiểu dữ liệu | Ràng buộc           | Mô tả |
| product_id   | INT          | PK, AUTO_INCREMENT  | Mã sản phẩm |
| category_id  | INT          | FK, NOT NULL        | Mã danh mục |
| product_name | VARCHAR(225) |                     | Tên sản phẩm |
| description  | TEXT         |                     | Mô tả sản phẩm |
| price        | DECIMAL(12,2)| CHECK (price >= 0)  | Giá sản phẩm |
| stock        | INT          | CHECK (stock >= 0)  | Số lượng tồn kho |
| image        | VARCHAR(225) |                     | Đường dẫn hình ảnh |

**Khóa ngoại:**
- category_id tham chiếu categories(category_id).

**Chỉ mục:**
- INDEX(product_name).
- INDEX(category_id).

### 2.4. Bảng cart_items

**Mục đích:** Lưu trữ các sản phẩm được thêm vào giỏ hàng của người dùng.

| Tên cột      | Kiểu dữ liệu | Ràng buộc            | Mô tả |
| cart_item_id | INT          | PK, AUTO_INCREMENT   | Mã chi tiết giỏ hàng |
| user_id      | INT          | FK, NOT NULL         | Mã người dùng |
| product_id   | INT          | FK, NOT NULL         | Mã sản phẩm |
| quantity     | INT          | CHECK (quantity > 0) | Số lượng sản phẩm |

**Khóa ngoại:**
- user_id tham chiếu Users(user_id).
- product_id tham chiếu products(product_id).

### 2.5. Bảng orders

**Mục đích:** Lưu trữ thông tin đơn đặt hàng của người dùng.

| Tên cột          | Kiểu dữ liệu  | Ràng buộc          | Mô tả |
| order_id         | INT           | PK, AUTO_INCREMENT | Mã đơn hàng |
| user_id          | INT           | FK, NOT NULL       | Mã người dùng |
| total_amount     | DECIMAL(12,2) |                    | Tổng tiền đơn hàng |
| shipping_address | VARCHAR(225)  |                    | Địa chỉ giao hàng |
| phone            | VARCHAR(225)  |                    | Số điện thoại nhận hàng |
| status           | VARCHAR(225)  |                    | Trạng thái đơn hàng |

**Khóa ngoại:**
- user_id tham chiếu Users(user_id).

**Chỉ mục:**
- INDEX(user_id, status).

### 2.6. Bảng order_items

**Mục đích:** Lưu trữ chi tiết các sản phẩm thuộc từng đơn hàng.

| Tên cột        | Kiểu dữ liệu  | Ràng buộc           | Mô tả |
| order_items_id | INT           | PK, AUTO_INCREMENT  | Mã chi tiết đơn hàng |
| order_id       | INT           | FK, NOT NULL        | Mã đơn hàng |
| product_id     | INT           | FK, NOT NULL        | Mã sản phẩm |
| quality        | INT           | CHECK (quality > 0) | Số lượng sản phẩm |
| price          | DECIMAL(12,2) | CHECK (price >= 0)  | Đơn giá tại thời điểm đặt hàng |
| subtotal       | DECIMAL(12,2) |                     | Thành tiền |

**Khóa ngoại:**
- order_id tham chiếu orders(order_id).
- product_id tham chiếu products(product_id).

**Công thức tính:**

subtotal = quality × price.

## 3. Mô tả các mối quan hệ

| STT | Bảng cha   | Bảng con    | Quan hệ |
| 1   | Users      | cart_items  | 1-N |
| 2   | Users      | orders      | 1-N |
| 3   | categories | products    | 1-N |
| 4   | products   | cart_items  | 1-N |
| 5   | orders     | order_items | 1-N |
| 6   | products   | order_items | 1-N |

## 4. Các ràng buộc dữ liệu

- **PRIMARY KEY:** Mỗi bảng có một khóa chính để xác định duy nhất từng bản ghi.
- **FOREIGN KEY:** Đảm bảo dữ liệu giữa các bảng có liên kết hợp lệ.
- **UNIQUE:** Email người dùng không được trùng lặp.
- **CHECK:** Giá sản phẩm và tồn kho không được âm; số lượng sản phẩm phải lớn hơn 0.
- **NOT NULL:** Các khóa ngoại bắt buộc phải có giá trị để đảm bảo liên kết dữ liệu.

## 5. Các chỉ mục (INDEX)

| STT | Bảng     | Chỉ mục         | Mục đích |
| 1   | products | product_name    | Tăng tốc tìm kiếm sản phẩm theo tên |
| 2   | products | category_id     | Tăng tốc lọc sản phẩm theo danh mục |
| 3   | orders   | user_id, status | Tăng tốc truy vấn đơn hàng theo người dùng và trạng thái |

## 6. Nguyên tắc chuẩn hóa
Cơ sở dữ liệu được thiết kế theo nguyên tắc chuẩn hóa đến dạng chuẩn thứ ba (3NF):
- **1NF:** Các thuộc tính chứa giá trị đơn, không chứa nhóm dữ liệu lặp.
- **2NF:** Các thuộc tính không khóa phụ thuộc đầy đủ vào khóa chính.
- **3NF:** Không có phụ thuộc bắc cầu giữa các thuộc tính không khóa.
Các giá trị total_amount và subtotal được lưu để phục vụ nghiệp vụ đơn hàng và cần được kiểm soát tính nhất quán với chi tiết sản phẩm.
## 7. Kết luận
Cơ sở dữ liệu gồm 6 bảng, có đầy đủ khóa chính, khóa ngoại, các mối quan hệ và ràng buộc dữ liệu. Các chỉ mục được lựa chọn nhằm cải thiện hiệu suất truy vấn. Thiết kế hướng đến chuẩn hóa 3NF, đảm bảo tính toàn vẹn và hạn chế dư thừa dữ liệu trong hệ thống bán máy tính.