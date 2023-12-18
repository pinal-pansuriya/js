//Events -> the change in the state of an object is know as an event.

let btn1 = document.querySelector("button")

btn1.onclick = (evt) => {
console.log("btn1 was clicked")
let a=25;
a++;
console.log(a)
console.log(evt)
console.log(evt.type)
console.log(evt.target)
console.log(evt.clientX,evt.clientY)
}  

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are inside div")
}

//add eventlistener
btn1.addEventListener("click",() => {
    console.log("button1 was clicked-hendler1")
})

btn1.addEventListener("click",() => {
    console.log("button1 was clicked-hendler2")
})

const handler3 = () => {
    
        console.log("button1 was clicked-hendler3")
}
btn1.addEventListener("click",handler3)

btn1.addEventListener("click",() => {
    console.log("button1 was clicked-hendler4")
})

//remove eventlistener
//note : the callback reference should be same to remove
btn1.removeEventListener("click",handler3)

//practice

let modebtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currmode = "light" ;

modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        currmode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currmode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currmode)
});

