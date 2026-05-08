

// Reverse number using recursion

function reverse(n,start,end){

    if(start<=end) 
    {
        temp=n[start];

        
    n[start]=n[end];
    n[end]=temp;

        reverse(n,start+1,end-1);
        

    }
    
    
     return n;
}

let arr=[1,2,3,4,5,6,1,2];
console.warn(reverse(arr,0,arr.length-1));
