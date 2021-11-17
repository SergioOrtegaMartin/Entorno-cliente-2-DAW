// You are given an m x n integer grid accounts where accounts[i][j] 
// is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.


array = [[1,2,3],[3,2,6]]
const reducer = (previousValue, currentValue) => previousValue + currentValue;

function suma(array){
    return array.reduce(reducer)
}

for (e in array){
    console.log( suma(array[e]))
}