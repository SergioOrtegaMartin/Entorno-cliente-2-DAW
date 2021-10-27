//3. Crea una web que calcula la hipotenusa de un triangulo rectangulo (pidiendo al usuario el tamaño de los dos catetos).
//c^2= a^+b^2

var cateto1 = parseInt(prompt('Introduce un cateto'))
var cateto2 = parseInt(prompt('Introduce otro cateto'))

hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)

document.write(`La hipotenusa es ${hipotenusa}`)