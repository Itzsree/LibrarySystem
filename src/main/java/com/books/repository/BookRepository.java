package com.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.books.model.Book;


public interface BookRepository extends JpaRepository<Book, Long>{

}
