//Array

let marks = [90,78,97,50,65]
console.log(marks)
console.log(marks.length) //property

let sub = ["maths","hindi","english","gujarati","sciense"]
console.log(sub)

//looping in array
//for loop

for(let idx=0; idx<sub.length; idx++){
    console.log(sub[idx])
}

//for-of loop

for (let subject of sub){
    console.log(subject)
    
}

let cities = ["surat", "ahemdabad", "rajkot", "junagadh"]

for(let city of cities){
    console.log(city.toUpperCase())
}

//prctice-1

let smarks = [85,97,44,37,76,60]
    console.log(smarks)

    let sum=0;
    for(let val of smarks){
        sum+=val
    }
    let avg = sum / marks.length
    console.log(`avg marks of the class =${avg}`)

//practice-2

let items = [250,645,300,900,50]

// for of loop
let i =0
for(let val of items){
    
    let offer = val / 10;
    items[i] = items[i] - offer
    console.log(`value after offer  = ${items[i]}`)
    i++;
}

for(let i=0; i <items.length; i++){
    let offer = items [i]/ 10
    items[i]-=offer
}
console.log(items)

//Array methods

//push method - add end
let fruits = ["apple","chiku","grapes"]
fruits.push("banana","guavava")
console.log(fruits)

//pop method - delete end

fruits.pop()
console.log(fruits)

//tostring method - converted array to string
console.log(fruits.toString())
console.log(fruits) 

//concate -join multiple array
let friends = ["avisha","ruta"]
let bfriends =["pranjal", "shreya", "mency","srushti","ayushi","mira"]

let frds= friends.concat(bfriends)
console.log(frds)

//unshift method - add to start

friends.unshift("grishma")
console.log(friends)

//shift methode - delete to start

bfriends.shift()
console.log(bfriends)

//slice methode - return a peace of array

console.log(bfriends.slice(1,5))

//splice methode - change original arary (add,remov,replace)

let arr = [1,2,3,4,5,6,7,8]
//arr.splice(2,3,101,102)

arr.splice(4,1,101)
//arr.splice(3)

console.log(arr)

//practice-1

let companies =["bloomberg","microsoft","uber","google","ibm","netfix"]
console.log(companies)

companies.shift()

companies.splice(2,1,"ola")
companies.push("amazone")
console.log(companies)






