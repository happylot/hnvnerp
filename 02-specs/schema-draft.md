Bảng chính và field (gợi ý kiểu dữ liệu)

1. devices
- id (bigint, PK, auto-increment)
- device_id (uuid/string) — enterprise PK (unique)
- code (string, indexed, unique) — mã barcode/RFID theo quy tắc doanh nghiệp (bắt buộc)
- name (string, required)
- model (string, nullable)
- serial_number (string, nullable, indexed)
- manufacturer (string, nullable)
- purchase_date (date, nullable)
- warranty_end_date (date, nullable)
- status (enum: active, maintenance_due_soon, maintenance_overdue, broken, disposed) (default: active)
- location_id (bigint, FK -> locations.id, nullable)
- current_project_id (bigint, FK -> projects.id, nullable)
- last_maintenance_date (date, nullable)
- next_maintenance_due (date, nullable)
- custodian_id (bigint FK -> users.id, nullable)
- document_links (json/nullable) — list of doc_id / storage links
- metadata (json, nullable) — for extensible attributes
- created_by (bigint -> users.id)
- updated_by (bigint -> users.id)
- timestamps (created_at, updated_at)
- soft deletes (deleted_at)

Required fields (bắt buộc): code, name
Indexes: code (unique), serial_number, current_project_id, location_id

2. device_transfers (lịch sử chuyển vị)
- id, device_id (FK), from_location_id, to_location_id, transferred_by (user_id), transfer_date (datetime), note

3. maintenance_schedules (tái sử dụng từ data-dictionary)
- id (maint_id), device_id (FK), schedule_type (enum: interval_days/hours/usage), frequency (int), last_done_date, next_due_date, assigned_to (user_id), status (enum: active/inactive)

4. documents (tham chiếu theo data-dictionary)
- id (doc_id), title, type, related_entity_type (enum), related_entity_id, storage_link, uploaded_by, upload_date, tags(json)

5. audit_logs
- id, entity_type, entity_id, action (create/update/delete/transfer), old_value (json), new_value (json), performed_by, timestamp

Quan hệ chính
- devices.location_id -> locations.id (belongsTo)
- devices.current_project_id -> projects.id (belongsTo)
- devices.custodian_id -> users.id (belongsTo)
- maintenance_schedules.device_id -> devices.id (hasMany)
- device_transfers.device_id -> devices.id (hasMany)
- documents.related_entity_type+related_entity_id -> devices / projects / invoices

Trạng thái & workflow
- Tạo thiết bị: Draft -> Active (after validation & save)
- Bảo dưỡng: nếu next_maintenance_due <= today -> maintenance_overdue; nếu within threshold (configurable, e.g., 7 days) -> maintenance_due_soon
- Thanh lý: status = disposed (soft delete & mark)
- Chuyển vị: tạo device_transfers, cập nhật location_id, ghi AuditLog

Dữ liệu bắt buộc & validation
- code: required, unique (trên toàn hệ thống), matches enterprise format
- name: required
- dates: YYYY-MM-DD
- Import Excel: mapping các field bắt buộc; reject record nếu thiếu code/name; provide import report (success/fail + reason)
