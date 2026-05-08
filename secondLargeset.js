




function secondLargest(num){
let length=num.length;
let max=-Infinity,secondmax=-Infinity;

for(let i=0; i<length;i++){
    if(arr[i]>max){
        secondmax=max;
        max=arr[i];
    }
    else if( arr[i]>secondmax && arr[i]!==0){
        secondmax=arr[i];
    }
    
}
return secondmax;


}
let arr=[1,2,3,4,5,6,7,8,8]; // max secondmax 
                             //infinty infinity
                                       /// infinity 
console.log(secondLargest(arr));