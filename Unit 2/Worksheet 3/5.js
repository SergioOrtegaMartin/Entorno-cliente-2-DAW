//5. Desarrolla una funcion que elimine los caracteres repetidos de una cadena de texto, incluidos los blancos. 

cadena = "Desarrolla una funcion que elimine los caracteres repetidos de una cadena de texto"

function eliminaRepetidos(cadena){
    conjunto= new Set(cadena);    //Set -- Conjuntos = que en Python

    for (elemento of conjunto){
        document.write(elemento)
    }
}

eliminaRepetidos(cadena)
