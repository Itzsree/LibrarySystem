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

import com.books.model.Review;
import com.books.repository.ReviewRepository;

@Controller
@RestController
@RequestMapping("api/v1/")
public class ReviewController {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@RequestMapping(value="reviews",method=RequestMethod.GET)
	public List<Review> list(){
		List<Review> reviewsList=reviewRepository.findAll();
		return reviewsList;
	}
	
	
	@RequestMapping(value="reviews",method=RequestMethod.POST)
	public Review create(@RequestBody Review review){
		return reviewRepository.saveAndFlush(review);
	}
	
	
	@RequestMapping(value="reviews/{id}",method=RequestMethod.GET)
	public Review get(@PathVariable long id){
		System.out.println("get : reviews");
		Review review=reviewRepository.findOne(id);
		return review;
	}
	
	@RequestMapping(value="reviews/{id}",method=RequestMethod.PUT)
	public Review update(@PathVariable long id,@RequestBody Review review){
		System.out.println("update : reviews");
		Review updatedReview=reviewRepository.findOne(id);
		BeanUtils.copyProperties(review, updatedReview);		
		return reviewRepository.saveAndFlush(updatedReview);
	}
	
	@RequestMapping(value="reviews/{id}",method=RequestMethod.DELETE)
	public Review delete(@PathVariable long id){
		System.out.println("delete : reviews");
		Review deletedReview=reviewRepository.findOne(id);
		reviewRepository.delete(id);
		return deletedReview;
	}
	

}
