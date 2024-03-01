// callbacks,promises & async await

// async await >> promise chains >> callback hell

//callback

function sum(a, b) {
    console.log(a + b)
}
function calculator(a, b, sumcallback) {
    sumcallback(a, b)
}

calculator(1, 2, sum)

//Nesting 

let age = 18
if (age >= 17) {
    if (age >= 60) {
        console.log("senior")
    } else {
        console.log("middle")
    }
} else {
    console.log("child")
}

//Callback Hell -> nested callback

function getdata(dataid, getNextData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid)
            resolve("success")
            if (getNextData) {
                getNextData()
            }
        }, 5000)
    })
}
getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {
            getdata(4)
        })
})

});

//promises

const getPromise = () => {

  return  new Promise((resolve, reject) => {
        console.log(" i am a promise")
        resolve(123)
        
    })
};

let promise = getPromise()
promise.then((res) => {
    console.log("promise fulfilled" ,res)
})

promise.catch((err) => {
    console.log("rejected" , err)
})

//promise chain

function asyncfun1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log( "data1")
            resolve("success")
        } , 2000)
    })
}

function asyncfun2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log( "data2")
            resolve("success")
        } , 2000)
    })
}

console.log("fetching data1")
let p1 = asyncfun1()
p1.then((res) => {
    console.log(res)
})

console.log("fetching data2")
let p2 = asyncfun2()
p2.then((res) => {
    console.log(res)
})

//Async-Await

function api() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("weather data")
        resolve(200)
      } , 2000)
    });
}

async function getWeatherData() {
    await api()
} 