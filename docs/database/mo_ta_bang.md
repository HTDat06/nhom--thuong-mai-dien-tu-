# MÔ TẢ CẤU TRÚC CƠ SỞ DỮ LIỆU
## 1. Tổng quan
Cơ sở dữ liệu được thiết kế cho hệ thống bán hàng, gồm 6 bảng:
1. Users
2. categories
3. products
4. cart_items
5. orders
6. order_items
- Các bảng được liên kết với nhau thông qua khóa chính (PK) và khóa ngoại (FK), đảm bảo tính toàn vẹn và nhất quán dữ liệu.
- Hệ quản trị cơ sở dữ liệu là SQL Server, được tạo và quản lý bằng Sequelize 6 (Migration). Các kiểu dữ liệu trong tài liệu này là kiểu thực tế trên SQL Server do Sequelize ánh xạ: STRING thành NVARCHAR, TEXT thành NVARCHAR(MAX), INTEGER thành INT, và cột tự tăng dùng IDENTITY(1,1).
## 2. Chi tiết các bảng
### 2.1. Bảng Users
**Mục đích:** Lưu trữ thông tin tài khoản người dùng.

| Tên cột  | Kiểu dữ liệu  | Ràng buộc                    | Mô tả                                       |
|----------|---------------|------------------------------|---------------------------------------------|
| user_id  | INT           | PK, IDENTITY(1,1), NOT NULL  | Mã người dùng                               |
| name     | NVARCHAR(225) | NOT NULL                     | Họ tên người dùng                           |
| email    | NVARCHAR(225) | NOT NULL, UNIQUE             | Email đăng nhập                             |
| password | NVARCHAR(225) | NOT NULL                     | Mật khẩu                                    |
| phone    | NVARCHAR(225) | NOT NULL                     | Số điện thoại                               |
| role     | NVARCHAR(50)  | NOT NULL, DEFAULT 'customer' | Vai trò của tài khoản, mặc định là customer |

### 2.2. Bảng categories

**Mục đích:** Lưu trữ thông tin danh mục sản phẩm.

| Tên cột       | Kiểu dữ liệu  | Ràng buộc                   | Mô tả          |
|---------------|---------------|-----------------------------|----------------|
| category_id   | INT           | PK, IDENTITY(1,1), NOT NULL | Mã danh mục    |
| category_name | NVARCHAR(225) | NOT NULL                    | Tên danh mục   |
| description   | NVARCHAR(MAX) | NOT NULL                    | Mô tả danh mục |

### 2.3. Bảng products

**Mục đích:** Lưu trữ thông tin sản phẩm trong hệ thống.

| Tên cột      | Kiểu dữ liệu  | Ràng buộc                               | Mô tả              |
|--------------|---------------|-----------------------------------------|--------------------|
| product_id   | INT           | PK, IDENTITY(1,1), NOT NULL             | Mã sản phẩm        |
| category_id  | INT           | FK, NOT NULL                            | Mã danh mục        |
| product_name | NVARCHAR(225) | NOT NULL                                | Tên sản phẩm       |
| description  | NVARCHAR(MAX) | NOT NULL                                | Mô tả sản phẩm     |
| price        | DECIMAL(12,2) | NOT NULL, CHECK (price >= 0)            | Giá sản phẩm       |
| stock        | INT           | NOT NULL, DEFAULT 0, CHECK (stock >= 0) | Số lượng tồn kho   |
| image        | NVARCHAR(225) | NOT NULL                                | Đường dẫn hình ảnh |

**Khóa ngoại:**
- category_id tham chiếu categories(category_id), ON UPDATE CASCADE, ON DELETE NO ACTION.

**Chỉ mục:**
- INDEX(product_name).
- INDEX(category_id).

### 2.4. Bảng cart_items

**Mục đích:** Lưu trữ các sản phẩm được thêm vào giỏ hàng của người dùng.

| Tên cột      | Kiểu dữ liệu | Ràng buộc                                 | Mô tả                |
|--------------|--------------|-------------------------------------------|----------------------|
| cart_item_id | INT          | PK, IDENTITY(1,1), NOT NULL               | Mã chi tiết giỏ hàng |
| user_id      | INT          | FK, NOT NULL                              | Mã người dùng        |
| product_id   | INT          | FK, NOT NULL                              | Mã sản phẩm          |
| quantity     | INT          | NOT NULL, DEFAULT 1, CHECK (quantity > 0) | Số lượng sản phẩm    |

**Khóa ngoại:**
- user_id tham chiếu Users(user_id), ON UPDATE CASCADE, ON DELETE CASCADE.
- product_id tham chiếu products(product_id), ON UPDATE CASCADE, ON DELETE NO ACTION.

### 2.5. Bảng orders

**Mục đích:** Lưu trữ thông tin đơn đặt hàng của người dùng.

| Tên cột          | Kiểu dữ liệu  | Ràng buộc                   | Mô tả                                    |
|------------------|---------------|-----------------------------|------------------------------------------|
| order_id         | INT           | PK, IDENTITY(1,1), NOT NULL | Mã đơn hàng                              |
| user_id          | INT           | FK, NOT NULL                | Mã người dùng                            |
| total_amount     | DECIMAL(12,2) | NOT NULL                    | Tổng tiền đơn hàng                       |
| shipping_address | NVARCHAR(225) | NOT NULL                    | Địa chỉ giao hàng                        |
| phone            | NVARCHAR(225) | NOT NULL                    | Số điện thoại nhận hàng                  |
| status           | NVARCHAR(225) | NOT NULL, DEFAULT 'pending' | Trạng thái đơn hàng, mặc định là pending |

**Khóa ngoại:**
- user_id tham chiếu Users(user_id), ON UPDATE CASCADE, ON DELETE NO ACTION.

**Chỉ mục:**
- INDEX(user_id, status).

### 2.6. Bảng order_items

**Mục đích:** Lưu trữ chi tiết các sản phẩm thuộc từng đơn hàng.

| Tên cột        | Kiểu dữ liệu  | Ràng buộc                                 | Mô tả                          |
|----------------|---------------|-------------------------------------------|--------------------------------|
| order_items_id | INT           | PK, IDENTITY(1,1), NOT NULL               | Mã chi tiết đơn hàng           |
| order_id       | INT           | FK, NOT NULL                              | Mã đơn hàng                    |
| product_id     | INT           | FK, NOT NULL                              | Mã sản phẩm                    |
| quantity       | INT           | NOT NULL, DEFAULT 1, CHECK (quantity > 0) | Số lượng sản phẩm              |
| price          | DECIMAL(12,2) | NOT NULL, CHECK (price >= 0)              | Đơn giá tại thời điểm đặt hàng |
| subtotal       | DECIMAL(12,2) | NOT NULL                                  | Thành tiền                     |

**Khóa ngoại:**
- order_id tham chiếu orders(order_id), ON UPDATE CASCADE, ON DELETE CASCADE.
- product_id tham chiếu products(product_id), ON UPDATE CASCADE, ON DELETE NO ACTION.

**Công thức tính:**

subtotal = quantity × price.

## 3. Mô tả các mối quan hệ

| STT | Bảng cha   | Bảng con    | Quan hệ | ON UPDATE | ON DELETE |
|-----|------------|-------------|---------|-----------|-----------|
| 1   | Users      | cart_items  | 1-N     | CASCADE   | CASCADE   |
| 2   | Users      | orders      | 1-N     | CASCADE   | NO ACTION |
| 3   | categories | products    | 1-N     | CASCADE   | NO ACTION |
| 4   | products   | cart_items  | 1-N     | CASCADE   | NO ACTION |
| 5   | orders     | order_items | 1-N     | CASCADE   | CASCADE   |
| 6   | products   | order_items | 1-N     | CASCADE   | NO ACTION |

**Giải thích hành vi khi xóa:**
- **CASCADE:** Khi xóa người dùng thì giỏ hàng của người dùng đó bị xóa theo; khi xóa đơn hàng thì các chi tiết đơn hàng bị xóa theo.
- **NO ACTION:** Không cho xóa bản ghi cha nếu vẫn còn bản ghi con tham chiếu tới (ví dụ: không xóa được danh mục còn sản phẩm, không xóa được sản phẩm đã nằm trong giỏ hàng hoặc đơn hàng, không xóa được người dùng đã có đơn hàng).
- 
## 4. Các ràng buộc dữ liệu

- **PRIMARY KEY:** Mỗi bảng có một khóa chính tự tăng để xác định duy nhất từng bản ghi.
- **FOREIGN KEY:** Đảm bảo dữ liệu giữa các bảng có liên kết hợp lệ, với quy tắc ON UPDATE / ON DELETE như mục 3.
- **UNIQUE:** Email người dùng không được trùng lặp.
- **NOT NULL:** Tất cả các cột đều NOT NULL, không cột nào cho phép NULL. Các cột có giá trị mặc định xem mục DEFAULT bên dưới.
- **DEFAULT:** Các giá trị mặc định gồm Users.role = 'customer', products.stock = 0, cart_items.quantity = 1, orders.status = 'pending', order_items.quantity = 1.
- **CHECK:** Giá sản phẩm và tồn kho không được âm; số lượng sản phẩm phải lớn hơn 0; đơn giá trong chi tiết đơn hàng không được âm.

| STT | Tên ràng buộc            | Bảng        | Điều kiện    |
|-----|--------------------------|-------------|--------------|
| 1   | chk_products_price       | products    | price >= 0   |
| 2   | chk_products_stock       | products    | stock >= 0   |
| 3   | chk_cart_items_quantity  | cart_items  | quantity > 0 |
| 4   | chk_order_items_quantity | order_items | quantity > 0 |
| 5   | chk_order_items_price    | order_items | price >= 0   |

**Lưu ý:**
- Công thức subtotal = quantity × price và total_amount = tổng các subtotal của đơn hàng chưa được ràng buộc ở mức cơ sở dữ liệu, cần được kiểm soát ở tầng ứng dụng.

## 5. Các chỉ mục (INDEX)

| STT | Bảng     | Tên chỉ mục               | Cột             | Mục đích                                                 |
|-----|----------|---------------------------|-----------------|----------------------------------------------------------|
| 1   | products | idx_products_product_name | product_name    | Tăng tốc tìm kiếm sản phẩm theo tên                      |
| 2   | products | idx_products_category_id  | category_id     | Tăng tốc lọc sản phẩm theo danh mục                      |
| 3   | orders   | idx_orders_user_id_status | user_id, status | Tăng tốc truy vấn đơn hàng theo người dùng và trạng thái |

## 6. Nguyên tắc chuẩn hóa
Cơ sở dữ liệu được thiết kế theo nguyên tắc chuẩn hóa đến dạng chuẩn thứ ba (3NF):
- **1NF:** Các thuộc tính chứa giá trị đơn, không chứa nhóm dữ liệu lặp.
- **2NF:** Các thuộc tính không khóa phụ thuộc đầy đủ vào khóa chính.
- **3NF:** Không có phụ thuộc bắc cầu giữa các thuộc tính không khóa.
Các giá trị total_amount và subtotal được lưu để phục vụ nghiệp vụ đơn hàng và cần được kiểm soát tính nhất quán với chi tiết sản phẩm. Cột price trong order_items lưu đơn giá tại thời điểm đặt hàng nên không bị ảnh hưởng khi giá trong bảng products thay đổi về sau.
## 7. Quyết định thiết kế chính
### 7.1. Vì sao tách order_items khỏi orders
- Một đơn hàng có nhiều sản phẩm và một sản phẩm có thể nằm trong nhiều đơn hàng, tức là quan hệ N-N giữa orders và products. order_items là bảng trung gian, tách quan hệ này thành hai quan hệ 1-N.
- Nếu gộp vào orders, hoặc phải lặp cột (sản phẩm 1, sản phẩm 2, ...) vi phạm 1NF, hoặc phải lặp cả dòng đơn hàng cho mỗi sản phẩm làm trùng địa chỉ, số điện thoại và trạng thái.
- Các thuộc tính quantity, price, subtotal phụ thuộc vào cặp (đơn hàng, sản phẩm) nên thuộc về order_items, không thuộc orders hay products.
- Khi xóa một đơn hàng, các dòng chi tiết bị xóa theo nhờ ON DELETE CASCADE.
### 7.2. Vì sao lưu giá tại thời điểm mua
- Giá trong products thay đổi theo thời gian (khuyến mãi, tăng giá). Nếu order_items chỉ lưu product_id thì đơn hàng cũ sẽ đổi giá theo giá hiện tại, làm sai tổng tiền, doanh thu và hóa đơn đã phát hành.
- order_items.price lưu đơn giá lúc đặt hàng, subtotal = quantity × price, và orders.total_amount là tổng các subtotal của đơn.
- Đây là dữ liệu lịch sử chứ không phải bản sao dư thừa của products.price, nên không vi phạm 3NF.
- Khi tạo đơn hàng cần dùng transaction để price, subtotal và total_amount luôn nhất quán với nhau.
## 8. Kết luận
Cơ sở dữ liệu gồm 6 bảng, có đầy đủ khóa chính, khóa ngoại, các mối quan hệ và ràng buộc dữ liệu. Các chỉ mục được lựa chọn nhằm cải thiện hiệu suất truy vấn. Thiết kế hướng đến chuẩn hóa 3NF, đảm bảo tính toàn vẹn và hạn chế dư thừa dữ liệu trong hệ thống bán máy tính.
