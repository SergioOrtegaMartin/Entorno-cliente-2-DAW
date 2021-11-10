//document.getElementById("miimagen").src="1.jpg"

const flechaiz = document.getElementById('flechai');
const flechade = document.getElementById('flechad');
var imagen = 2
flechaiz.onclick = function() {
    imagen -=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
  }

flechade.onclick = function() {
    imagen +=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
}

