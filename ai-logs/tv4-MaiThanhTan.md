1.Yêu cầu xác định mối quan hệ giữa các bảng
2.Tạo code để vẽ sơ đồ trên dbdiagram.io

### [AI-02] Hoàn thiện và chuẩn hóa ERD đến 3NF

- **Ngày / Người dùng:** 2026-11-10 / Mai Thanh Tân
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

### [AI-03] Xây dựng Migration và Seed

- **Ngày / Người dùng:** 2026-11-11 / Mai Thanh Tân
- **Công cụ:** ChatGPT (GPT-6)
- **Giai đoạn:** Phát triển | Database
- **Task / Commit / PR:** [DB] Migration & Seed
- **Mục đích:** Tạo Migration và Seed cho website bán linh kiện máy tính bằng Sequelize 6 và SQL Server.
- **Prompt chính:** "Viết code Migration 6 bảng và Seed dữ liệu mẫu cho website bán linh kiện máy tính."
- **Kết quả AI trả về:** Code Migration tạo 6 bảng và Seed gồm 5 danh mục, 30 sản phẩm, 1 admin, 10 khách hàng và 10 đơn hàng.
- **Đánh giá:** Đúng một phần, cần chạy thử và kiểm tra trên SQL Server.
- **Đã chỉnh sửa gì:** Thay dữ liệu bán sách thành linh kiện máy tính, bổ sung role và thống nhất trường quantity.
- **Cách kiểm chứng:** Chạy `db:migrate`, `db:seed:all` và kiểm tra dữ liệu trong SSMS.
- **Tỷ lệ mã AI còn giữ lại (ước lượng):** 60%.
- **Điều học được:** Biết cách sử dụng Sequelize Migration, Seed, khóa ngoại và transaction.

###[AI-04] Kiểm tra lại ERD (đối chiếu Migration với mô tả bảng)

- Ngày / Người dùng: 2026-11-12 / Mai Thanh Tân
- Công cụ: Claude (Claude Sonnet 5.5)
- Giai đoạn: Phát triển | Database
- Task / Commit / PR: [DB] ERD / nhánh docs/erd-final / commit docs: erd final
- Mục đích: Dùng AI đối chiếu file Migration với bảng mô tả cấu trúc CSDL, sửa chỗ lệch, hoàn thiện mo-ta-bang.md, tạo code DBML để xuất erd-final.png và chuẩn bị bài trình bày ERD 2 phút.
- Prompt chính: “So sánh migration này với mô tả bảng đã giống nhau chưa”; “Sửa lại file js, thêm những gì còn thiếu”; “Sửa lại bảng mô tả cho khớp với migration”; “Ghi code dbdiagram để làm ERD”; “Sửa allowNull thành NOT NULL cho giống mô tả”; “Sửa lại bảng mô tả theo SQL Server”.
- Kết quả AI trả về: Bảng liệt kê các điểm lệch giữa Migration và mô tả (order_items thiếu price, subtotal; thiếu 5 CHECK và 3 index; Users có thêm role; mô tả ghi sai quality), đoạn code bổ sung cho Migration, file mo-ta-bang.md đã cập nhật, code DBML cho 6 bảng, 4 truy vấn kiểm tra trên SQL Server và kịch bản trình bày 2 phút.
- Đánh giá: Đúng phần lớn. Các điểm lệch đều đối chiếu lại được với hai file gốc. Lần đầu AI ghi chú theo MySQL (CHECK chỉ chạy từ MySQL 8.0.16), chỉ sửa sau khi mình nói CSDL là SQL Server. AI không truy cập được CSDL thật nên phải tự kiểm tra bằng SSMS.
- Đã chỉnh sửa gì: Giữ nguyên code Migration gốc, chỉ thêm cột price, subtotal, các CHECK và index. Đổi 4 cột allowNull: true thành false cho khớp mô tả. Trong mô tả: đổi quality thành quantity, bổ sung role, ghi rõ NOT NULL / DEFAULT / ON DELETE, bỏ ghi chú MySQL, đổi kiểu dữ liệu sang NVARCHAR, NVARCHAR(MAX), IDENTITY(1,1) và thêm mục “Quyết định thiết kế chính”.
- Cách kiểm chứng: Chạy db:migrate:undo rồi db:migrate, dùng 4 truy vấn trong SSMS để kiểm tra cột, khóa ngoại, CHECK và index, sau đó so sánh với ERD xuất từ dbdiagram.io. Kiểm tra thêm db:seed:all vẫn chạy được sau khi 4 cột chuyển sang NOT NULL.
- Tỷ lệ mã AI còn giữ lại (ước lượng): 80%.
- Điều học được: Migration vẫn viết bằng JavaScript, Sequelize tự dịch sang SQL Server theo dialect; allowNull: false chính là NOT NULL; cách đối chiếu Migration với tài liệu thiết kế và với CSDL thật; vì sao tách order_items và lưu giá lúc mua. Khi hỏi AI cần nói rõ môi trường (SQL Server) ngay từ đầu để tránh câu trả lời theo hệ quản trị khác.
