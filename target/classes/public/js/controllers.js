angular.module('app.controllers', []).controller('BookListController', function($scope, $http, $state, popupService, $window, Book) {
	
  $scope.books = Book.query(); //fetch all books. Issues a GET to /api/vi/books
  
  $scope.deleteBook = function(book) { // Delete a Book. Issues a DELETE to /api/v1/books/:id
    if (popupService.showPopup('Really delete this?')) {
      book.$delete(function() {
        $scope.books = Book.query(); 
        $state.go('books');
      });
    }
  };
}).controller('BookViewController', function($scope, $stateParams, Book) {
  $scope.book = Book.get({ id: $stateParams.id }); //Get a single book.Issues a GET to /api/v1/books/:id
}).controller('BookCreateController', function($scope, $state, $stateParams, Book) {
  $scope.book = new Book();  //create new book instance. Properties will be set via ng-model on UI

  $scope.addBook = function() { //create a new book. Issues a POST to /api/v1/books
    $scope.book.$save(function() {
      $state.go('books'); // on success go back to the list i.e. books state.
    });
  };
}).controller('BookEditController', function($scope, $state, $stateParams, Book) {
  $scope.updateBook = function() { //Update the edited book. Issues a PUT to /api/v1/books/:id
    $scope.book.$update(function() {
      $state.go('books'); // on success go back to the list i.e. books state.
    });
  };

  $scope.loadBook = function() { //Issues a GET request to /api/v1/books/:id to get a book to update
    $scope.book = Book.get({ id: $stateParams.id });
  };

  $scope.loadBook(); // Load a book which can be edited on UI
}).controller('UserListController', function($scope, $http, $state, popupService, $window, User) {
	
	  $scope.users = User.query(); //fetch all users. Issues a GET to /api/vi/users
	  
	  $scope.deleteUser = function(user) { // Delete a User. Issues a DELETE to /api/v1/users/:id
	    if (popupService.showPopup('Really delete this?')) {
	      user.$delete(function() {
	        $scope.users = User.query(); 
	        $state.go('users');
	      });
	    }
	  };
	}).controller('UserViewController', function($scope, $stateParams, User) {
	  $scope.user = User.get({ id: $stateParams.id }); //Get a single shipwreck.Issues a GET to /api/v1/users/:id
	}).controller('UserCreateController', function($scope, $state, $stateParams, User) {
	  $scope.user = new User();  //create new user instance. Properties will be set via ng-model on UI

	  $scope.addUser = function() { //create a new user. Issues a POST to /api/v1/users
		console.log('save id : ' +  $scope.user.userName);
		console.log('$save  : ' +   $scope.user.$save);
	    $scope.user.$save(function() {
	      $state.go('users'); // on success go back to the list i.e. users state.
	    });
	  };
	}).controller('UserEditController', function($scope, $state, $stateParams, User) {
	  $scope.updateUser = function() { //Update the edited user. Issues a PUT to /api/v1/users/:id
	    $scope.user.$update(function() {
	      $state.go('users'); // on success go back to the list i.e. users state.
	    });
	  };

	  $scope.loadUser = function() { //Issues a GET request to /api/v1/users/:id to get a user to update
	    $scope.user = User.get({ id: $stateParams.id });
	  };

	  $scope.loadUser(); // Load a user which can be edited on UI
}).controller('ReviewListController', function($scope, $http, $state, popupService, $window, Review) {
	
	  $scope.reviews = Review.query(); //fetch all reviews. Issues a GET to /api/vi/reviews
	  
	  $scope.deleteReview = function(review) { // Delete a Review. Issues a DELETE to /api/v1/reviews/:id
	    if (popupService.showPopup('Really delete this?')) {
	      review.$delete(function() {
	        $scope.reviews = Review.query(); 
	        $state.go('reviews');
	      });
	    }
	  };
	}).controller('ReviewViewController', function($scope, $stateParams, Review) {
	  $scope.review = Review.get({ id: $stateParams.id }); //Get a single shipwreck.Issues a GET to /api/v1/reviews/:id
	}).controller('ReviewCreateController', function($scope, $state, $stateParams, Review) {
	  $scope.review = new Review();  //create new review instance. Properties will be set via ng-model on UI

	  $scope.addReview = function() { //create a new review. Issues a POST to /api/v1/reviews
		console.log('save id : ' +  $scope.review.id);
		console.log('save content : ' +  $scope.review.content);
		console.log('save book id : ' +  $scope.review.book);
		console.log('$save  : ' +   $scope.review.$save);
	    $scope.review.$save(function() {
	      console.log('save 2');
	      $state.go('reviews'); // on success go back to the list i.e. reviews state.
	      console.log('save 3');
	    });
	  };
	}).controller('ReviewEditController', function($scope, $state, $stateParams, Review) {
	  $scope.updateReview = function() { //Update the edited review. Issues a PUT to /api/v1/reviews/:id
	    $scope.review.$update(function() {
	      $state.go('reviews'); // on success go back to the list i.e. reviews state.
	    });
	  };

	  $scope.loadReview = function() { //Issues a GET request to /api/v1/reviews/:id to get a review to update
	    $scope.review = Review.get({ id: $stateParams.id });
	  };

	  $scope.loadReview(); // Load a review which can be edited on UI
});



