//tostring

let num = [1,2,3,4,5]
let b=num.toString()
console.log(num)

//join

let c=num.join(".")
console.log(c)

//pop->remove last el

let d=num.pop()
console.log(d)
// console.log(num)

//push->add end el

let e=num.push(1)
console.log(e)
console.log(num)

//shift->remove first el

let f = num.shift()
console.log(f)
console.log(num)

//unshift->add first el

let g = num.unshift(10)
console.log(f)
console.log(num)

//delete (operator)

// delete num[0]
// console.log(num)

//concate -> join arrs

let arr=[10,50,45]
let newarr= num.concat(arr)
console.log(newarr)

//sort

// arr.sort()
// console.log(arr)

//asse,dis
let compare = (a,b) => {

    // return a-b
    return b-a
}
arr.sort(compare)
console.log(arr)

//revers->revers arr

num.reverse()
console.log(num)

//splice ->add new item
// num.splice(idx,value,addval)

arr.splice(0,2,20,30)
console.log(arr)
// let deletedvalue=arr.splice(0,2,20,30)
// console.log(deletedvalue)

//slice ->return newarr

let newarray=num.slice(2,4)
console.log(newarray)



