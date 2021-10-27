// Escriba ejemplos con matrices para resolver los siguientes problemas utilizando solo métodos de matriz (como iteradores, etc.):
// encontrar el número más grande  --
// encontrar la cadena más larga   --
// encontrar números pares         --
// encontrar números impares       --
// encontrar palabras que contengan 'es'    --
// afirmar que todos los números son divisibles por tres  --
// unir dos matrices           --  
// ordenar la matriz unida de menor a mayor --
// eliminar la primera palabra de la matriz
// colocar una nueva palabra al comienzo de la matriz
// reemplazar algunos elementos
numeros = [1 , 5 , 8 , 12 , 27 , 50 , 3]
palabras = ['Pepe','Mesa','Espantar', 'Bolsa','Jaen', 'Estrangular']


// encontrar el número más grande

numerogrande = 0;
for (numero of numeros){
    if (numero > numerogrande){
        numerogrande = numero
    }
}

// encontrar la cadena más larga
totales  = [];
for( palabra of palabras) {
  totales.push(palabra.length);
}

maximo = Math.max.apply(null, totales);
palabralarga= 0;
for (elemento of palabras) {
  if (elemento.length === maximo) {
    palabralarga = elemento;
  }
}

// encontrar números pares
// encontrar números impares
impares = []
pares = []
for (numero of numeros){
    if (numero % 2  == 0){
        pares.push(numero)
    }else{impares.push(numero)}
}

// encontrar palabras que contengan 'es'
contienenes = [];
for (i=0 ; i<palabras.length ; i++){
    if (palabras[i].includes('es') ||palabras[i].includes('Es')||palabras[i].includes('ES')){
        contienenes.push(palabras[i])
    }
}

// afirmar que todos los números son divisibles por tres
for (numero of numeros){
    if (numero % 3  == 0){
        console.log(`El numero ${numero} es divisible entre 3`)
    }else{console.log(`El numero ${numero} no es divisible entre 3`)
}}

// unir dos matrices
suma = impares.concat(pares);

// ordenar la matriz unida de menor a mayor
ordenada = suma.sort((a, b) => a - b );

// eliminar la primera palabra de la matriz
palabras.slice(0,1)


// colocar una nueva palabra al comienzo de la matriz
palabras.slice(0,0,'Sergio')

// reemplazar algunos elementos

palabras.slice(0,1, 'Mikel')
