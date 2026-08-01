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
