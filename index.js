let animal = {
    eat() {
        console.log('eating');

    }
}


let dog = {
    bark() {
        console.log('barking');

    }
}

let hen = {
    walking: function () {
        console.log('walking');

    }
}


Object.setPrototypeOf(dog,animal)
Object.setPrototypeOf(hen,animal)
hen.eat()
dog.eat()

