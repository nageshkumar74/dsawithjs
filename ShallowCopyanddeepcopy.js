//Shallow Copy

//Copies first level object

//Changes in nested data affect both copies
let obj1={
name:'nagesh',
skills:{tech:"React"},



}

let obj={...obj1};

console.log(obj);


//Deep copy : Copies all level,completly independent,
let obj2={
name:'mahesh',
skills:{tech:"React"}
}

let obj3=JSON.parse(JSON.stringify(obj2));

obj3.skills.tech='c++';
console.log(obj2);
console.log(obj3);


let fruits=['apple','mango','pinnapple']


let f=[...fruits];// spread operator// spread menas unpack values array,object

console.log(f);


//Rest operator

//Used in
//Function paramter
//Destructuring


//Spread with array

let arr=[1,2,3,5];

//Array copy,object copy,Merging array object

//Passing values into function
let newArray=[...arr,'1','2'];

console.log(newArray);


let user={name:'nagesh',age:'25'}

let newUser={...user,name:'xyz',age:'23'}

console.log(newUser);


//Rest function parameters ,array destructuring,object destructuring

function nums(...numbers){

return numbers.reduce((a,b)=>a+b);
}

console.log(nums(1,2,34,5));

//Array destructuring


let arr1=[1,2,3,4,5,6,7];


let [a,b,c,...rest]=arr1;


console.log(a,b,c,rest);

//Rest in Object desturing 


let user1={
name:'nahes',
age:'23',
role:"developer"

}

let {name,...details}=user1;

console.log(user1);




function checkPalin(str){


    let length=str.length,reverse='';

    for(let i=length; i>=0 ; i--){
      reverse+=str[i];
    }
    if(str===reverse){
        return "String is Palindrome"
    }
    else {
        return "String is not Palindrome";
    }

}

let str="abc"
console.log(checkPalin(str))