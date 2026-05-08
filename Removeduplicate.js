

// function removeDuplicate(a){
// let length=a.length;
// let count=0;
// for(let i=0; i<length;i++){
//     if(a[i]==a[i+1]){
//         count++;
//         continue;
//     }
    

// }
// return {count};

// }

// let arr=[0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicate(arr));


// function removeDuplicate(arr){

// let length=arr.length,x=0;

// for(let i=0; i<length; i++){
//    if(arr[i]>arr[x]){
//     x++;
//     arr[x]=arr[i];
//    }

// }
// return x+1;
// }

// let arr=[0,0,1,1,1,2,2,3,3,4]; 
// console.log(removeDuplicate(arr));



// function removedDuplicate(n){

//    let length=n.length,x=0;

//    for(let i=0;i<length;i++){

//       if(arr[i]>arr[x]){
//        x++;
//        arr[x]=arr[i];
//       }
//    }
//    return x+1;

// }
// let arr=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7]
// console.log(removedDuplicate(arr));


// function removeElement(arr,value){
//    let length=arr.length, x=0;

//    for(let i=0; i<length; i++){

//       if(arr[i]!=value){
//          arr[x]=arr[i];
//          x++;
//       }

//    }
//    return arr;

// }


// let arr=[1,1,2,4,5,6,7,8],value=1;
// console.log(removeElement(arr,value));



function removeElement(arr,value){
let length=arr.length;
let x=0;

for (let i=0; i<length;i++){

   if(arr[i]!=value){
     arr[x]=arr[i];
     x++;
   }
   
}
return arr;

}

let arr=[2,2,1,4,5,6,7,8,90],value=2;

console.log(removeElement(arr,value));

