// DIFF between slice and splice






// Both are array methods, but their main difference is that slice() does not modify the original array, whereas splice() modifies the original array.

// slice() is used to extract a portion of an array and returns a new array.

// splice() is used to add, remove, or replace elements in the original array and returns the removed elements.

let arr = [1,2,3,4,5];

let ans = arr.slice(1,4);

console.log(ans);


let arr=[10,20,30,40];

let ans=arr.splice(1,2);

console.log(ans);

console.log(arr);