package com.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.books.model.User;

public interface UserRepository  extends JpaRepository<User, Long>{

}
