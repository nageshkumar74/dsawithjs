


// function  gnerateAtoz(){


//     let smallCase=[],upperCase=[],result=[];

//     for(let i=95; i>65;i--){
//         smallCase.push(String.fromCharCode(i));
        
//     }
//     for (let code = 97; code <= 122; code++) {
//      upperCase.push(String.fromCharCode(code));
//   }
//   result=smallCase.concat(upperCase);
//   return result;
// }


// console.log(gnerateAtoz());



// function findMax(arr){


//     let max=arr[0];
//     if(arr.length==0) return null;
//     if(typeof max!=="number")return false;
//    if()
//     for(let i=1;i<arr.length;i++){

//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// let arr=[];

// console.log(findMax(arr));


//fibonacci 
// function fibonacci(n){

//     let a=0,b=1,next;

//     for(let i=0; i<n;i++){

//         next=a+b;
//         a=b;
//         b=next;
//     }
//     return a;
// }

// let n=10;
// console.log(fibonacci(n));


// function fibonacciarray(n1){

//     let fib=[0,1];

//     for(let i=2; i<n1;i++){
//         fib[i]=fib[i-1]+fib[i-2];
     
//     }
//     return fib;
// }

// let n1=10;
// console.log(fibonacciarray(n1));


// // 


// function factorail(n2){


//     let result=1;

//     // for(let i=1;i<=n2;i++){
//     //     result*=i;
//     // }
//     // return result;

//     while(n2>1){
        
//         result*=n2;
//         n2--;
//     }
//     return result;
// }
// let n2=5;
// console.log(factorail(n2));

// function fibonacci(n3){

// let fibo=[0,1];


// for(let i=2; i<n3; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];

// }
// return fibo;
// }

// let n3=7;



// console.log(fibonacci(n3));



// 


function secondLargest(arr){
let length=arr.length;

let max=Infinity;
let secondmax=Infinity;

for(let i=0;i<length;i++){
    if(arr[i]>max){
        secondLargest=max;
        max=arr[i];
    }
    else if(arr[i]>secondmax && arr[i]!==max){
        secondmax=arr[i];
    }
}

}
let arr=[12,34,56,1,78,90,23];
console.log(secondLargest(arr));