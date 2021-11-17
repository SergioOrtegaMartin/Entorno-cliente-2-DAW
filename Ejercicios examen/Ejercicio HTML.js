titulo = document.getElementById("titulo")

function cambiarTitulo(titulonuevo){
    titulo.innerHTML = titulonuevo
}

imagenes = document.getElementsByClassName("img")//.length


if (imagenes.length>0){
    console.log(`Hay ${imagenes.length} imagenes en la página. Son: `)
    for (i = 0 ; i<imagenes.length ; i++){
        console.log(imagenes[i].id)
    }}else{
        console.log("No hay imagenes")
    }

function intervalo(){
    window.alert("Hola")
}

//setInterval(intervalo,3000)