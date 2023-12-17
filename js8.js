//DOM : document object model

console.log("pinal")
console.log(window)
console.dir(window.Document)
console.dir(document.body.childNodes[1])

//DOM manipulation(access elements)

//selecting with id

let heading=document.getElementById("heading")
console.dir(heading)

//selecting with class(return html collection,similer array)

let headings=document.getElementsByClassName("heading-class")
console.dir(headings)

//selecting with tag(access tags)

let parahs = document.getElementsByTagName("p")
console.dir(parahs)

//query selector(access id,class,tag)

let firstel=document.querySelector("p")//return 1st element//tag
console.dir(firstel)

let allele=document.querySelectorAll(".heading-class")//return all elements//class
console.dir(allele)

let id=document.querySelector("#head")//id
console.dir(id)

//properties ->DOM manipulation

//1.tagname

//2.innerText properties
// -> return the text content of the element and all children.(div.innerText)

let div = document.querySelector("div")
console.dir(div)

//3.innerHTML properties
// -> return the plain text or HTML contents in the elements.(div.innetHTML)

//div.innerHTML="abcd" //changes

//4.textContent properties
// -> return textual content even for hidden elements.











