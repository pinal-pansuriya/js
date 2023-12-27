let jsonobj = {
    name : "pinal",
    clg : "ddbkng",
    filed: "bca",
    age : 18,

}
console.log(jsonobj)

//stringify -> convert string
let myjasontr = JSON.stringify(jsonobj)
console.log(myjasontr)

myjasontr=myjasontr.replace("pinal","pinu")
console.log(myjasontr)

//convert obj

newjsonobj = JSON.parse(myjasontr)
console.log(newjsonobj)
