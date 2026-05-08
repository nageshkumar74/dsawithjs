

function recursiveBinarySearch(arr,target){
return Search(arr,target,0,arr.length-1);
}

function Search(arr,target,leftindex,rightindex){
let middleIndex=Math.floor((leftindex+rightindex)/2);
    if(leftindex>rightindex){
        return -1;
    }
    if(target === middleIndex){
        return middleIndex;
    }
    if(target<arr[middleIndex]){
        return Search(arr,target,leftindex,middleIndex-1);
    }
    else {
        return Search(arr,target,middleIndex+1,leftindex);
    }
    
}

let a=[1,2,3,4,5,6,7,8,9,10],target=11;

console.log(recursiveBinarySearch(a,target));
