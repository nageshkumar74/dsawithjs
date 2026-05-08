

// function findconsonatvowel(s){


//     let vowels=['a','e','i','o','u'];
//     let maxvowelcount=0,maxconsonantcount=0;

//     let maxF={}

//     for (let i=0;i<s.length;i++){
//         if(!maxF[s[i]]){
//             maxF[s[i]]=1;
//         }
//         else {
//             ++maxF[s[i]];
//         }
//     }
//     for(let char of s){
//       if(vowels.includes(char)){
//         if(maxF[char]>maxvowelcount){
//             maxvowelcount=maxF[char];
//         }
//       }
//       else {
//         maxconsonantcount=maxF[char];
//       }
//     }
//     return maxvowelcount+maxconsonantcount;
    

// }

// let str='nagesh'
// console.log(findconsonatvowel(str));



















function countvowel(str){
let mapfrequency={}

for(let i=0;i<str.length;i++){
    if(!mapfrequency[str[i]]){
        mapfrequency[str[i]]=1;
    }
    else{
        ++mapfrequency[str[i]];
    }

    let maxvowel=0,maxconsonot=0,vowels=['a','e','i','o','u'];


    for(let char of str){
        if(vowels.includes(char)){
            if(mapfrequency[char]>maxvowel){
                maxvowel=mapfrequency[char];
            }
        }
        else {
            if(mapfrequency[char]>maxconsonot){
                maxconsonot=mapfrequency[char];
            }
        }
    }
    return maxconsonot+maxvowel;
}
}
let str='samartheee';
console.log(countvowel(str));

