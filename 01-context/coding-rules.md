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
