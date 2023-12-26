//string

let strr = "javascript";

console.log(strr[3]);

//template literals
let obj = {
    name :"pen",
    price :10,
};
let output =`the cost of ${obj.name}  is  ${obj.price} rupees`;
console.log(output)

let sentence =`this is a template literal`;
console.log(sentence)

//string methode
//toUpperCase

var  str="pinal"
str=str.toUpperCase()
console.log(str)
//toLowerCase

var str="PINAL"
str=str.toLowerCase()   
console.log(str)
//trim - remove whitespace starting and ending

var str="    pinal"
//str=str.trim()
console.log(str.trim())

//str.slice - return part of string
var str = "javascript"
console.log(str.slice(0,4))

//str.concat = join str1 with str2

var str1="java"
var str2="script"

//let result = str1.concat(str2)
let result = "this is a " + str1.concat(str2)
console.log(result)

//str.replace

var str= "hello"
console.log(str.replace ("lo","p"))

//str.charAt-index

var str="pinal"

console.log(str.charAt(4))

//practice-1

let fname=prompt("enter your fullname")
let uname = "@" + fname + fname.length
console.log(uname)

