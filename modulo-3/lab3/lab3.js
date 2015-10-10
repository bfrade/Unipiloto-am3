
/* objetos y funciones */
var my_object = new Object();

var other_object = {};


my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};

other_object = {
	saymyname: 'kryoz',
	correct: "don't forgite",
	help:'help!',
	uno: 'i',
	dos: 'need',
	tres: 'some',
	cuatro: 'body'

};

console.log(my_object.firstName);

console.log(my_object['lastName']);


/*interacion recorre todos los elementos*/
var key;

for(key in my_object){
	console.log(my_object[key]);
}


// Funciones

function test(){
	console.log('ejecutando una funcion'); /*.log imprime el elemento que invoque*/
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();

console.log(other_object.saymyname);
console.log(other_object.correct);

var key2;

for(key2 in other_object){
	console.log(other_object[key2]);
}