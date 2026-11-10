| ID | Mã chức năng | Bước thực hiện | Dữ liệu | Kết quả mong đợi | Kết quả thực tế |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC01 | TM-05 | 1. Chọn sản phẩm và bấm "Thêm vào giỏ hàng"<br>2. Thay đổi số lượng sản phẩm trong giỏ | Số lượng: `2` | Cập nhật đúng tổng tiền, lưu dữ liệu vào CSDL | Đạt (Pass) |
| TC02 | TM-05 | 1. Nhập số lượng sản phẩm vượt quá số lượng tồn kho<br>2. Bấm cập nhật giỏ hàng | Tồn kho: `5`<br>Nhập: `10` | Hiển thị thông báo lỗi, không cho phép mua vượt tồn kho | Đạt (Pass) |
| TC03 | TM-07 | 1. Truy cập trang "Đơn hàng của tôi"<br>2. Chọn đơn hàng có trạng thái "Chờ xác nhận"<br>3. Bấm "Hủy đơn" | Mã đơn: `DH101` | Hủy đơn hàng thành công và hệ thống hoàn lại tồn kho | Đạt (Pass) |
| TC04 | TM-13 | 1. Đăng nhập Admin ➔ Vào trang Quản lý đơn hàng<br>2. Đổi trạng thái từ "Chờ xác nhận" ➔ "Đang giao"<br>3. Thử đổi ngược lại về "Chờ xác nhận" | Mã đơn: `DH101` | Chuyển trạng thái thành công; hệ thống chặn không cho đi ngược quy trình | Đạt (Pass) |