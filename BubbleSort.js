
function BubbleSort(arr){

    let length=arr.length;


    for(let i=0;i<length-1;i++){
        for(let j=0;j<length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }

        }
       
    }
     return arr;



}
let arr=[100,500,34];

console.log(BubbleSort(arr))