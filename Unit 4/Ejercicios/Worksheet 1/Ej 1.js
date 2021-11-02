// 1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {  //Click
    alert('Está saltando le evento')
}  
  