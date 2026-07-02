// create a function that takes an array containing both number and string ans return new array contiang only string value

const arr=[1,2,3,4,5,6,"hello","hey","world","ishi"]

const ans=arr.filter((item)=>{
    return typeof item==="string"
})

console.log(ans)
