

// // function fibonacci(n){
 
// //  if(n<0){
// //     return true;
// //  }
// //   const fib=[0,1];

// //   for(let i=2;i<n;i++){
// //     fib[i]=fib[i-1]+fib[i-2]
// //   }
// //   return fib;





// // }

// // let n=5;
// // console.log(fibonacci(n));


// // function fibo(n){


// //     let f=[0,1];
// //     for(let i=2; i<n; i++){
// //         f[i]=f[i-1]+f[i-2];
// //     }
// //     return f;

// // }
// // let n=5;
// // console.log(fibo(n));


// function f(n){
// if(n<2){
//     return n;
// }
// let fib=[0,1];
// for(let i=2; i<n; i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib)
// }
// let n=10;

// console.log(f(n));A



// function movetolast(n){

//     if(n.length<0){
//         return 0;
//     }

//     let x=0;

//     for(let i=0;i<n.length;i++){

//         if(n[i]!==0){
//             n[x]=n[i];
//             x++;
//         }

//     }
//     for (let i=x; i<n;i++){
//         n[i]=0;
//     }
//     return n;

// }

// let n=[0,1,0,2,4,0];
// console.log(movetolast(n));


// 


// function moveTolast(n){

//     // if(n.length<0){
//     //     return 0;
//     // }

//     let x=0;
//     for(let i=0;i<n.length;i++){
//         if(n[i]!==0){
//             n[x]=n[i];
//             x++;
//         }
//     }
//         for(let i=x; i<n.length;i++){
//             n[i]=0;
//         }
//         return n;
//     }


//     let arr=[0,11,0,2]; // 11,2,0,0

//     console.log(moveTolast(arr));

function moveTolast(n){


    if(n.length<0) return false;
    let x=0;
    for(let i=0; i<n.length;i++){
        if(n[i]!==0){
            n[x]=n[i];
            x++;
        }

    }
    for(i=x;i<n.length;i++){
        n[i]=0;
    }
    return n;
}

let n=[0,1,0,2,4];

console.log(moveTolast(n))