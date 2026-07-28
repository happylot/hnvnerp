export const metadata = {
  title: "Dashboard ERP Công Ty Xây Dựng",
  description:
    "Trực quan hóa yêu cầu xây dựng phần mềm ERP cho công ty xây dựng.",
};

export default function Home() {
  return (
    <main className="dashboard">
      <header className="hero">
        <div className="blueprint left"></div>
        <div className="hero-copy">
          <h1>
            Trực quan hóa yêu cầu xây dựng phần mềm <span>ERP</span> cho công
            ty xây dựng
          </h1>
          <p>
            Hệ thống quản lý toàn diện - liên kết dữ liệu - cảnh báo thông minh
            - hỗ trợ ra quyết định theo thời gian thực
          </p>
        </div>
        <div className="blueprint right"></div>
      </header>

      <section className="workspace" aria-label="Tổng quan ERP">
        <aside className="side-panel left-panel">
          <article className="metric-card">
            <h2>
              <span className="icon">▣</span>Tồn kho thiết bị
            </h2>
            <div className="inventory">
              <div className="donut">
                <strong>1.256</strong>
                <span>Tổng thiết bị</span>
              </div>
              <ul>
                <li>
                  <i className="c-blue"></i>Kho <b>658</b>
                </li>
                <li>
                  <i className="c-cyan"></i>Công trường <b>342</b>
                </li>
                <li>
                  <i className="c-gold"></i>Cho thuê <b>156</b>
                </li>
                <li>
                  <i className="c-red"></i>Sửa chữa <b>100</b>
                </li>
              </ul>
            </div>
          </article>

          <article className="metric-card">
            <h2>
              <span className="icon">▣</span>Cảnh báo quá hạn <em>!</em>
            </h2>
            <dl className="alert-list">
              <div>
                <dt>Việc quá hạn</dt>
                <dd>23</dd>
              </div>
              <div>
                <dt>Bảo dưỡng đến hạn</dt>
                <dd>15</dd>
              </div>
              <div>
                <dt>Hồ sơ thiếu</dt>
                <dd>31</dd>
              </div>
              <div>
                <dt>Chứng từ thiếu</dt>
                <dd>17</dd>
              </div>
            </dl>
          </article>

          <article className="metric-card">
            <h2>
              <span className="icon">▰</span>Tiến độ dự án
            </h2>
            <div className="progress-list">
              <label>
                Dự án Sunshine City <span>72%</span>
                <b>
                  <i style={{ width: "72%" }}></i>
                </b>
              </label>
              <label>
                Dự án River View <span>55%</span>
                <b>
                  <i style={{ width: "55%" }}></i>
                </b>
              </label>
              <label>
                Dự án Green Tower <span>38%</span>
                <b>
                  <i style={{ width: "38%" }}></i>
                </b>
              </label>
              <label>
                Dự án Central Plaza <span>20%</span>
                <b>
                  <i style={{ width: "20%" }}></i>
                </b>
              </label>
            </div>
          </article>
        </aside>

        <section className="flow-grid">
          <div className="data-stream stream-sales" aria-hidden="true"></div>
          <div className="data-stream stream-tech" aria-hidden="true"></div>
          <div
            className="data-stream stream-construction"
            aria-hidden="true"
          ></div>
          <div className="data-stream stream-accounting" aria-hidden="true"></div>
          <div className="data-stream stream-people" aria-hidden="true"></div>
          <div className="data-stream stream-ai" aria-hidden="true"></div>

          <article className="module sales">
            <div className="module-icon">↗</div>
            <h2>1. Phòng kinh doanh</h2>
            <ul>
              <li>Tra cứu tồn kho thiết bị, vật tư</li>
              <li>Xác định vị trí từng máy: kho, công trường, cho thuê, sửa chữa</li>
              <li>Hiển thị tình trạng sẵn sàng để bán hoặc cho thuê</li>
              <li>Quản lý công việc từng nhân viên trong ngày</li>
              <li>Nhắc việc chưa hoàn thành</li>
              <li>Lập kế hoạch tháng / năm</li>
            </ul>
          </article>

          <article className="module technical">
            <div className="module-icon">⚒</div>
            <h2>2. Phòng kỹ thuật / sửa chữa</h2>
            <ul>
              <li>Quản lý lịch bảo dưỡng từng thiết bị</li>
              <li>Cảnh báo đến hạn thay dầu</li>
              <li>Cảnh báo bảo dưỡng định kỳ</li>
              <li>Cảnh báo kiểm định</li>
              <li>Cảnh báo sự cố, hỏng hóc</li>
              <li>Theo dõi nhật trình thiết bị làm việc</li>
              <li>Ban lãnh đạo và kỹ thuật cùng theo dõi tình trạng máy</li>
            </ul>
          </article>

          <article className="module construction">
            <div className="module-icon">▤</div>
            <h2>3. Phòng thi công</h2>
            <ul>
              <li>Checklist hồ sơ bắt buộc khi nhận dự án mới</li>
              <li>Hợp đồng, hồ sơ pháp lý, hồ sơ nhân sự</li>
              <li>Hồ sơ lái máy, thiết bị, an toàn lao động</li>
              <li>Hợp đồng và hồ sơ nhà thầu phụ</li>
              <li>Thiếu hồ sơ nào, hệ thống cảnh báo ngay</li>
            </ul>
          </article>

          <article className="core">
            <div className="building">▥</div>
            <h2>ERP</h2>
            <h3>Quản lý toàn diện doanh nghiệp</h3>
            <p>
              <span>⌁</span>Dữ liệu liên kết toàn hệ thống
            </p>
            <p>
              <span>◉</span>Hạn chế nhập liệu trùng lặp
            </p>
            <p>
              <span>✓</span>Giảm sai sót
            </p>
            <p>
              <span>◌</span>Ra quyết định nhanh dựa trên dữ liệu thực tế
            </p>
          </article>

          <article className="module accounting">
            <div className="module-icon">▦</div>
            <h2>4. Phòng kế toán</h2>
            <ul>
              <li>Kiểm tra tự động chứng từ, hóa đơn</li>
              <li>Đánh giá tính đầy đủ và hợp lệ</li>
              <li>Cảnh báo nhập sai hoặc thiếu chứng từ</li>
              <li>Ban giám đốc theo dõi hồ sơ tài chính còn thiếu hoặc chưa hoàn thiện</li>
            </ul>
          </article>

          <article className="module people">
            <div className="module-icon">●●</div>
            <h2>5. Toàn bộ nhân viên</h2>
            <ul>
              <li>Đăng nhập là biết ngay việc cần làm</li>
              <li>Hiển thị việc tồn đọng</li>
              <li>Hiển thị công việc quá hạn</li>
              <li>Quản lý công việc trên một hệ thống thống nhất</li>
            </ul>
          </article>

          <article className="assistant-box">
            <h2>
              <span>AI</span>6. Ban giám đốc & AI Assistant
            </h2>
            <div className="search">
              ⌕{" "}
              <input
                value="Hỏi AI Assistant..."
                aria-label="Hỏi AI Assistant"
                readOnly
              />
            </div>
            <div className="chips">
              <button>hóa đơn</button>
              <button>bảo dưỡng</button>
              <button>hồ sơ</button>
              <button>nhân sự</button>
            </div>
            <ul>
              <li>Gõ từ khóa để nắm bắt tình hình theo ngày / tháng / quý / năm</li>
              <li>Tự động tổng hợp dữ liệu liên quan</li>
              <li>Cảnh báo công việc chưa hoàn thiện</li>
              <li>Nhắc nhở liên tục tới từng nhân viên</li>
              <li>
                Theo dõi tiến độ từng phòng ban, từng dự án, từng nhân viên theo
                thời gian thực
              </li>
            </ul>
          </article>
        </section>

        <aside className="side-panel right-panel">
          <article className="metric-card schedule">
            <h2>
              <span className="icon">▦</span>Lịch bảo dưỡng
            </h2>
            <p>
              <span>🚜</span>Máy đào CAT 320 <b>25/05/2024</b>
            </p>
            <p>
              <span>🏗</span>Xe cẩu Kato 50T <b>27/05/2024</b>
            </p>
            <p>
              <span>🚛</span>Máy ủi Komatsu D65 <b>30/05/2024</b>
            </p>
            <p>
              <span>🚚</span>Xe bơm bê tông <b>02/06/2024</b>
            </p>
            <a href="#">Xem tất cả →</a>
          </article>

          <article className="metric-card due">
            <h2>
              <span className="icon gold">●</span>Cảnh báo gần đến hạn
            </h2>
            <p>
              Thay dầu - Máy đào CAT 320 <b>Còn 2 ngày</b>
            </p>
            <p>
              Bảo dưỡng - Xe cẩu Kato 50T <b>Còn 3 ngày</b>
            </p>
            <p>
              Kiểm định - Máy ủi D65 <b>Còn 5 ngày</b>
            </p>
            <a href="#">Xem tất cả →</a>
          </article>

          <article className="metric-card performance">
            <h2>
              <span className="icon">↗</span>Hiệu suất hôm nay
            </h2>
            <dl className="alert-list">
              <div>
                <dt>Việc hoàn thành</dt>
                <dd className="ok">86%</dd>
              </div>
              <div>
                <dt>Việc quá hạn</dt>
                <dd>14</dd>
              </div>
              <div>
                <dt>Hồ sơ thiếu</dt>
                <dd>31</dd>
              </div>
              <div>
                <dt>Cảnh báo hệ thống</dt>
                <dd>9</dd>
              </div>
            </dl>
          </article>
        </aside>
      </section>

      <section className="goals">
        <h2>Mục tiêu hệ thống</h2>
        <article>
          <span>◎</span>
          <b>1.</b> Một nền tảng thống nhất cho toàn doanh nghiệp
        </article>
        <article>
          <span>▧</span>
          <b>2.</b> Quản trị công việc - hồ sơ - thiết bị - tài chính
        </article>
        <article>
          <span>🔔</span>
          <b>3.</b> Cảnh báo chủ động, giảm phụ thuộc tổng hợp thủ công
        </article>
        <article>
          <span>↗</span>
          <b>4.</b> Hỗ trợ lãnh đạo xử lý nhanh khối lượng thông tin lớn mỗi ngày
        </article>
      </section>

      <footer className="footer">
        <span>▣ Bảo mật dữ liệu</span>
        <span>☁ Lưu trữ an toàn</span>
        <span>▥ Truy cập mọi lúc, mọi nơi</span>
        <span>◷ Báo cáo trực quan - thời gian thực</span>
        <span>👥 Mở rộng linh hoạt theo nhu cầu doanh nghiệp</span>
      </footer>
    </main>
  );
}
