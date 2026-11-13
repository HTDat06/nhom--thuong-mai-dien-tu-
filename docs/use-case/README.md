# ĐẶC TẢ USE CASE - ĐỀ TÀI THƯƠNG MẠI ĐIỆN TỬ

## 1. Sơ đồ Use Case tổng quan
- **Tác nhân:** 
  1. Khách vãng lai (Guest)
  2. Khách hàng (Customer)
  3. Quản trị viên (Admin)
- **Sơ đồ chi tiết:** Xem file ảnh `docs/use-case-diagram.png`

---

## 2. Đặc tả chi tiết các Use Case chính

### UC-01: Đặt hàng (Checkout / TM-06)
- **Tác nhân:** Khách hàng
- **Tiền điều kiện:** 
  - Khách hàng đã đăng nhập vào hệ thống.
  - Giỏ hàng (`cart_items`) phải có ít nhất 1 sản phẩm hợp lệ và không vượt quá số lượng tồn kho.
- **Luồng chính:**
  1. Khách hàng chọn xem giỏ hàng và bấm nút "Thé hành đặt hàng".
  2. Hệ thống hiển thị form yêu cầu nhập thông tin nhận hàng (Họ tên người nhận, Số điện thoại, Địa chỉ giao hàng).
  3. Khách hàng điền đầy đủ thông tin và chọn hình thức thanh toán COD, sau đó xác nhận đặt hàng.
  4. Hệ thống kiểm tra tồn kho lần cuối, tạo đơn hàng mới với trạng thái *"Chờ xác nhận"*, tiến hành trừ số lượng tồn kho sản phẩm và xóa sạch giỏ hàng trong **một transaction duy nhất**.
  5. Hệ thống thông báo đặt hàng thành công và chuyển hướng về trang lịch sử mua hàng ("Đơn hàng của tôi").
- **Luồng ngoại lệ (Exception Flows):**
  - *Lỗi hết hàng:* Nếu sản phẩm trong giỏ vượt quá số lượng tồn kho thực tế, hệ thống hủy giao dịch, thông báo lỗi sản phẩm đã thay đổi số lượng và yêu cầu khách cập nhật lại giỏ hàng.
  - *Lỗi thiếu thông tin:* Nếu khách để trống họ tên, SĐT hoặc địa chỉ, hệ thống hiển thị thông báo lỗi bằng tiếng Việt tại các trường tương ứng (NFR-04).

---

### UC-02: Quản lý sản phẩm (Product Management / TM-12)
- **Tác nhân:** Quản trị viên (Admin)
- **Tiền điều kiện:** Quản trị viên đã đăng nhập bằng tài khoản có quyền `admin` và vượt qua bước kiểm tra phân quyền phía Server (NFR-01).
- **Luồng chính:**
  1. Quản trị viên truy cập trang quản lý sản phẩm (`/admin/products`).
  2. Hệ thống hiển thị danh sách sản phẩm có phân trang (10-20 bản ghi/trang) kèm công cụ tìm kiếm.
  3. Quản trị viên chọn "Thêm sản phẩm mới", nhập thông tin (Tên, danh mục, giá, mô tả, số lượng tồn kho) và tải lên 1 ảnh đại diện (định dạng jpg/png, dung lượng $\le 2$ MB).
  4. Hệ thống validate dữ liệu, lưu thông tin sản phẩm và file ảnh vào hệ thống.
  5. Cập nhật lại danh sách sản phẩm hiển thị trên giao diện quản trị.
- **Luồng ngoại lệ:**
  - *Lỗi định dạng/dung lượng ảnh:* Nếu tệp ảnh vượt quá 2MB hoặc sai định dạng (vd: .exe, .txt), hệ thống từ chối tải lên và báo lỗi rõ ràng.

---

### UC-03: Đăng nhập (Login / TM-04)
- **Tác nhân:** Khách vãng lai / Người dùng
- **Tiền điều kiện:** Người dùng đã có tài khoản đăng ký trên hệ thống.
- **Luồng chính:**
  1. Người dùng truy cập trang Đăng nhập.
  2. Nhập thông tin `Email` và `Mật khẩu` -> Nhấn nút "Đăng nhập".
  3. Hệ thống kiểm tra định dạng dữ liệu, đối chiếu email trong cơ sở dữ liệu và xác thực mật khẩu thông qua hàm băm bảo mật (bcrypt) (NFR-01).
  4. Kiểm tra trạng thái tài khoản không bị khóa (`status != locked`).
  5. Tạo phiên làm việc (Session/Token) và điều hướng phân quyền:
     - Nếu là `admin` -> Điều hướng về trang `/admin/dashboard`.
     - Nếu là `customer` -> Điều hướng về trang chủ `/`.
- **Luồng ngoại lệ:**
  - *Sai thông tin:* Mật khẩu hoặc email không khớp, hiển thị thông báo chung *"Email hoặc mật khẩu không chính xác"* để bảo mật.
  - *Tài khoản bị khóa:* Hiển thị thông báo *"Tài khoản của bạn đã bị khóa"* và từ chối cấp quyền.
