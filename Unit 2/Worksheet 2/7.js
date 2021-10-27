//7. Crea una web que genere una tabla con dos columnas. En la primera un numero ascendente y en la otra el valor de su seno.

var i = 0;
document.write('Numero ------- Seno <br>')
for (i = 0 ; i < 11; i++){
    document.write(i + ' -------- ')
    document.write(Math.sin(i) + '<br>')
}