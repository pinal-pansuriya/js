//game - rock paper scissors

let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const uscore = document.querySelector("#user-score")
const cscore = document.querySelector("#computer-score")

const compchoice= () => {
    const options = ["rock", "paper" , "scissors"]
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}

const drawgame = () => {
    console.log("game is draw")
    msg.innerText = "game is draw.play again."
    msg.style.backgroundColor = "black"
}

const showWinner = (userwin) => {
    if(userwin){
        userscore++
        uscore.innerText = userscore
        //console.log("you win!")
        msg.innerText = "you win!"
        msg.style.backgroundColor = "green"
    }else{
        compscore++
        cscore.innerText = compscore
       //console.log("you lose!")
        msg.innerText = "you lose!"
        msg.style.backgroundColor = "red"
    }
}
const playgame = (userchoice) => {
   console.log("user choice = ", userchoice)

//computer choice

   const comchoice = compchoice()
   console.log("computer choice = ", comchoice)

   if(userchoice === comchoice){
    drawgame()
   }else{
    let userwin = true
    if(userchoice === "rock"){
        userwin = comchoice === "paper" ? true : false
    }else if(userchoice === "paper"){
        userwin = comchoice === "scissors" ? false : true
   }else {
        userwin = comchoice === "rock" ? false : true
   }
    showWinner(userwin)
}
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id")
    playgame(userchoice)
});
});