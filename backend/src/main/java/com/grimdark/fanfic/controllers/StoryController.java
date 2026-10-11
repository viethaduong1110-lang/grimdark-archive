package com.grimdark.fanfic.controllers;

import com.grimdark.fanfic.models.Story;
import com.grimdark.fanfic.repositories.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "*")
public class StoryController {

    @Autowired
    private StoryRepository storyRepository;

 // API lấy danh sách truyện (có hỗ trợ lọc theo phe phái)
    @GetMapping
    public List<Story> getStories(@RequestParam(required = false) String faction) {
        if (faction != null && !faction.trim().isEmpty()) {
            return storyRepository.findByFaction(faction);
        }
        return storyRepository.findAll();
    }
    // API Thêm bộ truyện mới
    @PostMapping
    public Story createStory(@RequestBody Story newStory) {        // Gán cứng author_id = 1 (Tài khoản Admin bạn đã tạo ở phpMyAdmin) để tránh lỗi Khóa ngoại (Foreign Key 1452)
        if (newStory.getAuthorId() == null) {
            newStory.setAuthorId(1);
        }
        return storyRepository.save(newStory);
    }
}