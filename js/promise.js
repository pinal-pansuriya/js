const mypromise = new Promise((resolve,reject) => {
    const a=3,b=2
    const c= a+b
    if(c===4){
         resolve(`yes , ${a} + ${b} = 4`)
    }else{
        reject(`no , ${a} + ${b} = 4`)
    }
})

// let message
// mypromise.then((m) => {
//     console.log(m)
// }).catch((err) => {
//     console.log(err)
//})