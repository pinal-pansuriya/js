

    
//    message = "good global"
// function hello1(){
//    let message = "Good Morning"
//     {
//        let message = "Good Afternoon "
//         console.log("hello 1" , message)
//     }
//     // console.log(message)
//     let c = function hello2(){
// //    // message ="pinal"
//       console.log(" I am c",message)
//    }
//     return c
// }

// c=hello1()
// c()

function returnfun(){
    const x = () => {
        let a=1
        console.log(a)
        const y =() => {
            // let a=2
            console.log(a)
            const z= () => {
                // let a=3
                console.log(a)
            }
            z()
        }
        a=100
        y()
    }
    return x
}

let a = returnfun()
a()