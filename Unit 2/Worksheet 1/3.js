//3. Utilizando setTimeout() creo un contador hacia atras de 60 segundos.

segundos = 60
function cambiarsegundo(segundos){
    document.write(segundos + '<br>')
    segundos -=1
}

//document.write(contadoratras())

for (i=60 ; i>0 ; i--){
    setTimeout(function(){ document.write(cambiarsegundo(segundos)); }, 1000);
}

/*
3. Utilizando setTimeout() creo un contador hac a atr s de 60 segundos. í á
*/

// function mensaje() {
 
//     alert("Han pasado 60 segundos");
// }
    
// setTimeout(mensaje,60000);

