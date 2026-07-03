// what is diff between parseint and nnumber 

console.log(parseInt("123.3456"))
console.log(Number("123.3456"))

// dono kka typeof number hai 
// parseInt() reads the string from left to right and returns only the integer part. It stops as soon as it finds a character that cannot be part of an integer.

// parseInt("45px")
// 4 ✅
// 45 ✅
// 45p ❌ stop