
### [AI-01] Hỗ trợ thiết kế wireframe giao diện website

- Ngày / Người dùng: 9-11-2026 / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Thiết kế
- Task / Commit / PR: Thiết kế wireframe 6 màn hình / Chưa có
- Mục đích: Tham khảo ý tưởng bố trí giao diện cho website thương mại điện tử, xác định các thành phần cần có trên từng màn hình trước khi tiến hành lập trình.
- Prompt chính: "Tôi là TV3 – Frontend Lead của đồ án website thương mại điện tử linh kiện máy tính. Hãy gợi ý bố cục và các thành phần cần có trong 6 màn hình giao diện để xây dựng wireframe."
- Kết quả AI trả về: AI đề xuất cách bố trí các khu vực giao diện, thành phần điều hướng, danh sách sản phẩm, thông tin sản phẩm và các chức năng cần hiển thị trên website.
- Đánh giá: Đúng một phần – các gợi ý giúp định hình bố cục ban đầu nhưng cần điều chỉnh để phù hợp với yêu cầu và thiết kế của nhóm.
- Đã chỉnh sửa gì: Sắp xếp lại các thành phần giao diện, điều chỉnh bố cục và nội dung hiển thị theo đề tài cửa hàng linh kiện máy tính.
- Cách kiểm chứng: Đối chiếu wireframe với yêu cầu đồ án và trao đổi với các thành viên trong nhóm.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 60%.
- Điều học được: Cần xác định rõ chức năng và bố cục từng màn hình trước khi thiết kế để tránh thiếu thành phần khi lập trình.

---

### [AI-02] Hỗ trợ xây dựng layout chung bằng ReactJS

- Ngày / Người dùng: 10-11-2026 / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Thiết kế, Lập trình
- Task / Commit / PR: Dựng layout chung
- Mục đích: Tìm hiểu cách tổ chức cấu trúc thư mục và xây dựng giao diện dùng chung cho website thương mại điện tử bằng ReactJS.
- Prompt chính: "Tôi là TV3 – Frontend Lead của đồ án thương mại điện tử, sử dụng Node.js và ReactJS. Hãy hướng dẫn xây dựng layout chung gồm Header, thanh danh mục, Footer và responsive cơ bản."
- Kết quả AI trả về: AI đề xuất chia giao diện thành các component tái sử dụng như Header, Navbar, Footer và MainLayout. Đồng thời hướng dẫn tổ chức thư mục ReactJS và CSS responsive.
- Đánh giá: Đúng một phần – hướng tổ chức component phù hợp, tuy nhiên cần điều chỉnh theo giao diện và yêu cầu thực tế của nhóm.
- Đã chỉnh sửa gì: Điều chỉnh cấu trúc component theo dự án; tập trung vào Header, thanh danh mục và Footer, không triển khai chức năng đăng nhập theo phạm vi công việc hiện tại.
- Cách kiểm chứng: Chạy thử giao diện ReactJS, kiểm tra các component được hiển thị và rà soát cấu trúc giao diện.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 50%.
- Điều học được: Nên chia giao diện thành các component nhỏ để dễ tái sử dụng, chỉnh sửa và bảo trì.

---

### [AI-03] Hỗ trợ phát triển trang chủ và component thẻ sản phẩm

- Ngày / Người dùng: 11-11-2026 / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Lập trình, Kiểm thử
- Task / Commit / PR: [TM-01] dựng trang chủ tĩnh
- Mục đích: Sử dụng AI để tham khảo cách xây dựng CSS Grid responsive cho trang chủ website thương mại điện tử, đồng thời tạo component thẻ sản phẩm có thể tái sử dụng cho các chức năng TM-02 và TM-03.
- Prompt chính: "Tôi đang xây dựng website thương mại điện tử bằng ReactJS. Hãy hướng dẫn tạo bố cục trang chủ gồm khối sản phẩm mới, khối sản phẩm theo danh mục và component ProductCard hiển thị ảnh, tên, giá. Gợi ý cách sử dụng CSS Grid để giao diện hiển thị tốt trên màn hình 360px và 1366px."
- Kết quả AI trả về: AI đề xuất sử dụng CSS Grid để bố trí danh sách sản phẩm, kết hợp Media Query để thay đổi số cột theo kích thước màn hình. Component ProductCard được tách riêng để hiển thị ảnh, tên và giá sản phẩm.
- Đánh giá: Đúng một phần – hướng sử dụng CSS Grid và component tái sử dụng phù hợp với yêu cầu, nhưng giao diện cần điều chỉnh thêm để thống nhất với thiết kế của nhóm.
- Đã chỉnh sửa gì: Điều chỉnh màu sắc, khoảng cách, kích thước hình ảnh và cách hiển thị thẻ sản phẩm theo thiết kế chung của nhóm. Sử dụng dữ liệu giả để hiển thị sản phẩm.
- Cách kiểm chứng: Chạy thử trang chủ ReactJS; kiểm tra giao diện ở độ rộng 360px và 1366px; kiểm tra các thẻ sản phẩm hiển thị ảnh, tên và giá.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 40%.
- Điều học được: CSS Grid kết hợp Media Query giúp xây dựng giao diện responsive; tách ProductCard thành component riêng giúp tái sử dụng giao diện và giảm trùng lặp code.
