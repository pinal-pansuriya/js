//local,global & function scope
// let -> block level scope
// var -> global scope

let p=2
function ax(){
let a=10
console.log(p)
console.log(a)
}
ax()
// console.log(a)
console.log(p)

