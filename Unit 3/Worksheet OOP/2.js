// TASK 2
// Write a Car class whose constructor initializes model and milesPerGallon from arguments.
// All instances built with Car:
// should initialize with a tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank.
// Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
// A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

class Car{
    constructor(model, mpg){
    this.modelo = model;
    this.consumo = mpg;
    this.deposito = 0;
    this.cuentakms = 0;
    //this.autonomia = this.consumo * 20;
    }
    fill(){
        this.deposito = 0
        this.deposito = 20;
    }
    drive(distance){
        this.cuentakms += distance
        this.deposito  -= (1/this.consumo)*distance
        if (this.deposito <= 0){
            //console.log (`I ran out of fuel at ${this.autonomia} miles!`)
            console.log (`I ran out of fuel at ${this.cuentakms} miles!`)

        }
    }


}



