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
- Chuẩn tiếng Việt chính xác, font đọc d?
 (sans-serif), kích thước chữ tối thiểu 14px cho body.
- Hỗ trợ hiển thị rõ ràng cho người dùng từ 2 vai trò chính (lãnh đạo & vận hành).
