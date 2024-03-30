//* ------------------------------------------------------------------------------
//* Programming Question :: Longest word in a strings
//* ------------------------------------------------------------------------------

/* Q: write a function findlongeststring that takes a strings as input and return as input 
 and return the longest word in the string.if there are multiple longest words  return the first 
*/


function findlongestword(s){
    if(s.trim().length===0){
        return false;
    }


    str=s.split(" ")

    // method 1
    l=-1
    str.forEach((element,index) => {
        b=element.length
        if(l<b){
            l=b;
            i=index;
        }
    });

 return (str[i]);



// method 2
word=str.sort((a,b)=> a.length > b.length)
return word.at(-1)


// method 3
return str.reduce((acc,curr)=>(curr.length>acc.length? curr:acc),"")
}
console.log(
    findlongestword('Longest word in a strings in                 javascript')
)