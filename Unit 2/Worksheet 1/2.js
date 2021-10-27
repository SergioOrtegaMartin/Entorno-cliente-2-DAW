// 2. Crea una pagina web en la que se muestre el resultado de cada uno de  los siguientes apartados:
// a. Crear variable "fechaHoy" con fecha de hoy
var fechaHOy = new Date();
document.write(fechaHOy + '<br>')
// b. Crear variable "fecha85" que sume 85 dias a la variable "fechaHoy" 
var dias = 85;
fecha85 = Fecha.setDate(Fecha.getDate() + dias)
document.write(Fecha + '<br>')
// c. Crear variable "fecha187" que reste 187 dias variable "fechaHoy" 
var Fechac = new Date()
fecha187 = Fechac.setDate(Fechac.getDate() - 187)
document.write(Fechac + '<br>')
// d. Sumar 2 años a la variable "fecha85"
var Fecha2 = new Date()
Fecha2.setDate(Fecha2.getDate()+365*2)
document.write(Fecha2 + '<br>')
// e. Restar 24 horas a la variable "fecha187"
fecha18724 = Fechac.setDate(Fechac.getDate()-1)
document.write(Fechac + '<br>')
// f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y observa lo que obtienes
fechareto = Fecha.getDate()-Fechac.getDate()
document.write( fechareto)
 