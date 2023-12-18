// function 

function myfunction(){
    console.log("we are learn to javascript:")
}
myfunction()

//function - 2 number,sum

function sum(a,b){
    console.log(a+b)
}
sum(2,3)

function sum(x,y){
    s=x+y
    return s
}
let value=sum(3,4)
console.log(value)

//arrow function =>

//mul fun

function mul(a,b){
    return a*b;
}

const arrowmul=  (a,b) =>{
    console.log(a*b);
};

//sum fun

function sum(a,b){
    return a+b
}

const arrowsum = (a,b) => {
    console.log(a+b)
}

const printhello=()=>{
    console.log("hello")
};

//practice-1

function countvowels(str){
    let count=0
    for(const char of str){
        console.log(char)
        if (char==="a" || char==="e" ||char === "i" || char ==="o" ||char==="u"){
            count++;
        }
    }
    console.log(count)
}

//practice -2

const countvow = (str) =>{
    let count=0
    for(const char of str){
        console.log(char)
        if (char==="a" || char==="e" ||char === "i" || char ==="o" ||char==="u"){
            count++;
        }
    }
    console.log(count)
}  

//for each loop in array

let arr = [1,2,3,4,5]

arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

//practice

let nums =[1,44,2,77,6]

nums.forEach((num) =>{
    console.log(num*num)
});

//array mathode

//map

let num=[2,3,45,56]

let newArr = nums.map((val) => {
    return val * 2;
});

console.log(newArr);

//filter

let arry=[1,2,3,4,5,6,7]
let evenarr= arry.filter((val) =>{
    return val % 2===0;
});
console.log(evenarr)

//reduce

let array = [1,2,3,4]

const output = array.reduce((prev,curr) =>{
   //return res + curr
   return prev < curr ? prev : curr;
});

console.log(output)

//practice

 let marks = [97,64,32,49,99,96,86]

 let toppers=marks.filter((val) =>{
     return val >= 90
 });
 console.log(toppers)

//practice

let n=prompt("enter a number:")

let aray =[]

for(let i=1; i<=n; i++){
    aray[i-1] =i;
}
console.log(aray)

const numsum = aray.reduce((pre,curr) =>{

});

console.log(numsum)

const factorial = aray.reduce((pre,curr) =>{
    return pre * curr
});

console.log(factorial)










