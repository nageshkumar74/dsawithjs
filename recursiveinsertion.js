

function insertionsort(a,n){

    let nti=a[n-1];
    let i=n-2;

    while(i>=0 && a[i]>nti){
        a[i+1]=a[i]
        console.log(a.join(''));
        i--;
    }

    a[i+1]=nti;
    console.log(a.join(''));

}
let a=[2,4,6,8,3],n=a.length;

console.log(insertionsort(a,n));