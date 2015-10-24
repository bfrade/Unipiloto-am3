angular.module('lab6.controllers', ['lab6.services'])
.controller('lab6Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});