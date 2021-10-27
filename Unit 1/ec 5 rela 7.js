
function sumEveryOther(valores){
    var suma = 0
for(let i=0; i < valores.length; i+=2){
    suma += valores[i]
        }
        return suma
    }

var valores = [21,1,5,10,7]
misuma=sumEveryOther(valores)
document.write(misuma)