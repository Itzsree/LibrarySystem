package com.books.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.books.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	@Query("select r from Review r where r.book.id = :bookId")
	public List<Review> listByBookId(@Param("bookId") long bookId);
}
