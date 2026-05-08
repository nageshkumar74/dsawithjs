
// function oddeven(n){



//     let length=n.length,even=[],odd=[];
//     for(let i=0; i<length; i++){
//          if(n[i]%2==0){
            
//             // console.log(even);
//             even.push(n[i])
//             continue;
//          }
//          else {
            
//             // console.log(odd);
//             odd.push(n[i]);
//             continue;
//          }

//     }
//     return {even,odd}
// }

// let n=[25,11,23,43,56,40,20,34,56,23];

// console.log(oddeven(n));


// function oddeven(n){
//    let even='iseven',odd='isodd';
//     for(let i=1; i<100;i++){
//         n=i+1

//         if(n %2==0){
//           console.log("Iseven",n);
//         }
//         else {
//             console.log("Isodd",n);
//         }
        
//     }
   
//     }
   




// let n=0;
// console.log(oddeven(n));


// function powerofTwo(n){

//     if(n<1) return false;

//     while(n>1){    

//         if(n %2!==0){
//             return false;
//         }
//         n=n/2;
//     }
//     return true;


// }

// let n=5;
// console.log(powerofTwo(n));


function recursiveSolution(n){
if(n<2){
    return n;
}
return recursiveSolution(n-1)+recursiveSolution(n-2);
}

let n=5;
console.log(recursiveSolution(n));