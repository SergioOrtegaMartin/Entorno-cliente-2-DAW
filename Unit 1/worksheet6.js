/* EJERCICIO 4.10
Escribir un programa que muestre la frase “Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas. El
resultado debe ser el siguiente:

document.write( "<h1>" + "PRACTICA BUCLE FOR" +"</h1>")

for (i=1; i<7; i++ )
{
    document.write( "<h"+i+">" + "Cabecera h" + i +"<h"+i+">" )    
}
*/


/*   EJERCICIO 4.11
 
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.*/

/*
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
for (let i = 0; i < n_columnas; i++){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
} ;
document.write(`</tr>`);
document.write(`</table>`);
*/
/*   EJERCICIO 4.12
 
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.

Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.*/
/*
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
for (let i = 0; i < n_columnas; i++){
    if (i % 2 == 0){
    document.write(`<td width = "${ancho}" bgcolor='black'> &nbsp; </td>`)
    }
    else{
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)  
    }
} ;
document.write(`</tr>`);
document.write(`</table>`);

*/
/*   EJERCICIO 4.13
 
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.

Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for*/
/*
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
contador = 0
while (contador < n_columnas){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
    contador ++
} ;
document.write(`</tr>`);
document.write(`</table>`);
*/

/*
Ejercicio 4.14 

Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.

Adapta el ejercicio 4.12 utilizando un bucle while en vez de un bucle for*/
/*
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
contador = 0
while (contador < n_columnas){
    if (contador % 2 == 0){
    document.write(`<td width = "${ancho}" bgcolor='black'> &nbsp; </td>`)
    }
    else{
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)  
    }
    contador ++
} ;
document.write(`</tr>`);
document.write(`</table>`);*/

/*
EJERCICIO 4.15
Escribe un programa en JavaScript que consista en adivinar un número previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador 2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o menor que el número a adivinar.*/
/*
var n_adivinar = parseInt(prompt(`Introduce el número que quieras adivinar`))

intro != n_adivinar
while (intro != n_adivinar){
    var intro = parseInt(prompt(`Introduce el número`))

}
window.alert("Has acertado")
*/
/*
EJERCICIO 4.16
Adaptar el ejercicio 4.15. al bucle DO..WHILE 
Escribe un programa en JavaScript que consista en adivinar un número previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador 2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o menor que el número a adivinar
*/
/*
var n_adivinar = parseInt(prompt(`Introduce el número que quieras adivinar`))

intro != n_adivinar
do{
    var intro = parseInt(prompt(`Introduce el número`))
}
while (intro != n_adivinar)
window.alert("Has acertado")*/

/*
EJERCICIO 4.17
Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.
*/
/*
for (i = 1;i<=10;i++){
    document.write("Tabla del " + i);
    for(n = 1;n<=10;n++){
        document.write("<li>");
        document.write(i + " x " + n + " = " + i * n);
        document.write("</li>");
    }
    document.write("<br>");
}
    document.write("</ul>");
    */

/*EJERCICIO 4.18
Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura (en pixels) de sus
celdas. Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas.*/

/*
var n_filas = parseInt(prompt(`Introduce el número de filas que quieres que tenga la tabla`))
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr height = "${alto}"> `);
for (let i = 0; i < n_filas; i++){

     document.write(`<tr bgcolor ="white" height = "${alto}">`)

     for (let i = 0; i < n_columnas; i++){
         document.write(`<td width = "${ancho}"> &nbsp; </td>`)  
     } }

     document.write(`</tr>`)

 document.write(`</table>`);*/

 var ancho = prompt('Ancho:');

document.write(`<table border="0" cellspacing="2" bgcolor="black" width="200">`)
for (var e = 0; e < 9; e++){
	document.write(`<tr bgcolor="white" height= "${ancho}">`)

	if (e%2 == 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`)
			} 
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`)
			} 
		}
	}
	else if (e%2 != 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`)
			} 
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`)
			} 
		} 
	}	
	document.write('</tr>')
}
document.write('</table>')