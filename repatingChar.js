


// function repatingChar(str){

//     let count={}

//     for(let char of str){
//     count[char]=(count[char]||0) +1;
//     }
//     for(let char of str){
//         if(count[char]==1){
//             return char;
//         }
//     }
//     return null;

//     }

// let str='aabbcd'
// console.log(repatingChar(str));


// function repeating(char){



//     let obj={}

//     for(let word of char){

//         obj[word]=(obj[word]||0)+1;
//     }

//     for (let word of char){
//         if(obj[word]===1){
//             return word;
//         }
//     }
// }

// let char="aabcd"

// console.log(repeating(char));


// function repeating(char){
//     let obj={};

//     for(let word of char){
//         obj[word]=(obj[word]||0)+1;

//     }
//     for (let word of char){
//         if(obj[word]==1){
//             return word;
//         }
//     }
//     return null;
// }

// let char="aabbcd"
// console.log(repeating(char));


// function max(arr){

//     let max=-Infinity,secondMax=-Infinity;

//     for (let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             secondMax=max;
//             max=arr[i]
//         }
//         else if(arr[i] >seondMax && arr[i]!==max){
//             secondMax=max[i];
//         }



//     }

//     return secondMax;
// }


// function secondMax(arr){

//     let max=-Infinity,secondMax=-Infinity;


//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){

//             secondMax=max;
//             max=arr[i];
//         }
//         else if(arr[i]>secondMax &&  arr[i]!==max){
//             secondMax=arr[i];
//         }
        
//     }
//     return secondMax;
// }

// let arr=[1,2,3,4,5];
// console.log(secondMax(arr));


function reverse(str){

    let reversed='';

    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}


// function duplicate(value){

//     let duplicate=[],seen=[];

//     for(let i=0;i<value.length;i++){
      
//     if(seen.includes(value[i]) && !duplicate.includes(value[i])){
//         duplicate.push(value[i])
//     }
//     else {
//         seen.push(value[i])
//     }

// } 
// return duplicate;
// }

// let arr=[1,2,1,4]
// console.log(duplicate(arr));


function duplicate(value){

    let seen=[],duplicate=[];

    for(let i=0;i<value.length;i++){
        if(seen.includes(value[i]) && !duplicate.includes(value[i])){
            duplicate.push(value[i])
        }
        else {
            seen.push(value[i])
        }
    }
    return duplicate;
}

let arr=[1,2,1,4];

console.log(duplicate(arr));


function removeDuplicate(value){

    let seen=new Set(),result=[];

    for(let i=0;i<value.length;i++){
        if(!seen.has(value[i])){
            seen.add(value[i]);
            result.push(value[i]);
        }
       
    }
    return result;
}
let arr1=[1,2,1,4];
console.log(removeDuplicate(arr1));


function removeDuplicate(value){

    let seen= [],result=[];

    for (let i=0;i<value.length;i++){

        if(!seen.includes(value[i])){
            seen.push(value[i])
            result.push(value[i])
        }
    }
    return result;
}

let arr2=[2,4,5,2];
console.log(removeDuplicate(arr2));