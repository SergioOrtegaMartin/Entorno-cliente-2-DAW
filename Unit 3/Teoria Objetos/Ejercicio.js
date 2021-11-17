class Perro{
    constructor(name, age, breed,size){
    this.nombre = name;
    this.edad = age;
    this.raza = breed;
    this.tamanio = size;
    }
    caracteristicas(){
        return `Guau! Mi nombre es ${this.nombre}, tengo ${this.edad} años, soy un ${this.raza} de tamaño ${this.tamanio}`
    }
}

yogui=new Perro("Yoji",5,"Bodeguero","XL")

class JaulaPerros{
    constructor(){
    this.jaula =[];
    }
    addPerro(perro){
        this.jaula.push(perro);
    }
    buscarPerro(nombreperro){
        for (this.perro of this.jaula){
            if (this.perro.nombre == nombreperro){
                return this.perro
            }else{
                return "No lo encuentro"
            }
        }
    }
    mostrarPerros(){
        if (this.jaula.length == 1){
        console.log(`Hay un solo perro en la jaula`)
        }else{
            console.log(`Hay ${this.jaula.length} perros en la jaula`)
        }
        for (this.perro of this.jaula){
            console.log(this.perro)
    }}

}

jaula = new JaulaPerros

//jaula.addPerro(yogui)
//jaula.buscarPerro("Yoji")
//jaula.mostrarPerros()