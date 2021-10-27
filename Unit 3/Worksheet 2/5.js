// Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
// al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
// juntos los elementos pares y los impares. Después, volver a mostrar el array

function lanzamiento (){return Math.floor(Math.random() * (1000 - 1) + 1);}

function paresImpares(){
    array = []
    while (array.length < 100){
        array.push(lanzamiento())
    }

    ordenado = []
    for (elemento of array){
        if (elemento % 2 == 0){ordenado.unshift(elemento)}
        else {ordenado.push(elemento)}
    }
}