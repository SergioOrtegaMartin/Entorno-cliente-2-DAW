//1. Crea un script que pregunte tu nombre, tus apellidos y tu edad y los muestra en la pagina web en parrafos distintos

n = prompt("Dime tu nombre")
a = prompt("Dime tus apellidos")
e = prompt("Dime tu edad")

document.write( "<p>" +"Ejercicio 1")

document.write("<p>" + n + "<p>" + a + "<p>" + e  )

//3. Crea un script que muestre en una ventana emergente "hola" y tu nombre (pidiendolo anteriormente) utilizando concatenacion

window.alert( "HOLA "  + n)

//4. Crea un script que pida al usuario su edad, nombre y apellidos y que ciclo estudia, y muestre esa informacion en pantalla en
//una ventana emergente

ciclo = prompt("Dime el ciclo que estudias")

window.alert( n + " " + a + " " + e +" " + ciclo)


//CONDICIONALES
//1. Crea un script que determine si un numero introducido por el usuario es par

numero = prompt("Dime un numero")

if (numero % 2 == 0){
    document.write("<p>" + "Es par")
}
else{
    document.write("<p>" + "No es par")
}

//2. Crea un script que determine si la edad del usuario es mayor de edad
edad = prompt("Dime tu edad")
if (edad >= 18){
    window.alert( "Es mayor de edad")
}
else{
    window.alert("No es mayor de edad")
}

//3. Crea un script que reciba la edad de un usuario y su localidad de nacimiento y muestre "Enhorabuna" si tiene mas de 25 años 
//y es de madrid
localidad = prompt("Dime tu localidad")

if (edad > 25 && localidad == "madrid"){

    window.alert("ENHORABUENA")
}


/*4.- crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.*/

numero4 = prompt("Dime un numero")

if (numero4 >= 100){
    window.alert(numero4 * 0.85)


}



/*5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
Eduardo	y	Clara).*/

nombre5 = prompt("Dime tu nombre (Ana, Pablo, Eduardo, Clara)")

if (nombre5 == "Pablo" || "Eduardo"){
    window.alert("Bienvenido")
}
if (nombre5 == "Ana" || "Clara"){
    window.alert("Bienvenida")
}



/*6.- crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script	
debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores. */

localizacion = prompt("Donde vives?")

if (localizacion == "Madrid" && edad > 18 && edad < 31){
    window.alert("Has ganado")
}

