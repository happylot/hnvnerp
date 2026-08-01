Bạn là BA Agent. Hãy dùng Project Constitution từ Bước 01 dưới đây để sinh đặc tả module đầu tiên cho dự án ERP #5 của doanh nghiệp "CÔNG TY CỔ PHẦN KẾT NỐI THƯƠNG MẠI TOÀN CẦU MCV".

ĐẦU VÀO TỪ BƯỚC 01:
project-brief.md
CÔNG TY CỔ PHẦN KẾT NỐI THƯƠNG MẠI TOÀN CẦU MCV
Mã số thuế: 0111272400
Địa chỉ: N06BT08 Khu đô thị Sunny Garden City, Xã Quốc Oai, TP Hà Nội
Người đại diện: Tony Phúc
Gmail nhận credential/tích hợp: phuc189@gmail.com

1. Mục tiêu dự án
- Xây dựng hệ thống ERP tập trung cho quản lý thiết bị, vật tư, dự án, mua hàng và kế toán nhằm:
  - Tập trung dữ liệu thiết bị/vật tư/hồ sơ dự án.
  - Tự động hóa nhắc việc, cảnh báo bảo dưỡng.
  - Giảm trùng lặp dữ liệu, chuẩn hóa quy trình kiểm tra chứng từ/hóa đơn.
  - Cung cấp báo cáo thời gian thực cho lãnh đạo (dashboard).

2. Phạm vi (MVP đề xuất)
- Module chính trong MVP:
  1. Quản lý thiết bị (master thiết bị, mã vạch/RFID gắn thiết bị)
  2. Tồn kho và vị trí thiết bị (nhập/xuất, inventory real-time)
  3. Công việc & Nhắc việc (task, lịch, ưu tiên)
  4. Cảnh báo bảo dưỡng (lịch BDS, lịch trình định kỳ)
  5. Checklist hồ sơ dự án (hồ sơ nghiệm thu, biên bản)
  6. Kiểm tra chứng từ & hóa đơn (luồng kiểm duyệt, đối soát)
  7. Tìm kiếm AI cho lãnh đạo (tìm hồ sơ/chứng từ bằng tiếng Việt)
  8. Bảng điều hành (dashboard điều hành tổng quan)
  9. Mua hàng (PO, yêu cầu mua)
  10. Dự án (quản lý tiến độ, liên kết thiết bị/vật tư)
  11. Kế toán (kết nối phần mềm kế toán/hóa đơn)
  12. Thư viện tài liệu & media
  13. Tin nhắn nội bộ (thông báo, chat công việc)

- Ngoại trừ: tính năng mở rộng IoT nâng cao (chỉ hỗ trợ tích hợp cơ bản trong MVP), quy trình nhân sự/nhân công chi tiết (ngoại phạm vi MVP).

3. Pain points (điểm đau hiện tại)
- Dữ liệu quản lý thiết bị, vật tư, hồ sơ dự án rải rác trên Excel.
- Không có hệ thống tập trung cho nhắc việc và bảo dưỡng → nhân viên quên việc.
- Lãnh đạo không nắm được tình hình theo thời gian thực.
- Thiếu cảnh báo bảo dưỡng → rủi ro gián đoạn máy móc.
- Hồ sơ, hóa đơn và dữ liệu bị nhập trùng lặp; thiếu quy trình kiểm soát chứng từ và truy xuất thiết bị.

4. Người dùng chính (User personas)
- Sếp / Ban điều hành (Tony Phúc và lãnh đạo)
- Quản lý dự án
- Nhân viên kho
- Kỹ thuật viên bảo trì
- Kế toán
- Bộ phận Mua hàng

5. Kết quả kinh doanh mong muốn
- Tập trung dữ liệu thiết bị/vật tư/hồ sơ dự án vào một hệ thống.
- Nhắc việc và cảnh báo bảo dưỡng tự động, giảm downtime.
- Giảm trùng lặp dữ liệu và tăng tốc kiểm tra chứng từ.
- Báo cáo thời gian thực, trực quan cho lãnh đạo để ra quyết định kịp thời.
- Tối ưu quy trình mua hàng và kiểm soát chứng từ, giảm sai sót kế toán.

----

data-dictionary.md
Mục đích: mô tả các entity lõi, trường quan trọng, quan hệ dữ liệu, và dữ liệu dùng chung giữa phòng ban.

1. Entity lõi & các field quan trọng (mô tả ngắn)
- Device (Thiết bị)
  - device_id (PK), code (mã mã vạch/RFID), name, model, serial_number, manufacturer, purchase_date, warranty_end_date, status (Hoạt động/Chờ bảo dưỡng/Hỏng/Thanh lý), location_id, current_project_id, last_maintenance_date, next_maintenance_due, custodian (người chịu trách nhiệm), document_links (hồ sơ thiết bị)

- InventoryItem (Vật tư)
  - item_id (PK), sku, name, description, unit, quantity_on_hand, location_id, reorder_level, supplier_id, last_received_date, barcode

- Location (Vị trí kho/hiện trường)
  - location_id, name, type (Kho/Hiện trường/Bộ phận), address, parent_location_id

- Project (Dự án)
  - project_id, code, name, client, start_date, end_date, status, project_manager_id, site_location_id, document_links

- Task / WorkOrder (Công việc / Lệnh công)
  - task_id, title, description, assigned_to, priority, due_date, status (Todo/In Progress/Done/Blocked), related_device_id, related_project_id, checklist_id, created_by, reminders

- MaintenanceSchedule (Bảo dưỡng)
  - maint_id, device_id, schedule_type (Chu kỳ theo ngày/giờ/km/hours), frequency, last_done_date, next_due_date, assigned_to, status

- Document (Hồ sơ / Media)
  - doc_id, title, type (Hợp đồng/BBN/Biên bản nghiệm thu/Hóa đơn/Ảnh), related_entity_type, related_entity_id, uploaded_by, upload_date, storage_link, tags

- Invoice / Voucher (Chứng từ / Hóa đơn)
  - invoice_id, supplier_id/customer_id, invoice_no, date, amount, tax_amount, status (Draft/Submitted/Approved/Posted/Paid), related_project_id, attachments, approved_by

- PurchaseOrder (Đơn mua)
  - po_id, po_no, supplier_id, items[], total_amount, status, requested_by, approved_by, expected_delivery_date

- User / Employee
  - user_id, name, email, role, department, phone, assigned_projects[], assigned_devices[]

- Supplier
  - supplier_id, name, contact, tax_number, bank_details

- AuditLog
  - log_id, entity_type, entity_id, action, old_value, new_value, performed_by, timestamp

2. Quan hệ dữ liệu chính
- Device.location_id → Location.location_id
- Device.current_project_id → Project.project_id
- InventoryItem.location_id → Location.location_id
- Task.related_device_id → Device.device_id (1:n)
- Task.related_project_id → Project.project_id
- MaintenanceSchedule.device_id → Device.device_id (1:n)
- Document.related_entity_type + related_entity_id → liên kết tới Device/Project/Invoice/PO/Task
- Invoice.related_project_id → Project.project_id
- PurchaseOrder.items → InventoryItem (mô tả quantity và item_id)
- User assigned_projects/devices liên kết nhiều-nhiều với Project / Device

3. Dữ liệu dùng chung giữa phòng ban
- Danh mục Thiết bị: dùng chung giữa Kho, Kỹ thuật, Dự án, Mua hàng.
- Vị trí kho/hiện trường: kho & dự án & kỹ thuật.
- Hồ sơ dự án (Document): dùng chung giữa Dự án, Kế toán, Mua hàng, Ban điều hành.
- Chứng từ/Hóa đơn: dùng chung giữa Mua hàng và Kế toán.
- Lịch bảo dưỡng/Task: dùng chung giữa Kỹ thuật, Kho và Quản lý dự án.
- Danh mục Nhà cung cấp: Mua hàng & Kế toán.
- Người dùng (user/role): phân quyền dùng chung.

4. Ghi chú dữ liệu & chất lượng
- Dùng mã duy nhất (code/sku/barcode) làm khóa doanh nghiệp để tránh trùng lặp.
- Trong MVP, nguồn dữ liệu ban đầu: Excel (cần mapping/ETL).
- Yêu cầu tiêu chuẩn hóa tên, đơn vị, định dạng ngày (YYYY-MM-DD), mã dự án cố định.

----

coding-rules.md
Nguyên tắc triển khai (Laravel) — nguyên tắc chung, không code khi spec chưa duyệt.

1. Nguyên tắc chung
- Không bắt tay vào code trước khi spec chức năng, data model và checkpoint thiết kế (Checkpoint-01) được duyệt bởi Sếp (Tony Phúc) và BA.
- Dùng Laravel (current LTS) theo best practices: PSR-12, tổ chức module theo domain (Domain/Modules).
- Tách rõ API (REST/JSON) và frontend. Hỗ trợ API versioning (/api/v1/).

2. Migrations / Schema
- Mọi thay đổi cấu trúc DB phải qua migration.
- Migration tên rõ ràng (create_xxx_table / add_xxx_to_xxx_table).
- Dùng soft deletes và timestamps theo mặc định trừ khi có lý do khác.
- Thiết kế index cho trường tra cứu (code, barcode, invoice_no) để tối ưu tìm kiếm.

3. Model (Eloquent)
- Model phản ánh entity lõi (Device, InventoryItem, Project, Task, Invoice, User).
- Dùng relationships rõ ràng (hasMany, belongsTo, belongsToMany).
- Không chèn logic nghiệp vụ quá nặng trong controller — tách Service/Domain layer cho business logic.
- Sử dụng Accessors/Mutators và DTO (nếu cần) cho mapping dữ liệu từ Excel.

4. Controller / API
- Controllers nhẹ, gọi Service classes.
- Trả về response chuẩn (status, data, errors).
- Chuẩn hóa error codes cho client.

5. Validation
- Validation tại tầng request (FormRequest) trước khi xử lý.
- Validation rules rõ ràng: required, unique (mã doanh nghiệp), date format, numeric, enum values cho trạng thái.
- Tất cả đầu vào từ integrations (email parsing, API kế toán, IoT) phải được validate trước khi ghi DB.

6. Bảo mật & credentials
- Không commit credentials vào repo.
- Tất cả credential, API key, secret phải lưu trong environment secure (env / secret manager).
- Credential ban đầu và tích hợp sẽ được gửi/đăng ký qua Gmail phuc189@gmail.com (BA xác nhận danh sách credential cần thiết).

7. Kiểm thử
- Unit tests cho business logic, integration tests cho API chính.
- Viết test cases cho migration critical, cho quy trình nhập liệu từ Excel.

8. Tính năng bất đồng bộ & scale
- Dùng queues (Redis / RabbitMQ) cho gửi email, xử lý file lớn, import Excel.
- Event-driven cho cảnh báo bảo dưỡng, nhắc việc, thông báo.

9. Ghi chú quy trình phát triển
- Branching: feature/*, bugfix/*, release/*, hotfix/*.
- Pull Request phải có mô tả, checklist pass CI, reviewer ít nhất 1 BA hoặc QA và 1 senior dev.
- Không merge khi spec chưa phê duyệt.

10. Logging & Audit
- Ghi AuditLog cho thao tác thay đổi entity quan trọng (device, invoice, po, task).
- Sử dụng centralized logging (file + external log collector nếu cần).

----

style-guide.md
Nguyên tắc giao diện (UI/UX) cho chủ doanh nghiệp và nhân viên vận hành

1. Nguyên tắc chung
- Giao diện rõ ràng, tối giản, ưu tiên thông tin quan trọng.
- Phân tầng thông tin: Dashboard (tổng quan) → Module → Chi tiết.
- Responsive: desktop ưu tiên cho lãnh đạo & quản lý, mobile/webapp cho kỹ thuật viên (những thao tác nhanh).

2. Dành cho Chủ doanh nghiệp (Ban điều hành)
- Dashboard 1 trang: KPI chính (số dự án đang chạy, thiết bị sắp bảo dưỡng, chi phí phát sinh, hóa đơn chưa đối soát).
- Tốc độ truy cập nhanh, hỗ trợ filter thời gian, xuất báo cáo PDF/Excel.
- Tìm kiếm AI: ô tìm kiếm chung, hỗ trợ truy vấn bằng tiếng Việt tự nhiên (ví dụ: "hồ sơ dự án A tháng 6", "thiết bị gần hết bảo hành").

3. Dành cho Nhân viên vận hành (Kho, Kỹ thuật, Mua hàng)
- Danh sách dạng bảng (table) với filter, sort, bulk actions (nhập/xuất, chuyển vị trí).
- Form đơn giản, trường bắt buộc rõ ràng, validate tại chỗ.
- Chế độ offline cơ bản cho phiếu kiểm tra (bổ sung sau MVP nếu cần).

4. Bảng biểu / Trường dữ liệu
- Bảng: tiêu đề cột cố định, hỗ trợ pagination, export.
- Trường ngày: định dạng hiển thị DD/MM/YYYY (cấu hình có thể đổi).
- Sử dụng tooltip cho trường mô tả dài, liên kết nhanh tới Document.

5. Trạng thái & Màu sắc
- Thiết bị: 
  - Hoạt động (green), 
  - Sắp bảo dưỡng (amber/yellow), 
  - Quá hạn bảo dưỡng (red), 
  - Hỏng (dark red), 
  - Thanh lý (gray).
- Công việc (Task):
  - Todo (blue), 
  - In Progress (cyan), 
  - Blocked (orange), 
  - Done (green).
- Chứng từ/Hóa đơn:
  - Draft (gray), 
  - Submitted (blue), 
  - Approved (green), 
  - Rejected (red), 
  - Paid (dark green).
- Cảnh báo khẩn cấp: background nhấn mạnh + âm thanh tùy chọn cho người vận hành (configurable).

6. Cảnh báo (Notifications)
- Tiêu chí: ưu tiên theo mức độ (Critical, High, Normal).
- Giao diện cảnh báo: toast cho thông báo ngắn; inbox/center cho danh sách cảnh báo.
- Email & Calendar integration cho nhắc lịch bảo dưỡng và các approval cần chữ ký.

7. Truy xuất & Audit
- Mỗi màn chi tiết thiết bị/hồ sơ có tab Audit trail hiển thị lịch sử thay đổi.
- Link nhanh tới file đính kèm (Document storage).

8. Accessibility & Ngôn ngữ
- Chuẩn tiếng Việt chính xác, font đọc dễ (sans-serif), kích thước chữ tối thiểu 14px cho body.
- Hỗ trợ hiển thị rõ ràng cho người dùng từ 2 vai trò chính (lãnh đạo & vận hành).

----

agent-rules.md
Quy tắc cho các Agent (BA / Coder / QA / Automation / DevOps), checkpoint và phạm vi được phép làm.

1. BA Agent (Business Analyst)
- Trách nhiệm:
  - Thu thập yêu cầu, lập Project Brief, Data Dictionary, Spec chức năng.
  - Chuẩn bị checklist để Sếp duyệt (Checkpoint-01).
  - Xác nhận mapping dữ liệu từ Excel.
- Giới hạn:
  - Không trực tiếp thay đổi code/DB production.
  - Phải có phê duyệt từ Sếp trước khi chuyển spec cho dev.

2. Coder Agent (Developer)
- Trách nhiệm:
  - Triển khai theo spec đã duyệt.
  - Viết unit/integration tests, tài liệu triển khai module.
- Giới hạn:
  - Không bắt đầu feature nếu spec chưa duyệt.
  - Không deploy trực tiếp lên production; tuân thủ release process.

3. QA Agent (Tester)
- Trách nhiệm:
  - Viết test cases dựa trên spec BA.
  - Thực hiện test chức năng, regression, kiểm tra bảo mật cơ bản.
  - Ghi công việc/bug có reproduction steps.
- Giới hạn:
  - Không sửa code, chỉ xác nhận hoặc trả lại cho dev kèm mô tả lỗi.

4. Automation Agent (CI/CD / Test Automation)
- Trách nhiệm:
  - Thiết lập pipeline CI (lint, test, build).
  - Tự động chạy test khi PR tạo.
- Giới hạn:
  - Không thay đổi môi trường production mà không có approval DevOps.

5. DevOps Agent
- Trách nhiệm:
  - Thiết lập môi trường staging/production, backup, monitoring.
  - Triển khai theo release checklist.
- Giới hạn:
  - Chỉ deploy khi PR được merged, QA pass, và BA/Sếp chốt release (theo checkpoint được định nghĩa).

6. Checkpoints (bắt buộc)
- Checkpoint-01 (BA -> Sếp): phê duyệt business brief, scope MVP, danh sách credential cần cung cấp, kế hoạch migrate dữ liệu Excel.
- Checkpoint-02 (Spec kỹ thuật): BA + Coder + DevOps + QA duyệt spec chi tiết và data model.
- Checkpoint-03 (Ready to Deploy to Staging): QA pass, test reports, migration script reviewed.
- Checkpoint-04 (Go-live): Sếp/PM phê duyệt, backup có sẵn, rollback plan.

7. Quản lý credential
- Tất cả credential do Sếp gửi qua Gmail phuc189@gmail.com hoặc upload vào secret manager do DevOps chỉ định.
- Không chia sẻ credential qua chat/public repo.

8. Quy tắc làm việc
- Mỗi agent chỉ làm trong phạm vi trách nhiệm; giao tiếp qua ticket (Jira/Trello) và ghi nhận quyết định trong meeting notes.
- Mọi thay đổi yêu cầu phê duyệt đều lưu log và archive.

----

module-map.md
Mục tiêu: bản đồ module ưu tiên, phòng ban sử dụng, dữ liệu vào/ra, phụ thuộc giữa module.

1. Quản lý thiết bị
- Phòng ban: Kho, Kỹ thuật, Dự án, Ban điều hành
- Dữ liệu vào: danh sách thiết bị (Excel/import), mã barcode/RFID, hồ sơ thiết bị
- Dữ liệu ra: trạng thái thiết bị, lịch bảo dưỡng, báo cáo sử dụng
- Phụ thuộc: Location, Project, Maintenance, Document

2. Tồn kho & Vị trí thiết bị
- Phòng ban: Kho, Mua hàng, Kế toán
- Dữ liệu vào: phiếu nhập/xuất, PO, physical count
- Dữ liệu ra: stock levels, reorder alerts, stock movement logs
- Phụ thuộc: InventoryItem, Location, Supplier, PurchaseOrder

3. Công việc & Nhắc việc
- Phòng ban: Kỹ thuật, Quản lý dự án, Kho
- Dữ liệu vào: task tạo từ project/maintenance, reminders calendar
- Dữ liệu ra: task status, assignment, audit log
- Phụ thuộc: User, Device, Project, Calendar integration

4. Cảnh báo bảo dưỡng
- Phòng ban: Kỹ thuật, Kho, Ban điều hành
- Dữ liệu vào: maintenance schedule, last maintenance date, usage data (nếu có)
- Dữ liệu ra: alerts (email/push), maintenance reports
- Phụ thuộc: Device, Task, Calendar, Notification service

5. Checklist hồ sơ dự án
- Phòng ban: Quản lý dự án, Kế toán, Mua hàng
- Dữ liệu vào: danh mục hồ sơ cần có, file upload
- Dữ liệu ra: checklist trạng thái (complete/incomplete), báo cáo thiếu hồ sơ
- Phụ thuộc: Document, Project

6. Kiểm tra chứng từ & hóa đơn
- Phòng ban: Mua hàng, Kế toán, Ban điều hành
- Dữ liệu vào: invoice/receipt upload, PO link, approval flows
- Dữ liệu ra: trạng thái chứng từ, báo cáo thanh toán/đối soát
- Phụ thuộc: PurchaseOrder, Invoice, Document

7. Tìm kiếm AI cho lãnh đạo
- Phòng ban: Ban điều hành, Quản lý dự án
- Dữ liệu vào: index toàn bộ Document, metadata, logs
- Dữ liệu ra: kết quả tìm kiếm bằng tiếng Việt, tóm tắt, gợi ý câu hỏi
- Phụ thuộc: Document storage, AuditLog, User queries

8. Bảng điều hành (Dashboard)
- Phòng ban: Ban điều hành, Quản lý dự án
- Dữ liệu vào: tổng hợp từ Devices, Inventory, Invoices, Tasks
- Dữ liệu ra: KPI, biểu đồ thời gian thực, alert summary

9. Mua hàng
- Phòng ban: Mua hàng, Kế toán
- Dữ liệu vào: purchase request, supplier info, PO creation
- Dữ liệu ra: PO status, expected delivery, liên kết hóa đơn
- Phụ thuộc: Supplier, InventoryItem, Invoice

10. Dự án
- Phòng ban: Quản lý dự án, Ban điều hành, Kho
- Dữ liệu vào: kế hoạch, site location, resource allocation
- Dữ liệu ra: tiến độ, sử dụng thiết bị/vật tư, hồ sơ dự án
- Phụ thuộc: Device, Inventory, Document, Task

11. Kế toán
- Phòng ban: Kế toán, Ban điều hành
- Dữ liệu vào: invoices, payments, PO, chart of accounts (tích hợp phần mềm kế toán)
- Dữ liệu ra: báo cáo tài chính, đối soát hóa đơn
- Phụ thuộc: Invoice, PurchaseOrder, Document, External Accounting Software

12. Thư viện tài liệu & media
- Phòng ban: Tất cả
- Dữ liệu vào: upload file, tags, liên kết entity
- Dữ liệu ra: download link, preview, version history
- Phụ thuộc: Document, Project, Device

13. Tin nhắn nội bộ
- Phòng ban: Tất cả
- Dữ liệu vào: message, task notification
- Dữ liệu ra: thông báo realtime, activity feed
- Phụ thuộc: User, Task, Notification service

Ghi chú phụ thuộc tổng quát:
- Hệ thống notification & calendar integration cần kết nối email/lịch nội bộ.
- Tích hợp bên ngoài cần: phần mềm kế toán/hóa đơn, mã vạch/RFID hoặc IoT, document storage.

----

checkpoint-01.md
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

Yêu cầu đầu ra: viết đúng 5 tài liệu, mỗi tài liệu bắt đầu bằng đúng tên file trên một dòng riêng.

1. prd.md: tên module ưu tiên đầu tiên, mục tiêu, người dùng, phạm vi MVP, ngoài phạm vi, rủi ro.
2. user-stories.md: user stories theo vai trò, định dạng Vai trò - Nhu cầu - Lợi ích - Điều kiện chấp nhận.
3. schema-draft.md: bảng, field chính, kiểu dữ liệu gợi ý, quan hệ, trạng thái, dữ liệu bắt buộc.
4. api-contract.md: endpoint draft, method, input, output, quyền truy cập, lỗi nghiệp vụ cần trả.
5. acceptance-criteria.md: acceptance criteria, checklist duyệt spec, điều kiện để chuyển sang bước 03.

Nếu Bước 01 chưa có dữ liệu, hãy yêu cầu chạy Bước 01 trước. Không viết code.
