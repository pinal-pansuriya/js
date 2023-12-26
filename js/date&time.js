let now =new Date()
console.log(now)

let dt = new Date(1000)
console.log(dt)

// let dt1 = new Date("2024-12-26")
// console.log(dt1)

//let newdate = new Date(year,month,date,hours,minutes,seconds,miliseconds)
let newdate = new Date(2005,3,24,12,45,0,20)
console.log(newdate)

let year =newdate.getFullYear()
console.log("year",year)

let month = newdate.getMonth()
console.log("month",month)

let second =newdate.getSeconds()
console.log("second",second)

newdate.setMinutes(44)
console.log("setminute",newdate)