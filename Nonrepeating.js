


function nonrea(str){
   let obj={},count;
    for(let char of str ){
        obj[char]=(obj[char]||0)+1;
    } 

    for(let char of str){

        if(obj[char]==1){

            return char;
        }
    }
    return null
}
    

let str="aabbcd";

console.log(nonrea(str))