function acronym(text){

let acroynm="";
let word=text.split(" ");

for(let i=0; i<word.length;i++){
    for(let j=0; j<word[i].length;j++){
        if(j==0){
        acroynm+=word[i][0].toUpperCase();
        }
    }
}
return acroynm;




}
let text="nagesh shiv gunji"
console.log(acronym(text));