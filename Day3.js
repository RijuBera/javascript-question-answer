//* ------------------------------------------------------------------------------
//* Programming Question :: Count Occurrrences of character 
//* ------------------------------------------------------------------------------

// task::::------
// write a function called countchar that takes two parameters :a string and a character to count.The function should return
//the numbers of times the specified character appers in strings

 function countchar(str,char){

    if(str.trim().length===0 | char.trim().length===0){
        return false
    }
    str=str.toUpperCase();
    char=char.toUpperCase()
    letters=str.split("")
    let count=0
    // 1...
    // letters.forEach(element => element===char? count++:count);
    // return count;



    // 2...
    letters.forEach(element => {
        if(element===char){
            count++
        }});

    return count;




    // 3.....
    // return letters.reduce((acc,curr)=>{
    //     if(char===curr){
    //         acc++
    //     }
    //     return acc;
    // },0)
 }

console.log(countchar('MissIssippi','I'))