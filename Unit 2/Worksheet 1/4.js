/*
4. Utilizando el programa anterior haz que al llegar a 0 se cargue la p gina á
de google, para ello puedes utilizar el objeto location.
*/

function mensaje() {
 
    alert("Han pasado 60 segundos");
    location.reload();
}
    
setTimeout(mensaje,60000);

