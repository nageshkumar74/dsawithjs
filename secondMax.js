

// function findSecondMax(arr){


//     let max=-Infinity;
//     let secondMax=-Infinity;
//     let length=arr.length;

//     for(let i=0;i<length;i++){
//         if(arr[i]>max){
//             secondMax=max;
//             max=arr[i];
//         }
//         else if(arr[i]>secondMax &&arr[i]!==0){
//             secondMax=arr[i];
//         }
//     }
//     return secondMax;

// }

// let arr=[8,3,10,15];

// console.log(findSecondMax(arr));



// 





// function starPattern(a){
// let length=a.length;

// for(let i=1; i<=a;i++){
//     let star='';
//     for(let j=1; j<=i;j++){
//       star+='*';
//     }
//  console.log(star);
// }


// 

// *****
// *****
// *****
// *****
// *****


// 




// function findEvenodd(n){


//     let even=[],odd=[];

//     for(let i=0;i<n;i++){
//         if(n[i]%2===0){
//             even.push(n[i]);
//             console.log(even);
//         }
//         else{
//             odd.push(n[i]);
//         }
        
//     }
//     return [...even,...odd]

// }
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result=findEvenodd(arr);
// console.log(result.even);
// console.log(result.odd);



// function firstDuplicate(arr){
//     let obj={},length=arr.length;
//     for(let i=0; i<arr.length;i++){
//         if(obj[arr[i]]){
//              obj[arr[i]]++;
             
            
//         }

//         obj[arr[i]]=true;
//     }
// }
// let arr=[1,2,3,4,2,3];
// console.log(firstDuplicate(arr));


// function firstDuplicate1(arr){
//     let seen=new Set();
//     for (let num of arr){
//         if(seen.has(num)){
//             return num;
//         }
//         seen.add(num);
//     }
// }

// let arr=[1,1,2,3,4,5];

// console.log(firstDuplicate1(arr));


