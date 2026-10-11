package com.grimdark.fanfic.models;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty; // Đặt import ở đây là đúng chuẩn!

@Entity
@Table(name = "chapters")
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "story_id")
    private Integer storyId;
    
    @JsonProperty("chapterNumber")
    private Integer chapterNumber;
    
    // Thêm annotation JsonProperty trực tiếp lên biến đã có
    @JsonProperty("content")
    @Column(columnDefinition = "LONGTEXT")
    private String content;

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStoryId() {
        return storyId;
    }

    public void setStoryId(Integer storyId) {
        this.storyId = storyId;
    }

    public Integer getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(Integer chapterNumber) {
        this.chapterNumber = chapterNumber;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}