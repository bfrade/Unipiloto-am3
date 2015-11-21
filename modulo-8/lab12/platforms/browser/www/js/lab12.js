angular.module('lab12', ['ngCordova'])

.controller('lab12ontroller', function($scope, $cordovaCamera){

document.addEventListener("deviceready", function () {
  
  var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
  
      $scope.uri = imageURI;
    }, function(err) {
      // error
    });

  }, false);


document.addEventListener("deviceready", function () {
  var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.64 = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log('algo salio mal');
    });

  }, false);


});