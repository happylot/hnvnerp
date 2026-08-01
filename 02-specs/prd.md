Quản lý thiết bị (Device Management)

Mục tiêu
- Xây dựng module Quản lý thiết bị làm nguồn dữ liệu chủ cho toàn hệ thống ERP: quản lý master thiết bị, mã vạch/RFID, trạng thái, vị trí, lịch bảo dưỡng và liên kết tới dự án/hồ sơ.
- Đảm bảo dữ liệu thiết bị tập trung, tránh trùng lặp, cung cấp triggers cho cảnh báo bảo dưỡng và làm nguồn cho dashboard thời gian thực.

Người dùng chính
- Quản lý dự án
- Nhân viên kho
- Kỹ thuật viên bảo trì
- Ban điều hành (Tony Phúc)
- Mua hàng (tham chiếu khi tạo PO)
- Kế toán (tham chiếu khi đối soát thiết bị liên quan hóa đơn)

Phạm vi MVP
Bao gồm:
- Master thiết bị: CRUD thiết bị với các trường chuẩn (code/barcode/RFID, tên, model, serial, NSX, ngày mua, ngày hết bảo hành, custodian).
- Gắn mã vạch / RFID: lưu code duy nhất, validate trùng lặp.
- Quản lý vị trí hiện tại (location) và lịch sử chuyển vị.
- Trạng thái hoạt động (Hoạt động / Sắp bảo dưỡng / Quá hạn bảo dưỡng / Hỏng / Thanh lý).
- Liên kết thiết bị ↔ dự án (current_project_id) và ↔ document (hồ sơ thiết bị).
- Trường last_maintenance_date, next_maintenance_due và tạo maintenance task cơ bản (tạo Task/WorkOrder khi tới hạn).
- Import từ Excel (ETL mapping theo data-dictionary).
- AuditLog cho mọi thay đổi quan trọng (create/update/delete/transfer).
- API REST chuẩn (/api/v1/devices) với filtering, paging, tìm kiếm theo code/name/serial.
- Validation mã duy nhất (code/sku/barcode) theo quy tắc doanh nghiệp.

Ngoài phạm vi MVP (không triển khai trong giai đoạn này)
- Tích hợp IoT nâng cao (tự động cập nhật trạng thái qua device telemetry).
- Offline-first mobile app nâng cao (chỉ hỗ trợ giao diện web/mobile cơ bản).
- Predictive maintenance dựa trên phân tích dữ liệu vận hành (ngoại phạm vi).
- Quản lý lifecycle tài sản kế toán phức tạp (phân bổ khấu hao chi tiết) — chỉ hỗ trợ liên kết cơ bản tới module Kế toán.

Rủi ro chính & biện pháp giảm thiểu
- Rủi ro: Dữ liệu thiết bị phân tán/không chuẩn từ Excel → dẫn tới trùng lặp hoặc thiếu trường. Giảm thiểu: bắt buộc mapping mẫu Excel, chạy ETL có validation, giữ mã duy nhất doanh nghiệp là khóa.
- Rủi ro: Thiếu credential/permission cho kho lưu trữ tài liệu hoặc API kế toán → Giảm thiểu: yêu cầu rõ danh sách credential trong Checkpoint-01, deadline cung cấp.
- Rủi ro: Người dùng không tuân thủ nhập mã chuẩn → Giảm thiểu: validate tại form, chỉ cho nhập barcode qua scanner, rule format mã doanh nghiệp.
- Rủi ro: Hiệu suất tìm kiếm khi lượng thiết bị lớn → Giảm thiểu: thiết kế index cho fields tìm kiếm (code, barcode, serial), API paging.
- Rủi ro: Thiếu audit trail → Giảm thiểu: ghi AuditLog cho thao tác quan trọng theo coding-rules.
