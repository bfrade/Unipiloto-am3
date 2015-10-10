

/*funciones son la misma */


/*primera forma independisa los valores fuera de la funcion*/

var cualquier = {};

cualquier = {
	uno: 1,
	dos: 5
};

var sum = function(){
	console.log(cualquier.uno + cualquier.dos);
}
sum();


/*segunda forma mantiene los elementos internamente y solo afecta datos de la funcion*/

var sum2 = function(){
	tres = 10
	cuatro = 9
	console.log(tres + cuatro);
}
sum2();
