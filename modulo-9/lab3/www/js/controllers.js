angular.module('app.controllers', ['ui.router', 'app.services'])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('listCtrl', function ($scope, Products) {

    Products.item_list(function(data){

        $scope.list = data;

        console.log($scope.list);
 	});
});