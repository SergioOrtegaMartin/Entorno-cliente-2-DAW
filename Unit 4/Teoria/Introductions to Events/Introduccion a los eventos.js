const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

// btn.onclick = function() {  //Click
//     alert('Está saltando le evento')
//     // const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     // document.body.style.backgroundColor = rndCol;
// }  
// btn.onfocus= function() {    //Cuando ponemos el foco en el boton
//     alert('Está saltando le evento')}   

btn.ondblclick = function() {     //Doble click
    alert('Está saltando le evento')}

// window.onkeydown = function() {     //Cuando pulsas una tecla
//     alert('Está saltando le evento')}

// window.onkeyup = function() {     //Cuando Levantas una tecla
//     alert('Está saltando le evento')}