Acceptance Criteria tổng quát cho Spec Quản lý thiết bị (điều kiện để chuyển sang Checkpoint-02)

1. Business sign-off
- [ ] Sếp (Tony Phúc) xác nhận bằng văn bản (email tới phuc189@gmail.com) chấp nhận module Quản lý thiết bị, scope MVP và các ngoại phạm vi nêu trong prd.md.

2. Data & Mapping
- [ ] Mẫu Excel cho Devices đã được cung cấp và BA xác nhận mapping các trường bắt buộc (code, name, location, purchase_date, warranty_end_date, serial_number).
- [ ] Quy tắc đặt mã doanh nghiệp cho code thiết bị được phê duyệt (format regex) và document mapping lưu trữ.

3. API & Schema
- [ ] Schema-draft (bảng devices, maintenance_schedules, device_transfers, documents, audit_logs) đã được review và đồng ý về các field bắt buộc, kiểu dữ liệu và indexes.
- [ ] Danh sách các endpoint cơ bản trong api-contract.md được duyệt về method, quyền truy cập và lỗi trả về.

4. Validation & Business rules
- [ ] Quy tắc unique cho code/barcode đã được xác nhận và quy trình xử lý trùng lặp trong import (skip vs fail vs merge) được phê duyệt.
- [ ] Quy tắc trạng thái thiết bị và threshold xác định "sắp bảo dưỡng" (ví dụ: within 7 ngày) được định nghĩa.

5. Import & ETL
- [ ] Kế hoạch migrate dữ liệu Devices từ Excel: phương pháp ETL, owner, timeline và test import sample (tối thiểu 1 sample file) đã được xác nhận.
- [ ] Báo cáo import cần có: số bản ghi thành công, số bản ghi lỗi với reason, link tải file lỗi.

6. UX & Reports
- [ ] Các view chính (list, detail, transfer, create/import) và các trường bắt buộc đã được BA/UX chốt (theo style-guide: hiển thị date DD/MM/YYYY).
- [ ] KPI tối thiểu cho dashboard liên quan thiết bị được xác nhận (ví dụ: total devices, sắp bảo dưỡng count, quá hạn count).

7. Security & Credentials
- [ ] Danh sách credential cần thiết (storage folder, API kế toán nếu cần cho liên kết, access cho email gửi thông báo) đã được liệt kê và cam kết cung cấp qua phuc189@gmail.com hoặc secret manager với deadline.

8. Testing & QA
- [ ] Test cases cơ bản đã được BA/QA định nghĩa: CRUD device, import happy path, import with duplicate code, transfer location, create workorder từ device, maintenance due detection.
- [ ] Unit/integration test scope cho module được thống nhất (migrations, import job, API endpoints).

9. Operational & Audit
- [ ] AuditLog requirement (các hành động cần log) đã được xác định và chấp thuận.
- [ ] Backup/rollback plan cho migration dữ liệu đã được mô tả (who/when/how).

10. Checkpoint Deliverables
- [ ] Khi tất cả mục trên tick: Spec được chuyển cho Coder Agent để chuẩn bị Checkpoint-02 (Spec kỹ thuật chi tiết).
- [ ] Nếu có thay đổi scope sau phê duyệt, yêu cầu re-approval từ Sếp theo agent-rules.

Ghi chú cuối
- Nếu bất kỳ thông tin (ví dụ: mẫu Excel, credential hoặc danh sách user & role) chưa sẵn sàng, vui lòng cung cấp trước khi ký duyệt; nếu thiếu, BA sẽ đánh dấu mục tương ứng chưa hoàn thành trong checklist để tránh bắt đầu dev trái quy trình.
