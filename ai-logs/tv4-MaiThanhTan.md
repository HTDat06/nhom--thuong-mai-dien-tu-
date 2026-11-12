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

[AI-04] Đối chiếu Migration với ERD

- Ngày / Người dùng: 2026-11-12 / Mai Thanh Tân
- Công cụ: Claude (Claude Sonnet 5.5)
- Giai đoạn: Phát triển | Database
- Task / Commit / PR: [DB] ERD / nhánh `docs/erd-final` / commit `docs: erd final`
- Mục đích: Sử dụng AI để so sánh cấu trúc Migration với ERD, phát hiện những điểm chưa thống nhất và điều chỉnh để tài liệu thiết kế, Migration và CSDL khớp nhau.
- Prompt chính: “So sánh Migration với ERD đã giống nhau chưa”; “Kiểm tra lại các bảng trong Migration”; “Sửa lại bảng mô tả cho khớp với Migration”; “Ghi code DBML để làm ERD”; “Sửa allowNull thành NOT NULL cho giống mô tả”; “Sửa lại bảng mô tả theo SQL Server”.
- Kết quả AI trả về: Danh sách các điểm chưa khớp giữa Migration và ERD, hướng dẫn bổ sung cột `price`, `subtotal` cho `order_items`, bổ sung CHECK và INDEX, điều chỉnh `role` trong `Users`, sửa `quality` thành `quantity`, cập nhật mô tả 6 bảng và code DBML để xuất ERD.
- Đánh giá: Đúng phần lớn. AI giúp phát hiện các điểm chưa thống nhất, tuy nhiên ban đầu có một số hướng dẫn theo MySQL. Sau khi xác nhận sử dụng SQL Server, AI đã điều chỉnh nội dung phù hợp. Các thay đổi cần được kiểm tra lại bằng SSMS.
- Đã chỉnh sửa gì: Đối chiếu tên bảng, tên cột, kiểu dữ liệu, khóa chính, khóa ngoại và các ràng buộc giữa Migration với ERD. Bổ sung `role`, sửa `quality` thành `quantity`, cập nhật `price`, `subtotal`, CHECK, INDEX và điều chỉnh các cột `allowNull` cho phù hợp với mô tả thiết kế.
- Cách kiểm chứng: Chạy `db:migrate:undo` rồi `db:migrate`, sử dụng các truy vấn trong SSMS để kiểm tra cấu trúc bảng, khóa ngoại, CHECK và INDEX; sau đó so sánh với ERD xuất từ dbdiagram.io và kiểm tra lại bằng `db:seed:all`.
- Tỷ lệ mã AI còn giữ lại (ước lượng): 80%.
- Điều học được: Biết cách đối chiếu Migration với ERD, kiểm tra sự thống nhất giữa thiết kế và CSDL thực tế, hiểu vai trò của PK, FK, CHECK, INDEX và cách Sequelize tạo cấu trúc SQL Server. Khi sử dụng AI cần nêu rõ hệ quản trị CSDL ngay từ đầu để nhận được hướng dẫn chính xác hơn.
