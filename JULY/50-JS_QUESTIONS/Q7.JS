// in an array of objects filter  out those objects which have gneder value male

let obj=[{
    name:"ishi",
    age:21,
    gender:"male"
},
{
    name:"ishi",
    age:21,
    gender:"female"
},
{
    name:"koko",
    age:22,
    gender:"female"
},
{
    name:"kkiran",
    age:25,
    gender:"male"
},

]

const ans=obj.filter((item)=>{
    return item.gender==="male"
})

console.log(ans)