angular.module('initial_spi.controllers', [])

.controller('productsController', function($scope, $http){
    var url = "data.json";
        $http.get(url).success(function(response){
       		
            $scope.products = response;
});
})


.controller('contactController', function($scope, $http){
localStorage.getItem('name');
localStorage.getItem('email'); 
localStorage.getItem('message');    
        $http.get(url).success(function(response){
            $scope.contact = response;
})