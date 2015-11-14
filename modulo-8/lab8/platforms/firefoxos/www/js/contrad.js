angular.module('contrad', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/1', {
	    templateUrl : "views/1.html",
	    controller: 'mobileController'
	})

	.when('/2', {
		templateUrl: "views/2.html",
		controller: 'smartphoneController'
	})
	
	.when('/3', {
		templateUrl: "views/3.html",
		controller: 'smartphoneController'
	})

	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'otherwise.html'
	});
 }]);