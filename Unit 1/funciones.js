function suma (valor1, valor2, valor3)
{
    let total = valor1 + valor2 + valor3;
    return total;
}
misnumeros=[3,33,5555]


let misuma = suma(...misnumeros)
document.write(misuma)