//* ------------------------------------------------------------------------------
//* Programming Question :: Sort an array
//* ------------------------------------------------------------------------------

// task::::------
//write a function to sort an array of number in ascending order

function sort(arr){
    return (arr.sort((a,b)=> a-b));
}

console.log(sort([5,30,10,8]))