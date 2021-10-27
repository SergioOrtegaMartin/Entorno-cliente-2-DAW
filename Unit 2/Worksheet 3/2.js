/*2. Definir una funcion que muestre informacion sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la funcion 
determina si esa cadena esta formada solo por mayusculas, solo por minusculas  por una mezcla de ambas. */

cadena= prompt('Introduce una cadena')
document.write(`La cadena introducida es: "${cadena}" <br> `)

function infocadena(cadena){
    if (cadena == cadena.toUpperCase() ){
        document.write("La cadena está en mayusculas")
    }
    else if (cadena == cadena.toLowerCase() ){
        document.write("La cadena está en minusculas")
    }
    else{
        document.write("La cadena tiene letras mayusculas y minusculas")
    }

}

Document.write(infocadena(cadena))