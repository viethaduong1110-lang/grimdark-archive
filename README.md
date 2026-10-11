# 💀 Grimdark Archive - Warhammer 40,000 Fanfic Platform

> *"In the grim darkness of the far future, there is only war."*

**Grimdark Archive** là nền tảng web ứng dụng dùng để lưu trữ, quản lý và đọc truyện ngắn/thánh thư (Data-slate) lấy bối cảnh trong vũ trụ tăm tối **Warhammer 40,000**. Dự án được xây dựng theo mô hình phân tầng hiện đại nhằm phục vụ học tập và sở thích cá nhân.

---

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

* **Frontend:** HTML5, Tailwind CSS, JavaScript thuần (Vanilla JS), Font Awesome, Google Fonts (Cinzel, Rajdhani).
* **Backend:** Spring Boot (Java RESTful API).
* **Database:** MySQL & phpMyAdmin (Quản lý CSDL quan hệ cho bảng `stories` và `chapters`).
* **Editor:** TinyMCE (Trợ giúp soạn thảo định dạng nội dung chương truyện).

---

## 🌟 Các Tính Năng Chính

1. **Trang Chủ Động (Dynamic Homepage):** 
   - Tự động gọi API từ Backend để hiển thị danh sách Data-slate.
   - Hỗ trợ cơ chế hiển thị ảnh bìa linh hoạt (ưu tiên ảnh cục bộ trong thư mục dự án `./horus.jpg` hoặc ảnh tùy chỉnh).
2. **Hệ Thống Lọc Phe Phái (Faction Filtering):** 
   - Lọc nhanh các tài liệu theo phe: *Imperium of Man, Forces of Chaos, Aeldari, Orks, Tyranids*.
3. **Trang Quản Trị & Đăng Tải (Dashboard Terminal):** 
   - Giao diện Cogitator Terminal cho phép tác giả nhập tiêu đề, chọn phe, thiết lập ảnh bìa và soạn thảo nội dung chương truyện mới tích hợp trình soạn thảo chuyên nghiệp.
4. **Trang Đọc Truyện Chi tiết (Chapter Reader):** 
   - Giao diện đọc truyện trực quan, đậm chất tương lai giả tưởng.

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cơ sở dữ liệu (Database)
* Khởi động MySQL (XAMPP / WampServer).
* Tạo database và bảng `stories` (có cột `cover_image` kiểu `VARCHAR(255)`) cùng bảng `chapters`.

### 2. Backend (Spring Boot)
* Import project Backend vào IntelliJ IDEA / Eclipse.
* Cấu hình kết nối cơ sở dữ liệu trong `application.properties`.
* Chạy ứng dụng Spring Boot (Cổng mặc định: `http://localhost:8080`).

### 3. Frontend
* Mở thư mục chứa mã nguồn giao diện bằng **VS Code**.
* Cài đặt extension **Live Server** và bấm *Go Live* để mở file `index.html` trên trình duyệt.

---
*Phát triển bởi Dương Việt Hà (FTU Alumni Network).*
