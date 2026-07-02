// CREATE A FUNCTION THAT RETURN THE LAST ELEMENT OF ARRAY

// method 1
function lastelem(arr){

return arr[arr.length-1] 
//    or
return arr.pop()
}


// method 2
const arr=[1,2,3,4,5,6,7,8,9,10]
const ans=lastelem(arr)
console.log(ans)
console.log(arr)


// 3#### pop method original array ko bhi change kr degga 