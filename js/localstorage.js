let key = prompt("enter key you want to set")
let value= prompt("enter value forr you want to set")

localStorage.setItem(key,value)
console.log(key,value)

//getitem
console.log(localStorage.getItem(key)) //display key value

//removeitem

if(key == "red" || key == "blue"){
    localStorage.removeItem(key)
}

//clear
// if(key == 0){
//     localStorage.clear()
// }

