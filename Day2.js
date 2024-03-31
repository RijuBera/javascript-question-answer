//* ------------------------------------------------------------------------------
//* Programming Question :: Hash tag Generator
//* ------------------------------------------------------------------------------


// You are required to implement a function generatHash that generates  a Hash tag from a given input string
// the input string should be convert to hash tag format where each word is capitalized and concatente together
//without space
//? if the length is greater than 250 the return null


const generateHash=(str)=>{
if(str.lenght>250 || str.trim().lenght===0){
    return false
}

str=str.split(" ")
str=str.map((element) => 
    element.replace(element[0],element[0].toUpperCase())
    // element.charAt(0).toUpperCase()+element.slice(1)
);
str=`#${str.join('')}`
// console.log(str)
return str
}


console.log(generateHash('my name is abc efg'))