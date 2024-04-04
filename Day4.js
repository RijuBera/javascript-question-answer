//* ------------------------------------------------------------------------------
//* Programming Question :: Check the triangleType 
//* ------------------------------------------------------------------------------

// task::::------
// write a function called checkTrangleType that takes three parameters representing the lengths 
// of the sides of a triangle. The function should return a string indicating  the type of tringle :
// "equilateral","isosceles" or "scalene" ;


//Note :::-----------------
//If all three sides are of equal length,return "equilateral";
//If only two sides are of equal length,return "isosceles";
//If all three sides have different length,return "scalene";


function checkTriangleType(a,b,c){
    if(a===b && b===c){
        return('equilateral')
    }
    if(a===b || b===c || a===c){
        return('isosceles')
    }
  
        return('scalene')
     

}

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(3,6,7));
