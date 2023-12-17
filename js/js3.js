//conditioal statements
//if statement

let age=20;

if(age>18){
    console.log("you can vote")
}

if(age<18){
    console.log("you cannot vote")
}

let mode = "light";
let color;

if(mode==="dark"){
    color="black";
}

if(mode ==="light"){
    color="white";
}

console.log(color);

//if-else statement

let agee=25;

if(agee>=18){
    console.log("vote");
}else{
    console.log("not vote");
}

let num=1;

if(num%2 ===0){
    console.log("number is even");
}else{
    console.log("number is nt even");
}

//else-if statement

let modee="dark";
let colorr;

if(modee ==="dark"){
    colorr= "black";
}else if(modee ==="blue"){
    colorr="blue";
}else if(modee ==="pink"){
    colorr="pink";
}else{
    colorr ="white";
}
console.log(colorr);

if(modee=== "dark"){
console.log(modee);
}

//practice

let number = prompt("enter a number:")
if(number % 5 === 0){
    console.log("number is multiple of five");
}else{
    console.log("number is not multipe of five")
}

// practice 2

let score = 40;
let grade;

if(score>=90 && score <=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    geade="C";
}else if(score >=50 && score<=59){
    grade="D";
}else if(score>=0 && score<=49){
    grade= "F"
}

console.log("accoding yo your grade as was :",grade);