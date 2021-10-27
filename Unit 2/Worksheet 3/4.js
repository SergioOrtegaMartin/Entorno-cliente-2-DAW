/*4. Crea una funcion que tomando una cadena de texto como entrada coloque todas
sus consonantes al principio y todas sus vocales al final de la misma, eliminando los blancos */

cadena = prompt('Introduce una cadena')
document.write(`La cadena introducida es: "${cadena}" <br> `)


function ordenavocales(cadena){
    vocales = ['a','e','i','o','u','A','E','I','O','U']
    separada = cadena.split('')
    vocalescadena = []
    consonantescadena = []
    for (i=0 ; i<separada.length ; i++){
        if (vocales.includes(cadena[i])){
            vocalescadena.push(cadena[i])
        }
        else if (vocales.includes(separada[i]) == false){
            consonantescadena.push(separada[i])

        }
        
    }
    cadenavocales= vocalescadena.join().replaceAll(',',' ')
    cadenaconsonantes= consonantescadena.join().replaceAll(',',' ')
    return ((cadenaconsonantes + cadenavocales).replaceAll(' ' , ''))
    

}
document.write(ordenavocales(cadena))

