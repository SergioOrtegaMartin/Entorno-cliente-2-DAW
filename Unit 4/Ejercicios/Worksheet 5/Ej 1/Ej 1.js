// Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. 
// La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false 
// según cumpla los requisitos de validación:

// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula



function validarMayuscula(cadena){
    m = /[A-Z]/;
    return m.test(cadena)
}

// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&

function validarCaracteresEspeciales(cadena){
    ce = /[!@#$%^&]/;
    return ce.test(cadena)
}

// validarCorreo: El parámetro debe tener el formato correcto de un email

function validarCorreo(correo){
    co = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    co2=/[a-zA-ZñÑ0-9]@[a-zA-ZñÑ0-9].[a-zA-Z]/
    return co2.test(correo)
}

// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
function validarTarjetaCredito(tarjeta){
    ta= /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    return ta.test(tarjeta)
}

// validarLongitud: El parámetro debe tener al menos 8 caracteres.

function validarLongitud(parametro){
    len= /([0-9A-Za-zñÑ]){8,}/;
    return len.test(parametro)
}

// validarNumero: El parámetro debe contener al menos un dígito.

function validarNumero(parametro){
    num= /[0-9]/;
    return num.test(parametro)
}