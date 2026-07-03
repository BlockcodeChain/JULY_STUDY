// create a function that remove fduplicate value from an array


const arr=[1,2,3,4,5,6,7,8,9,1,2,3,4]

// method 1 using set

const ans=[...new Set(arr)]
console.log(ans)


// remove duplicate value from an array using filter method