//document.getElementById("miimagen").src="1.jpg"

var imagen = 2
const flechaiz = document.getElementById('flechai');
const flechade = document.getElementById('flechad');
const contador = document.getElementById('posicion');

flechaiz.onclick = function() {
    imagen -=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
    contador.innerHTML=`${imagen}/3`

  }

flechade.onclick = function() {
    imagen +=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
    contador.innerHTML=`${imagen}/3`;
}



