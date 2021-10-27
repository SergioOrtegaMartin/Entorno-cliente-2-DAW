//6. Crea una función para calcular potencias de un modo recursivo.
function potencia(base, exponente){
    if (exponente == 0){
        return 1;
    }else{
        return base * potencia(base, exponente-1)
    }

}