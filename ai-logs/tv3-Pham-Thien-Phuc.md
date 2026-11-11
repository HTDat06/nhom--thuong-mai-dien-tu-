
### [AI-01] Hỗ trợ công việc ngày thứ nhất

- Ngày / Người dùng: [Ngày thực tế] / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: [Phân tích yêu cầu / Lập kế hoạch / Thiết kế]
- Task / Commit / PR: [Task thực tế] / Chưa xác nhận
- Mục đích: Sử dụng AI để hỗ trợ giải quyết công việc được giao trong ngày đầu tiên của đồ án.
- Prompt chính: [Điền câu hỏi thực tế đã sử dụng AI trong ngày thứ nhất.]
- Kết quả AI trả về: [Tóm tắt kết quả AI đã hỗ trợ.]
- Đánh giá: Chưa bổ sung vì cần đối chiếu với hoạt động thực tế ngày thứ nhất.
- Đã chỉnh sửa gì: [Điền nội dung đã thay đổi sau khi tham khảo AI.]
- Cách kiểm chứng: Đối chiếu kết quả với yêu cầu đồ án và trao đổi với các thành viên trong nhóm.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 60%
- Điều học được: Cần cung cấp đầy đủ yêu cầu và bối cảnh để AI đưa ra hướng hỗ trợ phù hợp.

---

### [AI-02] Hỗ trợ xây dựng layout chung bằng ReactJS

- Ngày / Người dùng: 2026-11-10 / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Thiết kế, Lập trình
- Task / Commit / PR: Dựng layout chung / Chưa xác nhận
- Mục đích: Tìm hiểu cách tổ chức cấu trúc thư mục và xây dựng giao diện dùng chung cho website thương mại điện tử bằng ReactJS.
- Prompt chính (tóm tắt nội dung đã hỏi): "Tôi là TV3 – Frontend Lead của đồ án thương mại điện tử, sử dụng Node.js và ReactJS. Hãy hướng dẫn xây dựng layout chung gồm Header, thanh danh mục, Footer và responsive cơ bản."
- Kết quả AI trả về: AI đề xuất chia giao diện thành các component tái sử dụng như Header, Navbar, Footer, MainLayout và trang Home. Đồng thời hướng dẫn tổ chức thư mục ReactJS và CSS responsive.
- Đánh giá: Đúng một phần – hướng tổ chức component phù hợp, tuy nhiên cần điều chỉnh theo giao diện và yêu cầu thực tế của nhóm.
- Đã chỉnh sửa gì: Điều chỉnh cấu trúc component theo dự án; không triển khai chức năng đăng nhập theo phạm vi công việc hiện tại.
- Cách kiểm chứng: Chạy thử giao diện ReactJS, kiểm tra các component được hiển thị và rà soát kích thước màn hình.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 50%.
- Điều học được: Nên chia giao diện thành các component nhỏ để dễ tái sử dụng, chỉnh sửa và bảo trì.

---

### [AI-03] Hỗ trợ phát triển trang chủ và kiểm tra Database

- Ngày / Người dùng: 2026-11-11 / Phạm Thiên Phúc
- Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Lập trình, Kiểm thử
- Task / Commit / PR: [TM-01] Trang chủ và kiểm tra phần Database của TV4 / Chưa xác nhận
- Mục đích: Hỗ trợ xây dựng trang chủ website linh kiện máy tính và kiểm tra khả năng tích hợp phần Database do thành viên TV4 thực hiện.
- Prompt chính (tóm tắt nội dung đã hỏi): "Tôi là Frontend Lead của website thương mại điện tử linh kiện máy tính. Hãy hướng dẫn xây dựng trang chủ gồm linh kiện mới, danh mục sản phẩm và ProductCard có thể tái sử dụng. Đồng thời hướng dẫn kiểm tra migration và seeder của TV4."
- Kết quả AI trả về: AI đề xuất tổ chức trang chủ thành các khu vực hiển thị sản phẩm, danh mục và component ProductCard. Đối với Database, AI hướng dẫn kiểm tra migration, seeder, package.json và cấu hình Sequelize trước khi thực hiện kiểm thử.
- Đánh giá: Đúng một phần – hướng phát triển trang chủ phù hợp. Tuy nhiên, phần Database chưa thể kiểm thử vì thư mục nhận được mới có README.md, chưa có đầy đủ mã nguồn Backend và package.json.
- Đã chỉnh sửa gì: Xác định các phần cần kiểm tra khi nhận mã nguồn Backend; đề nghị TV4 push đầy đủ package.json, migrations, seeders, models và cấu hình Database.
- Cách kiểm chứng: Kiểm tra cấu trúc thư mục dự án và thử chạy lệnh `npx sequelize-cli db:migrate`. Lệnh chưa chạy thành công do Sequelize CLI không tìm thấy package `sequelize`.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 50%.
- Điều học được: Trước khi kiểm thử Database cần đảm bảo có đầy đủ mã nguồn, dependencies và cấu hình kết nối. Không nên kết luận migration đúng hay sai khi chưa thực thi được.

