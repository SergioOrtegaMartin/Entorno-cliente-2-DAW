//3. Realizar un funcion que permita localizar todas las apariciones de una subcadena dentro de otra. 

cadena = prompt('Introduce una cadena')
cadena2 = prompt('Introduce una segunda cadena')
document.write(`Las cadenas introducidas son: "${cadena}" y "${cadena2}" <br> `)

function apariciones(cadena,cadena2){
    if (cadena.includes(cadena2) == true){
        document.write("La segunda cadena aparece en la primera")
    }
}

apariciones(cadena,cadena2)