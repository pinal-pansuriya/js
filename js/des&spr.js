//destructuring

// let arr =[1,2,3,4,5,6,7]
// let[a,,c, ,...rest]=arr
// console.log(a,c,rest)

// let {a,b}= {a :1 ,b: 2}
// console.log(a,b)

//spread operator

// let array=[1,2,3,4,5]
// let obj = {...array}
// console.log(obj)

// function sum(v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...array))

// let obj1 ={
//     name : "pinal",
//     clg : "ddbkng"

// }
// console.log({...obj1,name:"pinu"})

//rest operator

function sum(...inputs){
    console.log(...inputs)
     let total=0
    for(let i of inputs){
        total +=i;
    }
    console.log(total)
}
sum(1,2,3,4,5,6,7,8,9,0)

function fun(a,b,...c){
    console.log(`${a} ${b}`)
    console.log(c)
    console.log(c[0])
    console.log(c.length)
    console.log(c.indexOf('khushi'))
}
fun('pinal','ayushi','drashti','mira','khushi')