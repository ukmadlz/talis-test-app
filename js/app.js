/**
 * Angular Setup
 */

// App;lication Variable
var application = angular.module('testApp', [])
	// Routing
	.config(function($routeProvider){
		// Index
	    $routeProvider.when('/', {
	      templateUrl: 'partials/index.html'
	    })
	    // Search
	    .when('/search', {
	      templateUrl: 'partials/search.html'
	    })
	    // The Task
	    .when('/the-task', {
	      templateUrl: 'partials/the-task.html'
	    });
	});