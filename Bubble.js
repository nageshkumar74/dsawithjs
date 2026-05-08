


function BubbleSort(n){
let length=n.length;

for(let i=0;i<length-1;i++){
    for(let j=0;j<length-1;j++){
        if(n[j]>n[j+1]){
          let temp=n[j];
          n[j]=n[j+1];
          n[j+1]=temp;

        }
        
    }

   return n;
}

}
let n=[5,4,32,1,3,3];


console.log(BubbleSort(n));