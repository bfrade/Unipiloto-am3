angular.module('lab6', ['ngRoute', 'lab6.controllers', 'lab6.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/data', {
            controller: 'lab6Controller',
            templateUrl: 'views/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});