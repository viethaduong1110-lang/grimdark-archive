package com.grimdark.fanfic.repositories;

import com.grimdark.fanfic.models.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List; // Bắt buộc phải có dòng này để Java hiểu 'List' là gì

@Repository
public interface StoryRepository extends JpaRepository<Story, Integer> {
    List<Story> findByFaction(String faction);
}