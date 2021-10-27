/*Condicionales	o	IF
1.- crea	un	script	que	determine	si	un	número	introducido	por	el	usuario	es	par.*/
numero = prompt('Dime un número:')
if (numero%2 == 0)
{
    alert("ese numero es par")
}
else
{
    alert("ese numero es impar")
}

/*2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	es	mayor	de	edad.*/
//parseInt

edad = parseInt(prompt('Dime tu edad:'))
if (edad < 17)
{
    alert("eres menor de edad")
}
else
{
    alert("eres mayor de edad")
}

/*3.- crea	un	script	que	reciba	la	edad	de	un	usuario,	y	su	localidad	de	nacimiento	y	muestre	en	pantalla	
“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.*/

edad = prompt('Dime tu edad:')
ciudad = prompt('Dime donde naciste:')
if (edad > 25 && ciudad == ('Madrid'))
{
    alert("Enhorabuena")
}
else
{
    alert("No hay premio para ti ):")
}


/*4.- crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.*/

numero = parseInt(prompt('Dime un numero para aplicarle un descuento:'))
if (numero > 100)
{
    alert( 'Aplicando descuento. Tu nuevo número es: ' + (numero -(numero * 0.15)))
}
else
{
    alert("Lo siento, no puedo aplicar ningún descuento")
}

/*5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
Eduardo	y	Clara).*/

nombre = prompt('Dime tu nombre:')
if ( nombre === "Pablo" || nombre === "Eduardo")
{
    alert("Bienvenido")
}
if (nombre === "Ana" || nombre === "Clara")
{
    alert("Bienvenida")
}
if ( nombre != "Pablo" && nombre != "Eduardo" && nombre != "Ana" && nombre != "Clara")
{
    alert("No te conozco, lo siento")
}
/*6.- crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script	
debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.*/

ciudad = prompt('Dime donde vives:')
edad = prompt('Dime tu edad:')
if (30 >= edad >= 18 && ciudad == ('Madrid'))
{
    alert("Bien. Usted puede acceder al	carnet	de	empresarios	emprendedores")
}
else
{
    alert("Lo siento. Usted no puede acceder al	carnet de empresarios emprendedores")
}