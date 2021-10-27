//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

// function sumatodos(...valores){
//     suma = 0;
//     for (num of valores){
//         suma +=num

//     }
//     return suma
// }
// valores = [2,5,6,8,121]
// resultado=sumEveryOther(...valores)
// document.write(resultado)


/*Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), 
and returns the sum of only the numbers.*/



// function addOnlyNums(array){
//     suma = 0
//     for (e of array){
//         if (typeof e == 'number')
//             suma +=e
//     }
//     return suma
    
// }

// lista=[1, 'cat', 3, 4]
// document.write(addOnlyNums(lista))

//Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.

function countTheArgs(...argumentos){
    suma = 0
    for (e of argumentos){
        suma +=1
    }
    return suma
}

document.write(countTheArgs(1,4,'cat',20))