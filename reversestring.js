


// 


// 


// function countnegative(arr){

//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             if(arr[i][j]<0){
//                 count++;
//             }

//         }
//     }
//     return count;
//     }


// let arr=[[-1,2,3],[-4,5,-6],[-7,8,9]];

// console.log(countnegative(arr));


// function missingnumber(arr){

//     let length=arr.length;
//     let sum=0; 
//     for(let i=0;i<length;i++){
//         sum+=arr[i];
//     }

//     let expectedsum=(length*(length+1))/2;

//     return expectedsum-sum;
// }

// let arr=[0,1,2,4,5];
// console.log(missingnumber(arr));



// function singleNumber(arr){

//     let length=arr.length;

//     let isFound=true;
//     for(let i=0; i<length;i++){
//         if(arr[i]==arr[i+1]){
//             isFound=false;
    
//         }
//         else {
           
//                 if(isFound=true);
//                 return arr[i];
//             }
//         }

//   return -1;        
        
//         }
    

function findIndex(arr,target){
let length=arr.length,isFound=true;

for(let i=0;i<length; i++){
    if(arr[i]!==target){
        
         isFound=false;
        continue;
    }
    else if(isFound){
        return arr[i];
    }
}

}

let n=[1,2,7,6],target=7;
console.log(findIndex(n));