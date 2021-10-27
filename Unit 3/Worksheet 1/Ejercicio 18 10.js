//Crear array con 10 numeros y ordenar creciente y decreciente
//Crear objetos con 3 o 4 campos y ordenar por varios campos {Marca : 'fiat'; modelo: 'multipla'; cv: 110}

numeros = [19 , 5 , 4 , 3 , 6 , 8 , 5 , 4 , 2 , 27]

numeros.sort(function(a, b) {
  return b - a;
});
