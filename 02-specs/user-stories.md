Quản lý dự án - Muốn xem danh sách thiết bị liên quan tới dự án - Để kiểm soát resource và tiến độ - Điều kiện chấp nhận: có API/trang hiển thị danh sách thiết bị theo project_id; filter theo trạng thái; hiển thị link tới document.

Nhân viên kho - Muốn tạo/nhập thiết bị mới từ Excel hoặc form - Để cập nhật tồn kho thiết bị tại kho - Điều kiện chấp nhận: import Excel với mapping, validation unique code; form tạo thiết bị bắt buộc code, name, location; trả lỗi nếu trùng mã.

Kỹ thuật viên bảo trì - Muốn thấy lịch bảo dưỡng và next_maintenance_due của thiết bị - Để chuẩn bị công việc bảo trì kịp thời - Điều kiện chấp nhận: trường last_maintenance_date và next_maintenance_due hiển thị; có nút tạo WorkOrder từ maintenance schedule.

Ban điều hành - Muốn nhận báo cáo số thiết bị sắp bảo dưỡng/đã quá hạn - Để ra quyết định ưu tiên nguồn lực - Điều kiện chấp nhận: API tổng hợp KPI (count sắp bảo dưỡng, count quá hạn) cho dashboard; filter theo site_location.

Nhân viên mua hàng - Muốn tham chiếu thông tin thiết bị (model, serial, supplier) khi tạo PO - Để đảm bảo mua vật tư tương thích - Điều kiện chấp nhận: endpoint trả thông tin thiết bị theo device_id gồm model, serial_number, manufacturer.

Kế toán - Muốn liên kết thiết bị với chứng từ/hóa đơn - Để đối soát chi phí mua/sửa chữa - Điều kiện chấp nhận: device.detail bao gồm document_links và liên kết tới invoice_id nếu có.

Quản trị hệ thống (Admin) - Muốn quản lý quy tắc mã thiết bị và import mapping - Để chuẩn hóa dữ liệu - Điều kiện chấp nhận: UI cấu hình format mã, upload mẫu Excel, lưu mapping trường và xem log import.
