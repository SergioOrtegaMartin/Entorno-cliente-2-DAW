
/*
5. Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y é
el m todo setTimeout() crea un reloj que se actualice cada segundo.
*/

var date = new Date();

function reload() {
 	location.reload()
};

document.write(`<th>${date.getHours()}:</th><th>${date.getMinutes()}:</th><th>${date.getSeconds()}</th>`)
setTimeout(reload,1000);