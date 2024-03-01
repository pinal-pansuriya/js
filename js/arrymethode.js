//tostring

let num = [1,2,3,4,5]
let b=num.toString()
console.log("tostring",b)

//join

let c=num.join(".")
console.log("join",c)

//pop->remove last el

let d=num.pop()
console.log("pop",d)
// console.log(num)

//push->add end el

let e=num.push(1)
console.log(e)
console.log("push",num)

//shift->remove first el

let f = num.shift()
console.log(f)
console.log("shift",num)

//unshift->add first el

let g = num.unshift(10)
console.log(g)
console.log("unshift",num)

//delete (operator)

// delete num[0]
// console.log("delete",num)

//concate -> join arrs

let arr=[10,50,45]
let newarr= num.concat(arr)
console.log("concate",newarr)

//sort

// arr.sort()
// console.log("sort",arr)

//asse,dis
// let name = (a,b) => {

//     // return a-b
//     return b-a
// }
arr.sort((a,b) => {

    return a-b
    // return b-a
})
console.log("sort",arr)

//revers->revers arr

num.reverse()
console.log("reserve",num)

//splice ->add new item
// num.splice(idx,value,addval)

arr.splice(0,2,20,30)
console.log("splice",arr)
// let deletedvalue=arr.splice(0,2,20,30)
// console.log(deletedvalue)

//slice ->return newarr

let newarray=num.slice(2,4)
console.log("slice",newarray)

