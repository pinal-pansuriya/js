function*numgen(){
    let i =0
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4
    while(true){
        yield i++
    }
}

const gen = numgen()
console.log(gen.next())
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// function ab(){
//     let a = 15
//     console.log(++a)//16 15
//     console.log(a++)//16 16
//     console.log(a++)//17 17
//     console.log(++a)//19 18
// }
// ab()