//classes & objects
 
//object 

const student = {
    name : "pinal pansuriya",
    marks :94.4,
    printMarks : function(){  //methods
        console.log("marks =",this.marks)  //student.marks
    }
}

//create prototype

const employee = {
    caltxt(){
        console.log("tax rate is 10%")
    }
}

const pinal = {
    salary : 50000,
    caltxt(){
        console.log("tax rate is 20%")
    }
}

pinal.__proto__=employee

//classes

class personn {
    constructor(name){
        this.name=name
    }
}

class toyotacar {
    constructor(brand,mileage) {
        console.log("creating new object")
        this.brand = brand;
    }

    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }

    setbrand(brand){
        this.brandname = brand
    }
}

let fortuner = new toyotacar("fortuner" ,10) // create object in class (costructor)
console.log(fortuner)

//inharitance

class parent {
    hello() {
    console.log("hello")
  }
}

class child extends parent {}

let obj = new child()

class person {
    eat() {
        console.log("eat")
    }
    sleep() {
        console.log("sleep")
    }
}

class engineer extends personn {
    constructor(name){
        super(name) //to invoke parent  constructor (super keyword)
        // this.branch = branch;
    }
    work() 
    {
        console.log("solve problem,build something")
    }
}

let hemal = new engineer("pinal")



//practice

let data = "secerate information"

class user{
    constructor(name,email) {
    this.name=name
    this.email=email
  }
   viewdata() {
    console.log(" data =" , data)
   }
}

class admin extends user {
    constructor(name,email){
        super(name,email)
    }
    editdata(){
        data = "some mew value"
    }
}

let stud1 = new user("pinal" , "pinal12@gmail.com")
let stud2 = new user("pranjal" , "pranjal23@gmail.com")

let teacher = new user("deam" , "deam@gamil.com")

let admin1 = new admin("admin", "admin@gmail.com")

