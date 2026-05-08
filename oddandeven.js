


function findmiss(arr){


    let n=arr.length;
 let sum= arr.reduce((a,b)=>(a+b),0);
 let total=(n*(n+1))/2;
 return total-sum;    
}

let arr=[1,2,3,4,0];

console.log(findmiss(arr));