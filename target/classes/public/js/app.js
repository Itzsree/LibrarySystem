(function() {
	var app = angular.module('app', ['ui.router', 'navController', 'ngAnimate', 'ui.bootstrap', 'ngResource', 'app.controllers', 'app.services'])

	// define for requirejs loaded modules
	define('app', [], function() { return app; });

	// function for dynamic load with requirejs of a javascript module for use with a view
	// in the state definition call add property `resolve: req('/views/ui.js')`
	// or `resolve: req(['/views/ui.js'])`
	// or `resolve: req('views/ui')`
	function req(deps) {
		if (typeof deps === 'string') deps = [deps];
		return {
			deps: function ($q, $rootScope) {
				var deferred = $q.defer();
				require(deps, function() {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
					deferred.resolve();
				});
				return deferred.promise;
			}
		}
	}

	app.config(function($stateProvider, $urlRouterProvider, $controllerProvider){
		var origController = app.controller
		app.controller = function (name, constructor){
			$controllerProvider.register(name, constructor);
			return origController.apply(this, arguments);
		}

		var viewsPrefix = 'views/';

		// For any unmatched url, send to /
		$urlRouterProvider.otherwise("/")

		$stateProvider
			// you can set this to no template if you just want to use the html in the page
			.state('home', {
				url: "/",
				templateUrl: viewsPrefix + "home.html",
				data: {
					pageTitle: 'Home'
				}
			})
			.state('books',{
	        url:'/books',
	        templateUrl: viewsPrefix + 'books.html',
	        controller:'BookListController'
	    }).state('viewBook',{
	       url:'/books/:id/view',
	       templateUrl: viewsPrefix + 'book-view.html',
	       controller:'BookViewController'
	    }).state('newBook',{
	        url:'/books/new',
	        templateUrl: viewsPrefix + 'book-add.html',
	        controller:'BookCreateController'
	    }).state('editBook',{
	        url:'/books/:id/edit',
	        templateUrl: viewsPrefix + 'book-edit.html',
	        controller:'BookEditController'
	    }).state('users',{
	        url:'/users',
	        templateUrl: viewsPrefix + 'users.html',
	        controller:'UserListController'
	    }).state('viewUser',{
	       url:'/users/:id/view',
	       templateUrl: viewsPrefix + 'user-view.html',
	       controller:'UserViewController'
	    }).state('newUser',{
	        url:'/users/new',
	        templateUrl: viewsPrefix + 'user-add.html',
	        controller:'UserCreateController'
	    }).state('editUser',{
	        url:'/users/:id/edit',
	        templateUrl: viewsPrefix + 'user-edit.html',
	        controller:'UserEditController'
	    }).state('reviews',{
	        url:'/reviews',
	        templateUrl: viewsPrefix + 'reviews.html',
	        controller:'ReviewListController'
	    }).state('viewReview',{
	       url:'/reviews/:id/view',
	       templateUrl: viewsPrefix + 'review-view.html',
	       controller:'ReviewViewController'
	    }).state('newReview',{
	        url:'/reviews/new',
	        templateUrl: viewsPrefix + 'review-add.html',
	        controller:'ReviewCreateController'
	    }).state('editReview',{
	        url:'/reviews/:id/edit',
	        templateUrl: viewsPrefix + 'review-edit.html',
	        controller:'ReviewEditController'
	    })
	})
	.directive('updateTitle', ['$rootScope', '$timeout',
		function($rootScope, $timeout) {
			return {
				link: function(scope, element) {
					var listener = function(event, toState) {
						var title = 'Project Name';
						if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle + ' - ' + title;
						$timeout(function() {
							element.text(title);
						}, 0, false);
					};

					$rootScope.$on('$stateChangeSuccess', listener);
				}
			};
		}
	]);
}());
