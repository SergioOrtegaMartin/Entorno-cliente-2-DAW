/*8. Implementa una funcion que tomando como entrada una cadena de texto sea 
capaz de contabilizar el numero de palabras. Ten en cuenta que entre dos palabras 
puede haber mas de 1 blanco, e incluso pueden aparecer al principio o final de esta */

cadena = prompt('Introduce una cadena')

function cuentapalabras(cadena){
    lista=cadena.replaceAll('  ', ' ').split(' ')
    document.write(`La cadena "${cadena}" tiene ${lista.length} palabras`)


}

cuentapalabras(cadena)