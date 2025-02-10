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
dog.eat()
//  // // in constructor

function Animal(name) {
    this.name=name
}


Animal.prototype.speak=function() {
    console.log(this.name+' sounds');
    
}


let dog2=new Animal('dog')

dog2.speak()

console.log(dog2);
