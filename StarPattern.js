

function starPattern(n){
for(let i=1;i<=n;i++){
    let str="";
    for(j=1;j<=i;j++){
        str+="*";
    } 
    console.log(str);
}

}
let n=5;
console.log(starPattern(n));

// *
//**
// ***
// ****
// ***** */


// ***** */
// ****
// ***
//**
// *

function starPattern2(n2){
    for (let i=1;i<=n2;i++){
        let str="";
        for(let j=n2; j>=i;j--){
            str+="*";
        }
        console.log(str);
    }
}
let n2=5;
console.log(starPattern2(n2));