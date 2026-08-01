Base path: /api/v1/devices
Authentication: Bearer token (JWT) — quyền truy cập dựa trên role (Admin, ProjectManager, InventoryClerk, Technician, Accounting, ReadOnly)

1. GET /api/v1/devices
- Mô tả: Lấy list devices, hỗ trợ filter, search, paging, sort
- Query params: page, per_page, search (code/name/serial), status, location_id, project_id, custodian_id, sort_by, sort_order
- Response: { status, data: [{device}], meta: {pagination} }
- Roles: InventoryClerk, Technician, ProjectManager, Accounting, Admin, ReadOnly
- Lỗi nghiệp vụ: 400 invalid filter, 401 unauthorized

2. GET /api/v1/devices/{device_id}
- Mô tả: Chi tiết thiết bị
- Path: device_id (uuid/string)
- Response: { status, data: {device with maintenance_schedules, last_transfers, document_links} }
- Roles: as above
- Lỗi nghiệp vụ: 404 not found, 401 unauthorized

3. POST /api/v1/devices
- Mô tả: Tạo thiết bị mới (single)
- Body: { code*, name*, model, serial_number, manufacturer, purchase_date, warranty_end_date, location_id, current_project_id, custodian_id, document_links[] }
- Response: 201 created { status, data: {device} }
- Roles: Admin, InventoryClerk, ProjectManager (perms)
- Validation errors: 422 with details (code unique, required fields)
- Business errors: 409 code already exists

4. PUT /api/v1/devices/{device_id}
- Mô tả: Cập nhật thiết bị
- Body: fields updatable (name, model, status, location_id, current_project_id, custodian_id, document_links)
- Response: 200 OK { data: updated device }
- Roles: Admin, InventoryClerk, Technician (partial), ProjectManager
- Lỗi nghiệp vụ: 409 nếu đổi code gây trùng, 422 validation

5. DELETE /api/v1/devices/{device_id}
- Mô tả: Soft delete / mark disposed
- Response: 204 No Content
- Roles: Admin
- Lỗi nghiệp vụ: 403 if non-admin, 404 not found

6. POST /api/v1/devices/import
- Mô tả: Import batch từ Excel/CSV (queued job)
- Body: multipart file, mapping config id (optional)
- Response: 202 Accepted { job_id }
- Roles: Admin, InventoryClerk
- Behaviour: Validate each row, create AuditLog per created/failed row, return import report via job result (download link)
- Lỗi nghiệp vụ: 422 invalid file, 400 mapping missing required fields

7. POST /api/v1/devices/{device_id}/transfer
- Mô tả: Chuyển vị thiết bị
- Body: { to_location_id*, transfer_date, note }
- Response: 200 { device, transfer_record }
- Roles: InventoryClerk, Admin
- Lỗi nghiệp vụ: 400 if same location, 404 location not found

8. GET /api/v1/devices/{device_id}/maintenance
- Mô tả: Lấy lịch bảo dưỡng liên quan
- Response: { schedules: [...], next_due }
- Roles: Technician, ProjectManager, Admin
- Lỗi nghiệp vụ: 404 device not found

9. POST /api/v1/devices/{device_id}/create-workorder
- Mô tả: Tạo Task/WorkOrder từ thiết bị (khi bảo dưỡng cần thực hiện)
- Body: { title*, description, assigned_to*, due_date }
- Response: 201 { task_id }
- Roles: Technician, ProjectManager, Admin
- Lỗi nghiệp vụ: 422, 403 unauthorized

Common error format
- 401 Unauthorized: { status: "error", code: 401, message: "Unauthorized" }
- 403 Forbidden: { status: "error", code: 403, message: "Forbidden" }
- 404 Not Found: { status: "error", code: 404, message: "Device not found" }
- 422 Validation Error: { status: "error", code: 422, errors: { field: ["msg"] } }
- 409 Conflict: { status: "error", code: 409, message: "Code already exists" }

Notes về bảo mật & rate-limits
- Tất cả endpoint yêu cầu auth; sensitive actions (delete/import) require Admin role.
- Rate-limit: configurable per client (API key / user) để tránh misuse during bulk import.
