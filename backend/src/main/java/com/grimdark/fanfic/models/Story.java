package com.grimdark.fanfic.models;

import jakarta.persistence.*;

@Entity
@Table(name = "stories")
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String summary;
    
    private String faction;
    
    private String status;
    @Column(name = "author_id")
    private Integer authorId;
   
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }
    @Column(name = "cover_image")
    private String coverImage;

    public String getCoverImage() {
        return coverImage;
    }
    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }
}