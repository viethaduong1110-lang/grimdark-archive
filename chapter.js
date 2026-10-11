const urlParams = new URLSearchParams(window.location.search);
const storyId = urlParams.get('storyId');

// Cấu hình địa chỉ Backend Spring Boot
const API_BASE_URL = 'http://localhost:8080/api';

// 2. Chạy hàm lấy dữ liệu ngay khi load file
if (storyId) {
    loadChapterContent(storyId);
} else {
    document.getElementById("chapterContent").innerHTML = "<p class='text-red-500 text-center'>Lỗi: Không tìm thấy ID của Data-slate.</p>";
    document.getElementById("storyTitle").innerText = "LỖI KẾT NỐI VỚI WARP";
}

// 3. Hàm gọi API
async function loadChapterContent(id) {
    try {
        // Gọi API đến Controller Java mà bạn đã viết
        const response = await fetch(`${API_BASE_URL}/chapters/story/${id}`);
        
        if (!response.ok) throw new Error("Không thể kết nối đến Cogitator Server");
        
        const chapters = await response.json();
        const contentDiv = document.getElementById("chapterContent");
        
        // Kiểm tra xem truyện này đã có chương nào trong Database
        if (chapters.length > 0) {
            // Lấy chương đầu tiên (phần tử số 0 trong mảng)
            contentDiv.innerHTML = chapters[0].content;
            document.getElementById("storyTitle").innerText = `Chương ${chapters[0].chapterNumber}`;
        } else {
            contentDiv.innerHTML = "<p class='text-center text-gray-500'>Tác giả chưa viết chương nào cho bộ truyện này...</p>";
            document.getElementById("storyTitle").innerText = "Dữ Liệu Trống";
        }
        
    } catch (error) {
        console.error("Lỗi:", error);
        document.getElementById("chapterContent").innerHTML = "<p class='text-red-500 text-center'>Không thể tải nội dung. Hãy kiểm tra xem Backend Spring Boot đã chạy chưa.</p>";
    }
}