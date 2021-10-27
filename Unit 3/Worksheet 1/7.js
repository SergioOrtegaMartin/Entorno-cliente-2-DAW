// 7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
// diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.

function factorial(numero){
    if (numero <=1) {return 1}
    else{return numero * factorial(numero-1)}
}
document.write('<table border="1px"> <tr><td>Numero</td><td>Factorial</td></tr>')
for (i=0 ; i<11;i++){
    document.write(`<tr><td>${i}</td><td>${factorial(i)}</td></tr>`)
}
document.write("</table>")

