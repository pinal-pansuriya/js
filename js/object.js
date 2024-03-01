let a={
    fname : "pinal",
    lname : "pansuriya",
    age : 18,
    fruits : ['appale' , 'guavava' , 'banana' , 'chiku'],
    living : {
        city : "vaghniya",
        country : "india"
    },
    salary : function(){
        return 30000        
    },
    fullname : function(){
        return this.fname  +  this.lname
    }
}
console.log(a)
console.log(a.living.city)
console.log(a.fullname())

// second methode create object

const person = new Object()
person.firstname = 'yahoo'
person.lastname = 'baba'
person.age = 20

console.log(person)