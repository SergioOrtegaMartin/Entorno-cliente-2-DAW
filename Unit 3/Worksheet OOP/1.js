// TASK 1
// Write a Person class whose constructor initializes name and age from arguments.
// All instances of Person should also initialize with an empty stomach array.
// Give instances of Person the ability to .eat("someFood"):
// When eating an edible, it should be pushed into the stomach.
// The eat method should have no effect if there are 10 items in the stomach.
// Give instances of Person the ability to .poop():
// When an instance poops, its stomach should empty.
// Give instances of Person a method .toString():
// It should return a string with name and age. Example: "Mary, 50"

class Persona{
    constructor(name, age){
    this.nombre = name;
    this.edad = age;
    this.stomach = [];
    }
    tostring()
    {
        console.log(`${this.nombre}, ${this.edad}`)
    }
    eat(comida){
        if (this.stomach.length < 10){
            this.stomach.push(comida)}
            else{console.log('Estoy lleno')}
    }
    poop(){
        this.stomach = [];
    }
}