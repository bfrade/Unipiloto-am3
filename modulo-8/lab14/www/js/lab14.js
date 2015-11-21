angular.module('lab14', ['ngCordova'])

    .controller('lab14Controller', function($scope, $cordovaDevice){

        document.addEventListener('deviceready', function(){

            var info = $cordovaDevice.getDevice();

            var data = [];

            angular.forEach(info, function(value, key){
                this.push(key + '= ' + value);
            }, data);


            $scope.information = data;
        
        }, false);
});