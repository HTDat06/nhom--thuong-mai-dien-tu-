| Mục | Thông tin |
| --- | --- |
| Họ tên, MSSV | Nguyễn Chí Hải – 0306241276 |
| Nhóm, đề tài | Nhóm 8 – Thương mại điện tử (Website bán linh kiện máy tính) |
| Vai trò | TV1 – LE (Leader / Scrum Master) |
| Công cụ AI dùng | Gemini / ChatGPT |

### [AI-01] Brainstorm chức năng Must/Could và rủi ro của đề tài
- Ngày / Người dùng: 2026-11-09 / Nguyễn Chí Hải
- Công cụ: Gemini
- Giai đoạn: Phân tích yêu cầu
- Task / Commit / PR: [DOC] Đề cương / `docs: de cuong ban dau` / [PR #1]
- Mục đích: Phân loại danh sách chức năng theo mức độ ưu tiên (Must-have / Could-have) và xác định 3 rủi ro lớn nhất cùng cách phòng tránh cho đồ án website thương mại điện tử trong 3 tuần với 5 thành viên
- Prompt chính (nguyên văn hoặc link chia sẻ hội thoại): "Với đề tài website thương mại điện tử, nhóm 5 người, 3 tuần, hãy liệt kê chức năng theo mức Must/Could và 3 rủi ro lớn nhất".
- Kết quả AI trả về (tóm tắt): AI đề xuất bảng phân chia các nhóm chức năng bắt buộc (Xác thực, Sản phẩm, Giỏ hàng, Đặt hàng, Quản trị) và tùy chọn (Đánh giá, Lịch sử đơn, Bộ lọc nâng cao), đồng thời chỉ ra 3 rủi ro chính (Git conflict, Trễ tiến độ, Lỗi CSDL/Transaction).
- Đánh giá: Đúng và sát thực tế – các nhóm chức năng bám sát đặc tả yêu cầu của giảng viên, các rủi ro phản ánh đúng khó khăn khi làm việc nhóm 5 người.
- Đã chỉnh sửa gì: Giữ nguyên các nhóm chức năng Must-have khớp với mã chức năng `TM-01` đến `TM-16` của đề tài; bổ sung cụ thể vai trò kiểm duyệt PR của TV5 và quy tắc Trello của nhóm vào phần cách phòng tránh rủi ro.
- Cách kiểm chứng: Đối chiếu danh sách chức năng bắt buộc trong tài liệu đặc tả 6 đề tài mẫu; thống nhất phạm vi trong buổi họp nhóm Ngày 1 và trình giảng viên duyệt đề cương.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 65%
- Điều học được: Nêu rõ ràng ràng buộc về thời gian (3 tuần) và nhân sự (5 người) ngay trong prompt giúp AI phân loại mức độ ưu tiên (Must/Could) chuẩn xác và khả thi hơn.
### [AI-02] Hỗ trợ thiết kế Use Case Diagram và đặc tả 3 Use Case
Ngày / Người dùng: 2026-11-10 / Nguyễn Chí Hải
Công cụ: ChatGPT (GPT-6)
- Giai đoạn: Thiết kế
Task / Commit / PR: [DOC] Use case / [Commit ID] / [PR #...]
- Mục đích: Hỗ trợ phân tích các chức năng chính của website thương mại điện tử bán linh kiện máy tính, xây dựng Use Case Diagram và đặc tả 3 chức năng Đặt hàng, Quản lý sản phẩm, Đăng nhập.
- Prompt chính (nguyên văn hoặc link chia sẻ hội thoại):
"Tôi đang làm trưởng nhóm TV1 cho đồ án website thương mại điện tử bán linh kiện máy tính. Hãy giúp tôi xây dựng Use Case Diagram gồm 3 tác nhân Khách vãng lai, Khách hàng và Quản trị. Đồng thời đặc tả 3 Use Case chính gồm Đặt hàng, Quản lý sản phẩm và Đăng nhập, trình bày rõ tác nhân, tiền điều kiện, luồng chính và luồng phụ. Hãy chú ý các trường hợp ngoại lệ như sản phẩm hết hàng và người dùng chưa đăng nhập."
- Kết quả AI trả về (tóm tắt): AI đề xuất sơ đồ Use Case với 3 tác nhân chính, xác định các chức năng tương ứng và xây dựng nội dung đặc tả cho 3 Use Case. AI cũng gợi ý các trường hợp ngoại lệ như hết hàng, thông tin đăng nhập không hợp lệ và người dùng chưa đăng nhập.
- Đánh giá: Đúng một phần – AI hỗ trợ xây dựng cấu trúc sơ đồ và đặc tả khá đầy đủ, tuy nhiên cần kiểm tra lại quyền hạn của từng tác nhân và tính phù hợp với yêu cầu thực tế của website.
- Đã chỉnh sửa gì:Điều chỉnh tên chức năng và nội dung đặc tả theo đề tài bán linh kiện máy tính. Rà soát lại quyền của Khách vãng lai, Khách hàng và Quản trị. Bổ sung các tình huống ngoại lệ phù hợp với quy trình đặt hàng.
- Cách kiểm chứng: Đối chiếu với tài liệu phân công chức năng và yêu cầu đề tài; kiểm tra từng tác nhân, chức năng và luồng xử lý trước khi đưa vào tài liệu docs/use-case.md.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): [50]%
- Điều học được: Cần mô tả rõ vai trò của từng tác nhân và các trường hợp ngoại lệ khi xây dựng Use Case. Không nên sử dụng nguyên bản kết quả AI mà cần đối chiếu với yêu cầu của hệ thống.

### [AI-03] Hỗ trợ thiết kế Sequence Diagram đặt hàng và biên bản họp 02
Ngày / Người dùng: 2026-11-11 / Nguyễn Chí Hải
Công cụ: Gemini
- Giai đoạn: Thiết kế, Tài liệu
Task / Commit / PR: [DOC] Sequence diagram, [DOC] Biên bản họp 02 / [Commit ID] / [PR #...]
- Mục đích: Hỗ trợ xây dựng Sequence Diagram mô tả quy trình đặt hàng trên website bán linh kiện máy tính, thể hiện sự tương tác giữa Khách hàng, Giao diện Website, OrderController, OrderService và Cơ sở dữ liệu. Đồng thời hỗ trợ soạn biên bản họp nhóm số 02.
-nPrompt chính (nguyên văn hoặc link chia sẻ hội thoại):
"Tôi là TV1, trưởng nhóm đồ án website thương mại điện tử bán linh kiện máy tính. Hãy tạo Sequence Diagram cho quy trình đặt hàng bằng Mermaid, gồm Khách hàng, Giao diện Website, OrderController, OrderService và Cơ sở dữ liệu. Sơ đồ cần thể hiện kiểm tra sản phẩm, tồn kho, tạo đơn hàng, lưu chi tiết đơn hàng và sử dụng Transaction, Commit, Rollback khi có lỗi. Ngoài ra, hãy giúp tôi soạn biên bản họp nhóm số 02 gồm nội dung báo cáo tiến độ của 5 thành viên và công việc cần hoàn thành đến thứ 6."
- Kết quả AI trả về (tóm tắt): AI tạo mã Mermaid mô tả trình tự đặt hàng, bao gồm kiểm tra sản phẩm và tồn kho, tạo đơn hàng, lưu chi tiết đơn hàng, cập nhật số lượng tồn kho và xử lý Transaction. AI cũng đề xuất nội dung biên bản họp số 02 với phần thành viên tham gia, báo cáo tiến độ, phân công người trình bày Mốc 1 và công việc tiếp theo.
- Đánh giá: Đúng một phần – Sơ đồ đã thể hiện được luồng xử lý chính và các trường hợp lỗi. Tuy nhiên, cần kiểm tra lại thứ tự xử lý và tên các thành phần so với kiến trúc thực tế của hệ thống. Biên bản họp cần cập nhật theo kết quả báo cáo thực tế của từng thành viên.
- Đã chỉnh sửa gì: Điều chỉnh tên các thành phần trong sơ đồ theo cấu trúc hệ thống. Bổ sung nhánh xử lý khi sản phẩm không hợp lệ, hết hàng hoặc xảy ra lỗi khi lưu dữ liệu. Chỉnh sửa biên bản họp theo nhiệm vụ của từng thành viên và bổ sung công việc cần hoàn thành đến thứ 6.
- Cách kiểm chứng:Đối chiếu Sequence Diagram với quy trình đặt hàng của hệ thống và kiến trúc Controller – Service – Database. Kiểm tra mã Mermaid trên Mermaid Live Editor. Đối chiếu biên bản họp với tiến độ thực tế và kết quả trao đổi trong cuộc họp nhóm.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): [75]%
- Điều học được: AI có thể hỗ trợ tạo sơ đồ và tài liệu nhanh chóng, những người phát triển cần hiểu rõ luồng nghiệp vụ, kiểm tra Transaction và cập nhật nội dung theo tình hình thực tế của nhóm.


### [AI-04] Tổng hợp tài liệu Mốc 1 và lên cấu trúc phân công trình bày
- Ngày / Người dùng: 2026-11-12 / Nguyễn Chí Hải
- Công cụ: Gemini
- Giai đoạn: Tài liệu
- Task / Commit / PR: [DOC] Chuẩn bị Mốc 1 / `docs: tai lieu tom tat moc 1` / [PR #...]
- Mục đích: Hoàn thiện tệp báo cáo tổng hợp Mốc 1 (`docs/moc-1.md`) bám sát đặc tả đề tài Thương mại điện tử, đồng thời cấu trúc thời lượng trình bày 10 phút cho 5 thành viên trong nhóm.
- Prompt chính (nguyên văn hoặc link chia sẻ hội thoại): "Gợi ý cấu trúc báo cáo Mốc 1 cho website thương mại điện tử gồm các phần Giới thiệu, Công nghệ (Node.js, Express, React, SQL Server), Kiến trúc, ERD, User Story, Kế hoạch Sprint S2 và gợi ý phân bổ thời gian thuyết trình 10 phút cho 5 thành viên."
- Kết quả AI trả về (tóm tắt): AI cung cấp khung nội dung chi tiết cho báo cáo tổng hợp và kịch bản phân chia thời lượng trình bày (mỗi thành viên 2 phút).
- Đánh giá: Đúng và rất sát yêu cầu – giúp trưởng nhóm nhanh chóng hoàn thiện tài liệu nộp và lên lịch điều phối công việc cho nhóm trong ngày.
- Đã chỉnh sửa gì: Chuẩn hóa lại các bảng Markdown, đồng bộ tên công nghệ thực tế của nhóm (SQL Server, Sequelize, Node.js + Express) và bổ sung mã chức năng (TM-xx) vào kế hoạch Sprint 2.
- Cách kiểm chứng: Kiểm tra hiển thị Markdown trên GitHub; đối chiếu nội dung báo cáo với hướng dẫn chi tiết Ngày 4 của giảng viên.
- Tỷ lệ nội dung AI còn giữ lại (ước lượng): 80%
