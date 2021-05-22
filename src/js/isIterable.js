

const isIterable = (array) => {
    try {
        for(let i of array){
            console.log('es iterable')
            return true;
        }
    } catch (error) {
        console.log('no es iterable')
        return false;
    }
}

let data = [1,2,3,4,5];
let s = 25;

console.log(isIterable(data))