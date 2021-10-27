//4. Mejora el ejercicio anterior para que continue realizando el mismo calculo hasta que el usuario decida que no quiere continuar


entrada = true
while (entrada){
    var cateto1 = parseInt(prompt('Introduce un cateto'))
    var cateto2 = parseInt(prompt('Introduce otro cateto'))
    hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)

    window.alert(`La hipotenusa es ${hipotenusa}`)
    entrada = prompt("Quieres seguir calculando? (Dejar en blanco para salir)")

}
