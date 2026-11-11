# AI log – TV5 – Hoàng Tiến Đạt

| Mục | Thông tin |
| --- | --- |
| Họ tên, MSSV | Hoàng Tiến Đạt – 0306241272 |
| Nhóm, đề tài | Nhóm 6 – Thương mại điện tử |
| Vai trò | TV5 – TE (Tester) |
| Công cụ AI dùng | Gemini |

## Bảng tổng hợp

| Mã | Ngày | Giai đoạn | Nội dung | Commit / PR |
| --- | --- | --- | --- | --- |
| AI-01 | 09/11 | Kiểm thử | Tạo 5 test cases mẫu cho TM-05 Giỏ hàng | PR #32 |
| AI-02 | 10/11 | Tài liệu | Cập nhật README tách biệt Frontend và Backend | PR #35 |
| AI-03 | 11/11 | Kiểm thử | Thêm Test Cases TM-04 và Checklist Review PR Bảo mật/Migration | PR #55 |


---

### [AI-01] Tạo 5 test cases mẫu cho TM-05 Giỏ hàng
- Ngày / Người dùng: 2026-11-09 / Hoàng Tiến Đạt
- Công cụ: Gemini
- Giai đoạn: Kiểm thử
- Task / Commit / PR: [TEST] Mẫu test case / `docs: mau test case` / PR #32
- Mục đích: Tạo 5 test case chuẩn kiểm thử chức năng TM-05 Giỏ hàng khớp với tiêu chí chấp nhận.
- Prompt chính: "Nhờ AI tạo 5 test case mẫu cho TM-05 Giỏ hàng; tự sửa cho khớp tiêu chí chấp nhận."
- Kết quả AI trả về (tóm tắt): AI tạo ra 5 test case kiểm tra thêm sản phẩm, sửa số lượng, xóa khỏi giỏ, chặn mua vượt tồn kho và tính tổng tiền tự động.
- Đánh giá: Đúng – Phủ đầy đủ luồng chính (Happy Path) và luồng ngoại lệ.
- Đã chỉnh sửa gì: Chỉnh sửa lại định dạng bảng Markdown cho đồng bộ với file `docs/test-cases.md`.
- Cách kiểm chứng: Đối chiếu tiêu chí chấp nhận trong Use Case TM-05; PR đã được duyệt và Merge vào develop.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 60%
- Điều học được: Cần yêu cầu AI xuất ra đúng định dạng bảng Markdown ngay trong prompt để tiết kiệm thời gian format lại.

---

### [AI-02] Cập nhật README hướng dẫn cài đặt riêng Frontend và Backend
- Ngày / Người dùng: 2026-11-10 / Hoàng Tiến Đạt
- Công cụ: Gemini
- Giai đoạn: Tài liệu
- Task / Commit / PR: [DOCS] Cập nhật README / `docs: cap nhat readme cai dat fe va be` / PR #35
- Mục đích: Viết lại hướng dẫn cài đặt và khởi chạy dự án tách biệt rõ ràng giữa Frontend (`client`) và Backend (`server`).
- Prompt chính: "Hướng dẫn cài đặt và chạy dự án web thương mại điện tử với Frontend và Backend làm riêng biệt."
- Kết quả AI trả về (tóm tắt): Khung tài liệu README chi tiết các lệnh `cd`, `npm install`, cấu hình `.env` cho 2 thư mục riêng biệt kèm cổng chạy local (3000 và 5000).
- Đánh giá: Đúng – Cấu trúc rõ ràng, giúp thành viên mới dễ dàng cài đặt trên máy sạch.
- Đã chỉnh sửa gì: Bổ sung thêm bảng danh sách 15 chức năng (TM-01 đến TM-15) và liên kết tới tài liệu `docs/use-cases.md`.
- Cách kiểm chứng: Thử nghiệm clone dự án về máy sạch và thực hành cài đặt theo đúng hướng dẫn trong README.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 70%
- Điều học được: Việc phân tách rõ quy trình cài đặt Client/Server trong README giúp giảm thiểu lỗi môi trường khi làm việc nhóm.

---

### [AI-03] Thêm Test Cases TM-04 và Checklist Review PR Bảo mật/Migration
- Ngày / Người dùng: 2026-11-11 / Hoàng Tiến Đạt
- Công cụ: Gemini
- Giai đoạn: Kiểm thử
- Task / Commit / PR: [TEST] Kiểm tra môi trường / `docs: bo sung bo test cases TM-04 dang ky va dang nhap` / PR #55
- Mục đích: Xây dựng bộ test cases cho chức năng Đăng ký/Đăng nhập (TM-04) và lập checklist review code bảo mật, CSDL SQL Server.
- Prompt chính: "Nhờ AI liệt kê lỗi bảo mật hay gặp ở chức năng đăng ký và tạo test cases cho TM-04; dùng làm checklist review."
- Kết quả AI trả về (tóm tắt): Đưa ra 5 test cases phủ luồng TM-04 (kiểm tra băm Bcrypt, kiểm tra validate dữ liệu đầu vào) và checklist review Migration CSDL.
- Đánh giá: Đúng – Đáp ứng đầy đủ tiêu chí chấp nhận và tiêu chuẩn an toàn thông tin.
- Đã chỉnh sửa gì: Bổ sung thêm các lệnh PowerShell `Invoke-RestMethod` kèm khối `try-catch` để test tự động các mã lỗi HTTP 400.
- Cách kiểm chứng: Chạy thực tế bộ lệnh test API trên PowerShell local; review và để lại bình luận Approve trên PR của đồng đội.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 75%
- Điều học được: Khi test API trên PowerShell, cần dùng khối `try-catch` để đọc nội dung lỗi chi tiết trong Response Stream khi HTTP Status khác 200.


