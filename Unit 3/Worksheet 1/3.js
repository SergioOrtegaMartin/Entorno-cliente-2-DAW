/*3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/ 

function lanzamiento (){return Math.floor(Math.random() * (7 - 1) + 1);}

var resultados = [];

while (resultados.length<6000){
    resultados.push(lanzamiento ())}

var uno = 0; var dos = 0 ; var tres = 0 ; var cuatro = 0 ; var cinco = 0 ; var seis = 0

for (elemento of resultados){
    if (elemento == 1){
        uno +=1 }
    if (elemento == 2){
        dos +=1 }
    if (elemento == 3){
        tres +=1 }
    if (elemento == 4){
        cuatro +=1 }
    if (elemento == 5){
        cinco +=1 }
    if (elemento == 6){
        seis +=1 }
}


document.write(`El numero 1 se repite ${uno} veces, la posibilidad de que salga es de ${((100/6000)*uno).toFixed(2)}% <br>`)
document.write(`El numero 2 se repite ${dos} veces, la posibilidad de que salga es de ${((100/6000)*dos).toFixed(2)}% <br>`)
document.write(`El numero 3 se repite ${tres} veces, la posibilidad de que salga es de ${((100/6000)*tres).toFixed(2)}% <br>`)
document.write(`El numero 4 se repite ${cuatro} veces, la posibilidad de que salga es de ${((100/6000)*cuatro).toFixed(2)}% <br>`)
document.write(`El numero 5 se repite ${cinco} veces, la posibilidad de que salga es de ${((100/6000)*cinco).toFixed(2)}% <br>`)
document.write(`El numero 6 se repite ${seis} veces, la posibilidad de que salga es de ${((100/6000)*seis).toFixed(2)}% <br>`)
