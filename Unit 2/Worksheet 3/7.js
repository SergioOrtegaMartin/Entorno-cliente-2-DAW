//7. Desarrolla una funcion que tomando como entrada una cadena de texto nos devuelva si es o no un palindromo.

//palindormo = 'dabale arroz a la zorra el abad'

cadena = prompt('Introduce una cadena')

function palindormo(cadena){
    lista = cadena.replaceAll(' ','').toLowerCase().split('').toString()  
    //Primero quitamos los espacios en blanco, despues lo ponemos minuscula, a continuacion se pasa a array y por ultimo se pasa a cadena
    copialista = cadena.replaceAll(' ','').toLowerCase().split('')
    inversa = copialista.reverse().toString()

    if (lista == inversa){
        document.write("Es un palindromo")
    }
    else{
        document.write("No es un palindromo")
    }


}

palindormo(cadena)