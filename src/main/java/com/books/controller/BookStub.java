package com.books.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.books.model.Book;

public class BookStub {
	private static Map<Long, Book> books = new HashMap<Long, Book>();
	private static Long idIndex = 3L;

	//populate initial books
	static {
		Book a = new Book(1L,"0618260307","The Hobbit "," J. R. R. Tolkien","Houghton Mifflin","USA");
		books.put(1L, a);
		Book b = new Book(2L,"0908606664","Slinky Malinki","Lynley Dodd","Mallinson Rendel","NZ");
		books.put(2L, b);
		Book c = new Book(3L,"0393310728","How to Lie with Statistics","Darrell Huff","W. W. Norton","USA");
		books.put(3L, c);    
	}

	public static List<Book> list() {
		return new ArrayList<Book>(books.values());
	}

	public static Book create(Book book) {
		idIndex += idIndex;
		book.setId(idIndex);
		books.put(idIndex, book);
		return book;
	}

	public static Book get(Long id) {
		return books.get(id);
	}

	public static Book update(Long id, Book wreck) {
		books.put(id, wreck);
		return wreck;
	}

	public static Book delete(Long id) {
		return books.remove(id);
	}
}
