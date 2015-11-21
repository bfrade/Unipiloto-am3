angular.module('lab14', ['ngCordova'])

    .controller('lab14Controller', function($scope, $cordovaDevice){

        document.addEventListener('deviceready', function(){

            $scope.info = $cordovaDevice.getDevice();

            console.log($scope.info);
        
        }, false);
});