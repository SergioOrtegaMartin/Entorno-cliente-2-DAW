/*SWITCH
1.- Crea	un	script	que	pregunte	al	usuario	por	el	nombre	de	un	mes,	y	muestre	el	número	de	días	que	
tiene	el	mes.*/
var mes = prompt('Dime un més y te diré cuentos días tiene');

switch(true)
{
    case ( mes ==='Enero' || mes ==='Marzo' || mes ==='Mayo' || mes ==='Julio' || mes ==='Agosto' ||mes ==='Octubre' || mes ==='Diciembre'):
        alert("Ese més tiene 31 días")
        break;
        
    case ( mes ==='Abril' || mes ==='Junio' || mes ==='Septiembre' || mes ==='Noviembre' ):
        alert("Ese més tiene 30 días")
        break;

    case ( mes === 'Febrero'):
        alert("Ese més tiene 28 días")
        break;
}

/*2.- Crea	un	script	que	pregunte	al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y	
si	es	múltiplo	de	5.*/

var n = parseInt(prompt("Dime un numero")) ;

switch(true)
{
    case (n % 2 == 0):
        alert("El numero es par");
        break;
    

    case (n % 3 == 0):
        alert("El numero  es multiplo de 3");
        break;

    case (n % 5) == 0:
        alert("El numero es multiplo de 5");
        break;
}

/*3.- Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).	
El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario.*/

var n1 = parseInt(prompt("Dime un numero")) ;
var n2 = parseInt(prompt("Dime otro numero")) ;
var op = promt("Dime la operación a realizar");

