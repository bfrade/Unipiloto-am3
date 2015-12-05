angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('Products', function($resource){


	this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create');


});