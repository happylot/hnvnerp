Mục đích: Checklist để Sếp (Tony Phúc) duyệt trước khi sang bước 02 (Spec kỹ thuật và triển khai).

Yêu cầu chuẩn bị (phải có trước khi phê duyệt)
1. Tài liệu Project Brief (project-brief.md) đã đọc và xác nhận phù hợp.
2. Danh sách Module MVP đã thống nhất (xem Project Brief Phạm vi).
3. Danh sách credential cần cung cấp (gửi qua Gmail phuc189@gmail.com):
   - Email/land account & quyền admin cho phuc189@gmail.com hoặc email hệ thống (để gửi/nhận credential).
   - Tài khoản/mã API phần mềm kế toán/hóa đơn hiện tại (nếu có): endpoint, client_id/secret, quyền API.
   - Tài khoản lưu trữ hồ sơ (Google Drive/OneDrive/S3) và quyền folder dự án.
   - Danh sách Excel hiện có: files xuất, người liên hệ để mapping dữ liệu.
   - Truy cập tới hệ thống barcode/RFID hoặc thông tin nhà cung cấp thiết bị IoT (nếu có).
   - Thông tin nhà cung cấp (số điện thoại, email) để tích hợp mục Mua hàng.
4. Danh sách người dùng chính và vai trò mẫu (ví dụ: Tony Phúc - Admin; Quản lý dự án A - Project Manager; Kho B - Inventory clerk).
5. Mẫu dữ liệu Excel (một file mẫu cho Devices, Inventory, Projects, Invoices) để BA mapping.
6. Quy tắc đặt mã (code) doanh nghiệp: format mã thiết bị, mã dự án, mã PO.

Acceptance Criteria (Tiêu chí chấp nhận)
1. Scope MVP được Sếp đồng ý bằng văn bản (email xác nhận).
2. Credential cần thiết đã được cung cấp hoặc cam kết cung cấp trong timeline (ghi rõ deadline).
3. BA đã xác thực mẫu dữ liệu Excel và mapping fields (BA xác nhận không thiếu field quan trọng).
4. Danh sách user & quyền tối thiểu đã xác nhận.
5. Kế hoạch migrate dữ liệu: phương pháp (ETL), khung thời gian, người chịu trách nhiệm.
6. Kế hoạch tích hợp: email/calendar, phần mềm kế toán, document storage, barcode/RFID (mức độ: tích hợp cơ bản cho MVP).
7. Kế hoạch báo cáo thời gian thực: danh sách KPI tối thiểu cho dashboard (ví dụ: số thiết bị sắp bảo dưỡng, số hóa đơn chưa đối soát).
8. Rủi ro & biện pháp giảm thiểu đã được liệt kê (ví dụ: dữ liệu thiếu/trùng lặp; backup trước migrate).

Danh sách checkpoint phê duyệt (Sếp ký duyệt từng mục)
- [ ] Duyệt Project Brief & Scope MVP
- [ ] Cung cấp credential qua Gmail (phuc189@gmail.com) hoặc xác nhận địa chỉ email khác
- [ ] Phê duyệt mẫu dữ liệu Excel và mapping
- [ ] Xác nhận danh sách user & role
- [ ] Phê duyệt kế hoạch migrate & timeline
- [ ] Phê duyệt tích hợp hệ thống bên ngoài (kế toán, lưu trữ, barcode/RFID)
- [ ] Duyệt Acceptance Criteria để chuyển sang bước Spec kỹ thuật

Ghi chú kết luận cho Sếp:
- Sau khi các đầu mục trên được tick và Sếp xác nhận qua email, BA sẽ phối hợp với đội kỹ thuật để hoàn thiện Spec kỹ thuật và chuyển sang Checkpoint-02.
- Mọi thay đổi scope sau khi duyệt sẽ cần re-approval và có thể ảnh hưởng timeline.
