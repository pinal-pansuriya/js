//practice 1

let h2 = document.querySelector("h2")
console.dir(h2.innerText)

h2.innerText = h2.innerText + "from apana college student"

//practice-2

let divs=document.querySelectorAll(".box")

    let idx=1;
for (div of divs){
     div.innerText = `new unique value ${idx}`
    idx++;
}
// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"
