//high order fun -> accept arg
//callback -> call fun

function add(a,b,cb){
   let result = a+b
   cb(result)
}

function showresult(result){
    console.log(result)
}
showresult(30)

// add(2,4, function(val) {
//     console.log(val)
// })

add(2,4,showresult)