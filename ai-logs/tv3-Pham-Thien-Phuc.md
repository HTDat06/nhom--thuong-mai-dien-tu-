
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
- https://github.com/HTDat06/nhom-5v3s-thuong-mai-dien-tu-/pull/47
- 
### [AI-04] Hỗ trợ xây dựng giao diện đăng ký và đăng nhập

- **Ngày / Người dùng:** 12-11-2026 / Phạm Thiên Phúc
- **Công cụ:** ChatGPT (GPT-6)
- **Giai đoạn:** Lập trình, Kiểm thử
- **Task / Commit / PR:** [TM-04] Xây dựng giao diện đăng ký, đăng nhập
- **Mục đích:** Sử dụng AI để tham khảo cách xây dựng giao diện đăng ký, đăng nhập bằng ReactJS, tổ chức các component riêng biệt và xử lý dữ liệu nhập từ biểu mẫu. Đồng thời đảm bảo giao diện thống nhất với thiết kế chung của website thương mại điện tử linh kiện máy tính.
- **Prompt chính:** "Tôi đang xây dựng website thương mại điện tử linh kiện máy tính bằng ReactJS. Hãy hướng dẫn tạo giao diện đăng ký và đăng nhập gồm các trường thông tin cần thiết, sử dụng component riêng cho từng trang. Hướng dẫn cách kiểm tra dữ liệu nhập, hiển thị thông báo khi thông tin không hợp lệ và thiết kế CSS sao cho giao diện phù hợp với website."
- **Kết quả AI trả về:** AI đề xuất xây dựng hai component Login và Register riêng biệt, sử dụng các trường input để nhận thông tin người dùng, kết hợp xử lý sự kiện onChange và onSubmit để kiểm tra dữ liệu. Ngoài ra, AI hướng dẫn sử dụng CSS để định dạng biểu mẫu và hiển thị thông báo khi người dùng nhập thiếu hoặc sai thông tin.
- **Đánh giá:** Đúng một phần – hướng xây dựng component riêng và xử lý biểu mẫu phù hợp với yêu cầu, tuy nhiên giao diện và một số đoạn code cần điều chỉnh để phù hợp với cấu trúc dự án và thiết kế chung của nhóm.
- **Đã chỉnh sửa gì:** Điều chỉnh màu sắc, kích thước biểu mẫu, khoảng cách giữa các trường nhập liệu và nút chức năng. Chỉnh sửa bố cục để phù hợp với phong cách website thương mại điện tử linh kiện máy tính.
- **Cách kiểm chứng:** Chạy thử ứng dụng ReactJS; kiểm tra giao diện đăng ký và đăng nhập; thử nhập thông tin hợp lệ, bỏ trống trường bắt buộc và nhập dữ liệu không hợp lệ để kiểm tra thông báo.
- **Tỷ lệ nội dung AI còn giữ lại (ước lượng):** 40%.
- **Điều học được:** Biết cách tổ chức component trong ReactJS, xử lý dữ liệu biểu mẫu thông qua onChange và onSubmit, kiểm tra dữ liệu đầu vào và sử dụng CSS để xây dựng giao diện đăng ký, đăng nhập.
