//create unique(new) primitive

const a = "pinal"
const b="pinal"

console.log(a===b)
console.log(null === null)
console.log(undefined===undefined)

const k1 = Symbol("identifier 1")
const k2 = Symbol("identifier 2")

myobj = {}
myobj[k1] = "pinal"
myobj[k2] = "pranjal"
myobj["name"] = "hemal"

console.log(myobj)
console.log(myobj[k1])
console.log(myobj[k2])

//symbols are ignored in for in loop
for(key in myobj){
    console.log(key,myobj[key])
}

console.log(JSON.stringify(myobj))

