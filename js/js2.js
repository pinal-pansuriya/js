//Arithemetic operators
///,*,-,+,**,%

let a=5;
let b=2;

console.log("a=",a,"& b=",b)
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)//5*5

//unary operators
//increment,decrement

console.log("a++=",a++)
console.log("++a=",++a)
console.log("--a",--a)

//assignment operators
//+=,-=,*=,/=,**=,=,%=


a+=4;

console.log("a=",a);

b*=3;
console.log("b=",b)

a/=4;
console.log("a=",a)

//comparison operators
//==,!=,===,!==,>,<,<=,>=

let x=5;
let y=3;
console.log("x==",y==y)
console.log("x===y", x===y)
console.log("x!=y",x!=y)
console.log("x!==y",x!==y)

console.log("5<3",x<y)
console.log("5>=3",x>=y)

//logical operators
//&&,!,||

let cond1= x>y;
let cond2= x===5;
console.log("cond1 && cond2=", cond1 && cond2)
console.log("cond1 || cond2=", x>b || x===5)
console.log("!5<3=",!x<y)

//ternaey operators
//condition?true output:false output

let age=20;

let result = age>=18? "adult" : "not adult";
console.log(result);

let p=4;

let output = p%2===0? "even" : "odd";
console.log(output);