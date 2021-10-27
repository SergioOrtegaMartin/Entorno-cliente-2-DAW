// Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
// dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
// dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
// valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
// lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.


function lanzamiento (){return Math.floor(Math.random() * (7 - 1) + 1);}

sumatiradas = []

while (sumatiradas.length < 360000){
    sumatiradas.push(lanzamiento()+lanzamiento())
}

 var dos = 0 ; var tres = 0 ; var cuatro = 0 ; var cinco = 0 ; var seis = 0; var siete = 0 ; var ocho = 0 ; var nueve = 0 ; var diez = 0 ; var once = 0 ; var doce = 0 ;

for (elemento of sumatiradas){
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
    if (elemento == 7){
        siete +=1 }
    if (elemento == 8){
        ocho +=1 }
    if (elemento == 9){
        nueve +=1 }
    if (elemento == 10){
        diez +=1 }
    if (elemento == 11){
        once +=1 }
    if (elemento == 12){
        doce +=1 }
}


document.write(`El numero 2 se repite ${dos} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*dos).toFixed(2)}% <br>`)
document.write(`El numero 3 se repite ${tres} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*tres).toFixed(2)}% <br>`)
document.write(`El numero 4 se repite ${cuatro} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*cuatro).toFixed(2)}% <br>`)
document.write(`El numero 5 se repite ${cinco} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*cinco).toFixed(2)}% <br>`)
document.write(`El numero 6 se repite ${seis} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*seis).toFixed(2)}% <br>`)
document.write(`El numero 7 se repite ${siete} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*siete).toFixed(2)}% <br>`)
document.write(`El numero 8 se repite ${ocho} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*ocho).toFixed(2)}% <br>`)
document.write(`El numero 9 se repite ${nueve} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*nueve).toFixed(2)}% <br>`)
document.write(`El numero 10 se repite ${diez} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*diez).toFixed(2)}% <br>`)
document.write(`El numero 11 se repite ${once} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*once).toFixed(2)}% <br>`)
document.write(`El numero 12 se repite ${doce} veces, la posibilidad de que salga es de ${((100/sumatiradas.length)*doce).toFixed(2)}% <br>`)

