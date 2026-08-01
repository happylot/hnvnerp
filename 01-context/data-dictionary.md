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
