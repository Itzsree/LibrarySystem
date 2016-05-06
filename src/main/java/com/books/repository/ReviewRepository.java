package com.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.books.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{

}
