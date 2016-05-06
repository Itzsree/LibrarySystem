package com.books.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.books.model.Book;
import com.books.repository.BookRepository;

@Controller
@RestController
@RequestMapping("api/v1/")
public class BookController {
	
	private final static Logger LOGGER= Logger.getLogger(BookController.class.getName());;
	
	@Autowired
	private BookRepository bookRepository;
	
	@RequestMapping(value="books",method=RequestMethod.GET)
	public List<Book> list(){
		//return ShipwreckStub.list();
		return bookRepository.findAll();
	}
	
	@RequestMapping(value="books",method=RequestMethod.POST)
	public Book create(@RequestBody Book book){
		//return ShipwreckStub.create(shipwreck);
		return bookRepository.saveAndFlush(book);
	}
	
	@RequestMapping(value="books/{id}",method=RequestMethod.GET)
	public Book get(@PathVariable long id){
		//return ShipwreckStub.get(id);
		return bookRepository.findOne(id);
	}
	
	@RequestMapping(value="books/{id}",method=RequestMethod.PUT)
	public Book update(@PathVariable long id, @RequestBody Book book){
		//return ShipwreckStub.update(id, shipwreck);
		Book bookExisting = bookRepository.findOne(id);
		BeanUtils.copyProperties(book, bookExisting);
		return bookRepository.saveAndFlush(bookExisting);
	}
	
	@RequestMapping(value="books/{id}",method=RequestMethod.DELETE)
	public Book delete(@PathVariable long id){
		//return ShipwreckStub.delete(id);
		Book deletedBook = bookRepository.findOne(id);
		bookRepository.delete(id);
		return deletedBook;
	}


}
