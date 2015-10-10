/* Array en JavaScript */

//'use strict';

var my_array = new Array();

my_array = ['3', '4', '1', '6','5','8','9','10','99','105'];

console.log(my_array);
console.log(my_array[8]);


/* metodos sobre los arreglos */

// Organizar elementos+
my_array.sort();
console.log(my_array);

// Agregando elemento despues de la ultima posicion

my_array.push('siete');
console.log(my_array);


// eliminar el primer elemento

my_array.shift();
console.log(my_array);


my_array.splice(5,2, 'dos','uno');
console.log(my_array);

