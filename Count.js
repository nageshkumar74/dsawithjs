


// function singleNumber(nums) {


//     let result = 0;

//     for (let num of nums) {
//         result ^= num;
//     }

//     return result;
// }

// let nums = [4, 1, 2, 1, 2];
// console.log(singleNumber(nums));


function singleNumber(nums){
let result;
    for (let sum of nums){
     result^=sum;
    }
    return result;

}
let nun=[1,1,5,6,3,3];

console.log(singleNumber(nun));