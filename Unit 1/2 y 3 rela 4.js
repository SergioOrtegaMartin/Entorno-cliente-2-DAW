/*3. The Geometrizer
Calculate properties of a circle, searching the internet for definitions if not remember.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".*/
document.write("Ejercicio 2 relacion 4" + "<br>");


radio = 5;
pi = 3.14;
document.write("The circumference is " + (2* pi * radio) + "<br>")
document.write("The area is " + (pi * radio**2));

/*4. The Temperature Converter
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C.*/

document.write("<br>" + "<br>" + "Ejercicio 3 relacion 4" + "<br>");

celsius = 40;

document.write( celsius + "ºC" + " is " + (celsius * 1.8 + 32) + "ºF" + "<br>")

fahrenheit = 65;

document.write( fahrenheit + "ºF" + " is " + ((fahrenheit -32 )* 0.5555) + "ºC")




