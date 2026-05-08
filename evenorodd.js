

// function arrangeEvenodd(arr){
// let result=new Array(arr.length);

// let evenIndex=0,oddIndex=1;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         if(evenIndex<arr.length){
//         result[evenIndex]=arr[i];
//         evenIndex+=2; 
//         }
//     }
//         else{
//             if(oddIndex<arr.length){
//                 result[oddIndex]=arr[i];
//                 oddIndex+=2;
//             }
//         }

//     }
//     return result.sort();
// }


// let arr=[3,6,1,8,5,6];
// let output=arrangeEvenodd(arr);

// console.log(arrangeEvenodd(arr));

// console.log(arrangeEvenodd(output));




// 


// 

let data=[1,2,3,4,5,6];

function reverse(data,start,end){

    
    if(start<=end){
        console.log(data);

    let temp=data[start];
    data[start]=data[end];
    data[end]=temp;
    reverse(data,start+1,end-1)    
}
}
console.log(0,reverse(data,0,data.length-1));
