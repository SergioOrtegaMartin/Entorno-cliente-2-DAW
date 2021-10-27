//2. En un nueva pagina web, pide al usuario un angulo y calcula su seno, coseno y tangente.

var angulo = parseInt(prompt('Introduce el angulo'))

seno = Math.sin(angulo)
coseno = Math.cos(angulo)
tangente = Math.tan(angulo)

document.write("El seno de " +angulo+ " es " + seno +"<br>")
document.write(`El coseno de ${angulo} es ${coseno} <br>`)
document.write(`La tangente de  ${angulo}  es  ${tangente}`)