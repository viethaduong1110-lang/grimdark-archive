package com.grimdark.fanfic.controllers;

import com.grimdark.fanfic.models.Chapter;
import com.grimdark.fanfic.repositories.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/chapters")
@CrossOrigin(origins = "*")
public class ChapterController {

    @Autowired
    private ChapterRepository chapterRepository;

    // API lấy các chương theo ID của truyện
    @GetMapping("/story/{storyId}")
    public List<Chapter> getChaptersByStory(@PathVariable Integer storyId) {
        return chapterRepository.findByStoryId(storyId);
    }
}