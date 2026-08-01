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
