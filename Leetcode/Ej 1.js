//Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

//A string is represented by an array if the array elements concatenated in order forms the string. 

word1  = ["abc", "d", "defg"]; 
word2 = ["abcddefg"];

var arrayStringsAreEqual = function(word1, word2) {
    if (word1.toString().replaceAll(",","") == word2.toString().replaceAll(",","")){
        return true}
    else{return false}
    
    
};