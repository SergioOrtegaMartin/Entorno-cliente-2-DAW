//5. Crea una web para resolver ecuaciones de segundo grado. Debera pedir por tanto los coeficientes y mostrar las soluciones posibles.

var a = parseInt(prompt("Introduce el valor a"))
var b = parseInt(prompt("Introduce el valor b"))
var c = parseInt(prompt("Introduce el valor c"))

solucion1 = (-b + Math.sqrt(b**2 -4*a*c))/(2*a)
solucion2 = (-b - Math.sqrt(b**2 -4*a*c))/(2*a)

document.write(solucion1+"<br>")
document.write(solucion2)