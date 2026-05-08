

// function BubbleSort(arr){




//     let length=arr.length;


//     for(i=0;i<length;i++){
//         for(j=0;j<length;j++){

//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                  arr[j]=arr[j+1];
//                  arr[j+1]=temp;

//             }
//         }
//         console.log(arr);
//     }



// }

// let arr=[20,12,78,1,-1];

// console.log(BubbleSort(arr));


// function primeNumber(num){

// if(num<=1)return false;
// for(i=2;i<num;i++){

//     if(num %i==0 && num!==i){
//         return false;
//     }
//     return true;
// }
// }
// let num=12;
// console.log(primeNumber(num));




function primeNumber(arr){


    let primeNumber=[],isPrime=false;

    for(let i=0;i<arr.length;i++){

        let num=arr[i];

        isPrime=true;

        if(num<2) continue;

        for(let j=2; j<Math.sqrt(arr[j]); j++){
            if(num%j==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            primeNumber.push(num);
        }
            
        } 
    return primeNumber;

}
let num=[1,10,25,34,23];
console.log(primeNumber(num));