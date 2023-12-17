//loops
//for loop


for(let i=1; i<=5; i++){
console.log("i")
}

//calculate sum of 1 to n
let sum = 0;
for(let i=1; i<=5; i++){
    sum =sum+i;
}
 console.log("sum =",sum);

//while loop

let j=1;
while(j<=5){
    console.log("pinal")
    j++
}

//do while loop
let ii=1;
do{
    console.log("apna collage")
    ii++;
}while(ii<=10);

//for-of loop

let str="pansuriya"
let size=0;
for(let i of str){ //iteratoe->operators
    console.log("i=",i);
    size++;
}

 console.log("string size=",size);

//for-in loop

let student={
    name : "pinal",
    age : 18,
    cgpa :8,
    ispass : true,

};
for(let key in student){
    console.log("key=",key ,student[key]);
}

//practice-1

for(let p=0; p<=100; p++){
    if(p%2 ===0)
    console.log(p)
}

//practice-2

let gamenum=25;
let usernum = prompt("guess the game number:");

while(usernum != gamenum){
    usernum = prompt("you entered wrong number,guess again:")
}
console.log("you entered the right number");

