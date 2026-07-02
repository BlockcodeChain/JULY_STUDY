// find maximum number in array

const arr=[1,2,3,4,90,100,445,32,19]
// method 1
let ans=arr[0];
for(let i=0;i<arr.length;i++){
    if(ans<arr[i]){
        ans=arr[i];
    }

}
console.log(ans);

// method 2
const ans2=Math.max(...arr);
console.log(ans2);