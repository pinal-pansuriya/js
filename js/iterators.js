// Iterators

let fruitsIterator = (values)=> {
    let nextIndex = 0;
    // we will return an object
    return{
        next : ()=>{
            if (nextIndex < values.length) {
                // we will return below object
                return{
                    value : values[nextIndex++],
                    done : false
                }
            }
            else{
                // we will return below object with only done
                return{
                    done : true
                } 
            }
        }
    }
}

const myArray = ['Apple','Banana','Orange','Grapes'];
console.log('My Array is :', myArray);

// using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
