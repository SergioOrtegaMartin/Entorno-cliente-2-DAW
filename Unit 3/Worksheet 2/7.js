// Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
// dimensión:
// a) Establecer los 10 elementos del array a cero.
// b) Añadir 1 a cada uno de los elementos del array.
// c) Muestra los valores del array separados por espacios.

function lanzamiento (){return Math.floor(Math.random() * (10 - 1) + 1);}

array = []
while (array.length < 10){
    array.push(lanzamiento())
}

// a) Establecer los 10 elementos del array a cero.
let array0 =array.map(numero => numero - numero);

// b) Añadir 1 a cada uno de los elementos del array.
let arraymas1 = array.map(numero => numero + 1);

// c) Muestra los valores del array separados por espacios.
cadena = array.join(' ')