//document.getElementById("miimagen").src="1.jpg"

const flechaiz = document.getElementById('flechai');
const flechade = document.getElementById('flechad');
var imagenes = ["1.jpg","2.jpg","3.jpg"];
var posicion = 2
flechaiz.onclick = function() {
  if (posicion<1){
    posicion=2
  }
  posicion -=1
    imagen = imagenes[posicion]
    document.getElementById("miimagen").src=`${imagen}`
  }

flechade.onclick = function() {
    imagen +=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
}

