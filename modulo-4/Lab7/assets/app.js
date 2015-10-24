angular.module('lab6', ['ngRoute', 'lab6.controllers', 'lab6.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        
        .when('/', {
            templateUrl: 'views/contact.html',
            controller:"lab6Controller"
        })
        .otherwise({
            redirectTo: '/'
        });
});