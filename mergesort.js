



function recursiveMergeSort(a){



if(a.length<2){
    return a;
}

let middle=Math.floor(a.length/2);
let leftarray=a.slice(0,middle);
let rigtharray=a.slice(middle);

return calcultesort(recursiveMergeSort(leftarray),recursiveMergeSort(rigtharray));


}

function calcultesort(leftarray,rigtharray){
 let sortedarray=[];
  
 while(leftarray.length&&rigtharray.length){

    if(leftarray[0]<=rigtharray[0]){
        sortedarray.push(leftarray.shift());
    }
    else {
        sortedarray.push(rigtharray.shift());
    }

    
 }
 

 return [...sortedarray,...leftarray,...rigtharray];  
}

let a=[8,20,-2,4,-6];

console.log(recursiveMergeSort(a));