[AI-01]
1.Yêu cầu xác định mối quan hệ giữa các bảng
2.Tạo code để vẽ sơ đồ trên dbdiagram.io
[AI-02] Hoàn thiện và chuẩn hóa ERD đến 3NF

- **Ngày / Người dùng:** 2026-11-10 / Nguyễn Văn A
- **Công cụ:** ChatGPT (GPT-6)
- **Giai đoạn:** Thiết kế | Tài liệu
- **Task / Commit / PR:** [DB] ERD v2 / Commit: docs: erd v2 chuan hoa 3nf
- **Mục đích:** Kiểm tra và hoàn thiện sơ đồ cơ sở dữ liệu gồm 6 bảng Users, categories, products, cart_items, orders, order_items. Bổ sung khóa chính, khóa ngoại, ràng buộc dữ liệu và chỉ mục INDEX theo yêu cầu.
- **Prompt chính (nguyên văn hoặc link chia sẻ hội thoại):** "Đây là cấu trúc cơ sở dữ liệu gồm 6 bảng Users, categories, products, cart_items, orders, order_items. Hãy kiểm tra chuẩn hóa ERD đến 3NF, xác định khóa chính, khóa ngoại, ràng buộc email duy nhất, tồn kho không âm. Bổ sung các chỉ mục products(product_name), products(category_id), orders(user_id, status). Viết tài liệu mô tả các bảng gồm tên bảng, cột, kiểu dữ liệu và ràng buộc."
- **Kết quả AI trả về (tóm tắt):** AI hỗ trợ kiểm tra cấu trúc 6 bảng, xác định PK, FK, các quan hệ 1-N; đề xuất UNIQUE cho email, CHECK cho giá và tồn kho; bổ sung 3 chỉ mục INDEX; tạo code DBML và nội dung tài liệu mô tả bảng.
- **Đánh giá:** Đúng một phần. AI hỗ trợ tốt việc thiết kế DBML và đề xuất ràng buộc. Tuy nhiên, kết luận đạt 3NF ban đầu chưa đủ cơ sở vì chưa kiểm tra đầy đủ phụ thuộc hàm và quy tắc nghiệp vụ.
- **Đã chỉnh sửa gì:** Giữ nguyên 6 bảng theo yêu cầu; bổ sung UNIQUE cho email, NOT NULL cho khóa ngoại, 3 chỉ mục INDEX; rà soát thuộc tính quality và đề xuất đổi thành quantity; kiểm tra subtotal và total_amount.
- **Cách kiểm chứng:** Đối chiếu ERD với danh sách bảng và yêu cầu nghiệp vụ; kiểm tra PK, FK, quan hệ 1-N, các chỉ mục và ràng buộc; kiểm tra nội dung tài liệu mô tả bảng.
- **Tỷ lệ mã AI còn giữ lại (ước lượng):** 80% đối với phần DBML được sử dụng và điều chỉnh; chưa tính là mã SQL đã triển khai thực tế.
- **Điều học được:** Hiểu rõ hơn cách thiết kế khóa chính, khóa ngoại, ràng buộc và chỉ mục. Biết rằng muốn xác nhận đạt 3NF cần kiểm tra phụ thuộc hàm, không thể chỉ dựa vào sơ đồ ERD.
