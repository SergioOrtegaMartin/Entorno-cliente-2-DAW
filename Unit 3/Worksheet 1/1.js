/*1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario*/

num1= parseInt(prompt('Introduce el numero 1'))
num2= parseInt(prompt('Introduce el numero 2'))
num3= parseInt(prompt('Introduce el numero 3'))
num4= parseInt(prompt('Introduce el numero 4'))

function maximo(num1,num2,num3,num4){
    mayor = 0 
    if (num1 > mayor){
        mayor == num1
    }else if (num2 > mayor){
        mayor == num2 
    }else if (num3 > mayor){
        mayor == num2 
    }else if (num4 > mayor){
        mayor == num2}
    return mayor 
};


document.write(maximo(num1,num2,num3,num4))