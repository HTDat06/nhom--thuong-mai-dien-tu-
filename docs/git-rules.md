```markdown
# Quy tắc làm việc với Git của nhóm

## 1. Quy định về Nhánh (Branch)
- `main`: Nhánh chạy sản phẩm chính thức (khóa push trực tiếp, chỉ merge từ `develop` qua PR khi chốt Mốc).
- `develop`: Nhánh tích hợp code chính của nhóm (khóa push trực tiếp, mọi thay đổi phải đi qua PR).
- Nhánh làm việc cá nhân (tạo từ `develop`):
  - Tính năng: `feature/TM-<mã>-<tên-ngắn>` (VD: `feature/TM-05-gio-hang`)
  - Sửa lỗi: `fix/TM-<mã>-<mô-tả-ngắn>` (VD: `fix/TM-04-loi-dang-nhap`)
  - Tài liệu: `docs/<nội-dung>` (VD: `docs/use-case`, `docs/git-rules`)

## 2. Quy định về Commit Message
Cú pháp: `<type>: <mô tả ngắn gọn bằng tiếng Việt không dấu>` (có thể kèm mã chức năng `<type>(TM-xx): ...`)
- `feat:` Thêm tính năng mới (VD: `feat(TM-05): them api gio hang`)
- `fix:` Sửa lỗi code (VD: `fix(TM-04): sua loi xac thuc token`)
- `docs:` Thêm/sửa tài liệu, README, AI log (VD: `docs: cap nhat git-rules`)
- `chore:` Cập nhật cấu hình, CSDL/Prisma, dọn dẹp thư mục (VD: `chore: cap nhat seed du lieu`)
- `test:` Bổ sung test case hoặc script kiểm thử

## 3. Quy trình Pull Request (PR) & Trello
- Luôn `git pull origin develop` trước khi tạo nhánh mới hoặc mở PR.
- Tạo PR gửi vào nhánh `develop`, đảm bảo không đẩy nhầm tệp `.env` hoặc `node_modules/`.
- Yêu cầu ít nhất **1 thành viên khác** review và **Approve** trước khi gộp (Merge).
- Sau khi Merge xong, bấm **Delete branch** ngay trên GitHub để tránh rác nhánh.
- Dán link PR vào thẻ Trello tương ứng và cập nhật trạng thái thẻ.

```

---

### Lệnh cập nhật lên GitHub

Lưu ý tên tệp trong thư mục `docs/` của nhóm là **`git-rules.md`** (có chữ `s`). Sau khi dán nội dung trên vào `docs/git-rules.md` và lưu lại, bạn chạy cụm lệnh sau để đẩy lên:

```cmd
git checkout develop
git pull origin develop
git checkout -b docs/update-git-rules
git add docs/git-rules.md
git commit -m "docs: cap nhat quy tac lam viec git-rules.md"
git push -u origin docs/update-git-rules

```

Sau đó mở PR **`docs/update-git-rules` $\rightarrow$ `develop**` trên GitHub, bấm **Merge** và xóa nhánh tạm là xong.
