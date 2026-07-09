// FIND THE COMBINATION OF TWO ARRAY


let arr1=[1,2,3,4,5,6];
let arr2=[7,8,9,10,11,12]

// method 1 using spread operator
let combinedArr=[...arr1,...arr2]

// method 2 using concat method
let combinedArr2=arr1.concat(arr2)

console.log(combinedArr);
console.log(combinedArr2);