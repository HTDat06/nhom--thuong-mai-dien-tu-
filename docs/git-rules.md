# Quy tắc làm việc với Git của nhóm

## 1. Quy định về Nhánh (Branch)
- `main`: Nhánh chạy sản phẩm chính thức (chỉ merge từ `develop`).
- `develop`: Nhánh tích hợp code chính của nhóm.
- Nhánh tính năng/tài liệu: `docs/ten-chuc-nang` hoặc `feature/ten-chuc-nang`.

## 2. Quy định về Commit Message
Cú pháp: `<type>: <mô tả ngắn gọn bằng tiếng Việt không dấu>`
- `docs:` Thêm/sửa tài liệu.
- `feat:` Thêm tính năng mới.
- `fix:` Sửa lỗi code.

## 3. Quy trình Pull Request (PR)
- Tạo PR gửi vào nhánh `develop`.
- Yêu cầu ít nhất 1 thành viên review và **Approve** trước khi gộp (Merge).
- Dán link PR vào thẻ Trello tương ứng.
