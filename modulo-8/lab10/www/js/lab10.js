angular.module('lab10', ['ngCordova'])

.controller('lab10Controller', function($scope, $cordovaDialogs){

	$scope.active_alert =function(){
		$cordovaDialogs.alert('alert', 'Hola!', 'Aceptar')
	    .then(function() {
	      		$scope.lab="lab10"
	    });
	}

	$scope.active_confirm =function(){
 		 $cordovaDialogs.confirm('confirme', 'que hola', ['OK','cancel'])
   		 .then(function(buttonIndex) {
    	  // no button = 0, 'OK' = 1, 'Cancel' = 2
    	  if (buttonIndex === 0) {	
    	  	$scope.lab="no selecciono";
    	  	}

    	  else if (buttonIndex ===1) {
		 	$scope.lab="confirmo";    	  	
		    }	

    	  else if (buttonIndex ===2) {
			$scope.lab="cancelo";
			}
    	 
   		 });
	}


	$scope.active_prompt =function(){
 		 $cordovaDialogs.prompt('prompt', 'no saluda?', ['OK','cancel'], 'responda')
    	.then(function(result) {
    	 var input = result.input1;
     	 // no button = 0, 'OK' = 1, 'Cancel' = 2
    	 var btnIndex = result.buttonIndex;
		     
		 if (btnIndex === 1) {
		  	console.log('el input es: ' + input);
		 } 
		 else if (btnIndex === 2){

		   	console.log('Usted cancelo');
		 }

		 else if (btnIndex === 0){

		   	console.log('');
		 }

  		 });
	}

	$scope.active_beep =function(){
  	// beep 3 times
 	 $cordovaDialogs.beep(5);
	}

});









