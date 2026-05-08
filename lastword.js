

// function findlastoccur(name){

// let i=name.length-1,length=0;
//  while(i>=0 && name[i]===' '){
//     i--;

//  }
//  while(i>=0 && name[i]!==' '){
//     length++;
//     i--;
//  }
//  return length;
// }

// let n='nagesh fdf';

// console.log(findlastoccur(n));


function lastword(n){

   let count=0,i=n.length-1;
   while(i >=0 && n[i]===' ') {
      i--;
   }
   while(i>=0 && n[i]!==' '){
      count++;
      i--;
   }
   return count;
}
let n="nagesh is good";
console.log(lastword(n));