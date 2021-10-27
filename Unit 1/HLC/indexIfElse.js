/*IF	/	ELSE
1.- crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en	
pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.*/

nombre = prompt('Dime tu nombre:')
apellidos = ('García Ruiz')
if(nombre === "Ricardo")
{
    alert(apellidos)
}
else
{
    document.write(apellidos)
}

/*2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	puede	jubilarse	o	no	(la	jubilación	se	
alcanza	con	67 años).*/

edad = parseInt(prompt('Dime tu edad'))
if(edad >= 67)
{
    alert('Genial, usted puede jubilarse')
}
else
{
    alert('Lo siento, usted no puede jubilarse')
}
/*3.- Crea	un	script	que	pregunte	la	edad,	y	determine	si	debes	estar	en	el	jardín	de	infancia	(menores	de	
5	años),	en	primaria	(entre	6	y	11),	en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	(entre	17	y	21)	o	en	
la	Universidad	(más	de	21).*/

edad = parseInt(prompt('Dime tu edad'))
if (edad <= 5)
{
    alert('Usted debe estar en el jardin de infancia')
}
if (6 <= edad && edad <= 11)
{
    alert('Usted debe estar en primaria')
}
if (12 <= edad && edad <= 16)
{
    alert('Usted debe estar en la ESO')
}
if (17 <= edad && edad <= 21)
{
    alert('Usted debe estar en BTO o en un ciclo formativo')
}
if (edad > 21)
{
    alert('Usted debe estar en la Universidad')
}

/*4.- Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso	
de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el	
usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene	
hermanos	se	mostrará	la	cantidad	sin	descuento.*/
hermanos =parseInt(prompt('Dime cuantos hermanos tienes'))
n = parseInt(prompt('Dime un número'))
if ( hermanos >= 3)
{
    alert('Su nueva cantidad es ' + (n-(n*0.15)))
}
if ( hermanos < 3)
{
    alert('Su nueva cantidad es ' + (n-(n*0.05)))
}
if ( hermanos = 0)
{
    alert('Su nueva cantidad es ' + n)
}
/*5.- Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	dos	trabajos	y	determine	si	la	media	es	superior	
a	5	para	aprobar	la	asignatura	(75%	exámenes	y	25%	trabajos)	y	4.5	en	todos	ellos.*/

examen =parseInt(prompt('Dime la nota del primer examen'))
examen2 =parseInt(prompt('Dime la nota del segundo examen'))
trabajo1 =parseInt(prompt('Dime la nota del primer trabajo'))
trabajo2 =parseInt(prompt('Dime la nota del segundo trabajo'))

if ( (examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >=4.5 && trabajo2 >= 4.5) && (((examen1 + examen2)*0.75) +((trabajo1 +trabajo2)*0.25)) >= 5)
{
    alert("Felicidades, has aprobado")
}
else
{
    alert('Lo siento, usted ha suspendido')
}
