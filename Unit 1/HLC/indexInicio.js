/*Ejercicios	JavaScript	 iniciación
Scripts	de	interacción	con	el	usuario
1.- crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	página	web	en	
párrafos	distintos.*/
var nombre = prompt('Dime tu nombre:');
var apellidos = prompt('Dime tus apellidos:');
var edad = prompt('Dime tu edad:');
document.write('Esta persona de llama ' + nombre +' '+ apellidos +' y tiene ' + edad +' años');


/*2.- crea	un	script	que	muestre	en	una	ventana	emergente	“hola”	y	tu	nombre	(pidiéndolo	
anteriormente)	utilizando	concatenación	de	cadenas.
Se	concadena	cadenas	utilizando	el	símbolo	“+”.*/
alert("Hola " + nombre);

/*3.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
información	en	pantalla	en	una	ventana	emergente.*/
var ciclo = prompt('Dime que estudias:');
alert('Esta persona se llama ' + nombre +' '+apellidos+' tiene '+edad+' años y estudia '+ciclo );



