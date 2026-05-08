//Binary Search works only sorted array

// function binarysearch(arr,target){

//     let leftindex=0;
//     let rightindex=arr.length-1;

//     while(leftindex<=rightindex){

//         let middleIndex=Math.floor((leftindex+rightindex)/2);

//         if(target===arr[middleIndex]){
//             return middleIndex 
//         }

//         if(target<arr[middleIndex]){   
        
//          rightindex=middleIndex-1;

//         }
//         else {
//           leftindex=middleIndex+1;
//         }

     
//     } 

    

//  return -1;

// }

// let arr=[1,2,3,7,8],target=8;
// //0 1 2 3 4 5 6//
// console.log(binarysearch(arr,target));



function binarysearch(arr,target){

    let leftindex=0,rightindex=arr.length-1;

    while(leftindex<=rightindex){
        let middleIndex=Math.floor((leftindex+rightindex)/2);
        if(target==arr[middleIndex]){
            return middleIndex;
        }
        if(target<arr[middleIndex]){
         rightindex=middleIndex-1;  
        }
        else {
         leftindex=middleIndex+1;
        }
    }
    return -1;


}

let arr=[2,3,4,5,6,7,8,9,10],target=10;

console.log(binarysearch(arr,target));