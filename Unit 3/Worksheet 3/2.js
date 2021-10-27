// Sobre una matriz con nombres, busque todas las entradas cuyo nombre comience con 'J', 
// crea un array combinada de solo las iniciales del nombre y luego ordene alfabéticamente
palabras = ['Pepe','Mesa','Espantar', 'Bolsa','Jaen', 'Estrangular', 'Jabali','jamon', 'jinete']

empiezaJ = [];
for (i=0 ; i<palabras.length ; i++){
    if (palabras[i].startsWith('J') ||palabras[i].includes('j')){
        empiezaJ.push(palabras[i])
    }
}

empiezaJordenadas = empiezaJ.sort()