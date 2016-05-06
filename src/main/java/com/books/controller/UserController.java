package com.books.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.books.model.Book;
import com.books.model.User;
import com.books.repository.UserRepository;

@Controller
@RestController
@RequestMapping("api/v1/")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value="users",method=RequestMethod.GET)
	public List<User> list(){
		return userRepository.findAll();
	}
	
	@RequestMapping(value="users",method=RequestMethod.POST)
	public User create(@RequestBody User user){
		return userRepository.saveAndFlush(user);
	}
	
	@RequestMapping(value="users/{id}",method=RequestMethod.GET)
	public User get(@PathVariable long id){
		return userRepository.findOne(id);
	}
	
	@RequestMapping(value="users/{id}",method=RequestMethod.PUT)
	public User update(@PathVariable long id, @RequestBody User user){
		User userExisting = userRepository.findOne(id);
		BeanUtils.copyProperties(user, userExisting);
		return userRepository.saveAndFlush(userExisting);
	}
	
	@RequestMapping(value="users/{id}",method=RequestMethod.DELETE)
	public User delete(@PathVariable long id, @RequestBody User user){
		User userExisting = userRepository.findOne(id);
		userRepository.delete(userExisting);
		return userExisting;
	}

}
