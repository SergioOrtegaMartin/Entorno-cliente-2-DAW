/*1. Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un numero aleatorio entre esos dos valores.*/

//Un número aleatorio entre 0 y 1.
var a = Math.random()
document.write(a + '<br>')

//Igual pero entre 100 y 200.
var min = 100;
var max = 200;
var b = Math.random()*(max - min)+min;
document.write(b +'<br>')


//Pide dos valores al usuario y genera un numero aleatorio entre esos dos valores.
var maximo = parseInt(prompt('Introduce el maximo'))
var minimo = parseInt(prompt('Introduce el minimo'))
var c = Math.random()*(maximo - minimo)+minimo;
document.write(c)