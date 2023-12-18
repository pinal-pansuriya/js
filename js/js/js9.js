//DOM - document object model (part-2)
//DOM manipulation :
//Attributes

//getAttribute(attr) -> to get the attribute value

let div = document.querySelector("div")
console.log(div)

let id =div.getAttribute("id") // id access
console.log(id)

let name = div.getAttribute("name")
console.log(name)

let p = document.querySelector("p")
console.log(p.getAttribute("class"))

//setAttribute(attr,value) -> to set the attribute val (change attr value)


let parah =document.querySelector("p")
console.log(parah.setAttribute("class","new class"))

//style attribute ->change style value

let divv = document.querySelector("div")

div.style.backgroundColor = "pink"; //change style
div.style.fontSize = "26px"
div.innerText = "hello!"
//div.style.visibility = "hidden"


//insert elements : ->let el=document.createElement("div")

let newbtn = document.createElement("button") // -> create button
newbtn.innerText= "click me!"
console.dir(newbtn)

// let newheading = document.createElement("h1")
// newheading.innerText ="javascript"
// console.dir(newheading)

//1.node.append(el) ->adds at the end of node(inside)
let div1 = document.querySelector("div")
div.append(newbtn)

// let p1 = document.querySelector("p")
// p.append(newheading)

//2.node.prepend(el) ->adds at the start of node(inside)

div.prepend(newbtn)

//3.node.before(el) ->adds before the node(outside)

div.before(newbtn)

//4.node.after(el) ->adds after the node(outside)

div.after(newbtn)

//delete element :

//node.remove() ->removes the node

let p2 = document.querySelector("p")
p2.remove()

//practice

let newbutton = document.createElement("button")
newbutton.innerText ="click me!"


newbutton.style.backgroundColor = "red"
newbutton.style.color = "white"
console.dir(newbutton)

let body = document.querySelector("body")
body.prepend(newbutton)

//practice

let p3 = document.querySelector("p")

p3.classList.add(newclass)
