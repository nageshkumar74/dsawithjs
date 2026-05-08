
// function checktypeof(){
// let a=["a",1,"b","c",2];


// let str=[] , num=[];


// for (let i=0;i<a.length;i++){

//     for(let j=0;j<a.length;j++){
//     if(typeof(a[j])=="string"){
//         str.push(a[j]);
//         continue;
       
//     }
//     else if(typeof(a[j]=="number")){
//         num.push(a[j]);
//         continue;
       
//     }
// }
//     return {str,num}

// }
// }
// console.log(checktypeof());


// let b=[1,2,3,4,5,6,7,8,98,4];
// let removedu=[...new Set(b)];

// console.log(removedu);

// function checkduplicate(arr){

// let length=arr.length;

// const duplicate=new Set();


// for (let cha of arr){
//     if(duplicate.has(cha)){
//         return cha;
//     }
//     duplicate.add(cha);
// }
// }
// let a=[1,2,3,4,5,6,7,1,2,3,4];



 function secondtable(n){
 let product;
 for(let i=1; i<=100; i++){

 product= n+i;

 if(n%2==0)
 console.log(product);
 continue;
 }

 }

let n=1;
console.log(secondtable(n));


// function firstdup(arr){
//     let obj={};
//     for(let i=0; i<arr.length-1;i++){
//         if(obj[arr[i]]){
        
//          console.log(arr[i])
//          continue;
//         }
//         obj[arr[i]]=true;
//     }
//     return null;
// }

// let arr=[0,2,4,3,2,6,4];

// console.log(firstdup(arr))