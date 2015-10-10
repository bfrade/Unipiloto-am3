/*forma 1 variables estaticas quemadas en codigo*/

var cualquier = {};

cualquier = {
	a: 1,
	b: 8
};

var ejer = function(){

if(cualquier.a > cualquier.b){
	alert(cualquier.a + cualquier.b);
} else if(cualquier.a < cualquier.b){
	alert( cualquier.a * cualquier.b);
} else if(cualquier.a === cualquier.b){
	alert(cualquier.a / cualquier.b);
}

}
ejer();


/*forma 2 variables solicitadas a usuario*/

var c, d, result, operations;

c = prompt('Indique el primer valor');
d = prompt('Indique el segundo valor');

operations = function(c, d){
	if(c > d){

		result = parseInt(c) + parseInt(d);
	} 
	
	else if (c < d){

		result = parseInt(c) * parseInt(d);

	} else {

		result = parseInt(c) / parseInt(d);
	}

	alert('El resultado es: ' +result);
};

operations(c, d);
