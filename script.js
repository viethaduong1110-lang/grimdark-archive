// Hàm gọi API từ Backend Spring Boot (có hỗ trợ lọc theo phe phái)
async function fetchStories(faction = "") {
    try {
        let url = 'http://localhost:8080/api/stories';
        
        // Nếu có bấm chọn phe phái, gắn thêm tham số vào đuôi URL
        if (faction) {
            url += `?faction=${encodeURIComponent(faction)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const storiesData = await response.json();
        
        // Gọi hàm render để in ra màn hình
        renderStories(storiesData);
        
    } catch (error) {
        console.error("Lỗi khi tải dữ liệu từ Backend:", error);
        const container = document.getElementById("storyList");
        if (container) {
            container.innerHTML = `<p class="text-[#8B0000] col-span-3 text-center font-tech text-lg">Lỗi kết nối máy chủ! Không thể lấy dữ liệu Data-slates. Hãy chắc chắn Spring Boot đang chạy.</p>`;
        }
    }
}

// Hàm hiển thị danh sách truyện lên giao diện
function renderStories(stories) {
    const container = document.getElementById("storyList");
    if (!container) return;

    // Hiển thị thông báo nếu lọc phe phái mà chưa có truyện nào
    if (stories.length === 0) {
        container.innerHTML = `<p class="text-gray-500 col-span-3 text-center font-tech text-lg mt-8">Chưa có Data-slate nào thuộc phe phái này được ghi nhận trong lưu trữ...</p>`;
        return;
    }

    // Map dữ liệu thành các thẻ HTML
    container.innerHTML = stories.map(story => `
        <div class="bg-[#0f0f11] border border-[#4a4a52] hover:border-[#8B0000] transition-all duration-300 flex flex-col h-full group relative shadow-lg">
            
            <!-- 1. Ảnh bìa (Hiển thị ảnh cục bộ từ thư mục nếu có, nếu không dùng ảnh mặc định) -->
            <a href="chapter.html?storyId=${story.id}" class="h-48 w-full bg-[#121212] relative overflow-hidden block cursor-pointer">
                <img src="${story.coverImage ? story.coverImage : './horus.jpg'}" 
     class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div class="absolute top-2 right-2 bg-[#8B0000] text-white text-xs px-2.5 py-1 uppercase font-bold tracking-wider shadow-md">${story.status || 'Hoàn thành'}</div>
            </a>
            
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-[10px] text-[#B8860B] uppercase tracking-widest border border-[#B8860B]/30 px-2.5 py-0.5 bg-[#B8860B]/10 font-bold">${story.faction || 'Không rõ'}</span>
                </div>
                
                <!-- 2. Tiêu đề truyện -->
                <a href="chapter.html?storyId=${story.id}" class="cursor-pointer">
                    <h3 class="font-gothic text-xl text-white font-bold mb-2 group-hover:text-[#8B0000] transition-colors line-clamp-2">${story.title}</h3>
                </a>
                
                <p class="text-sm text-gray-400 font-tech mb-4 line-clamp-3 leading-relaxed">${story.summary || 'Không có tóm tắt...'}</p>
                
                <div class="mt-auto pt-4 border-t border-gray-800 flex justify-end">
                    
                    <!-- 3. Nút Đọc truyện -->
                    <a href="chapter.html?storyId=${story.id}" class="text-[#8B0000] hover:text-white font-tech uppercase tracking-widest text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer z-10 relative">
                        Đọc Truyện <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    
                </div>
            </div>
        </div>
    `).join("");
}

// Khởi chạy hệ thống khi trang web vừa load xong (Tải tất cả truyện)
document.addEventListener("DOMContentLoaded", () => {
    fetchStories('');
});