document.addEventListener("keydown", function(){
    texto.innerHTML = "Escribiendo";
})

texto = document.getElementById("escribiendo")

document.addEventListener("keyup", function(){
    setTimeout(function(){
        texto.innerHTML = "";
    }, 1000);
})

texto = document.getElementById("escribiendo")