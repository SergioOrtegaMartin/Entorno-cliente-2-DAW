class Alumno{
    constructor(name, surname, course){
    this.nombre = name;
    this.apellido = surname;
    this.curso = course;
    }
    imprimedatos()
    {
        console.log(`El alumno ${this.nombre} ${this.apellido} pertenece a ${this.curso}`)
    }
    despertar (segundos)
{
    setTimeout( ()=>{
        console.log(`Acaba de despertarse ${this.nombre}`);
    },segundos*1000)
}
}

let al1 = new Alumno ('Carlos', 'Moreno','2 DAW')
let al2 = new Alumno ('Pablo', 'Muñoz','1 SMR')
// al1.imprimedatos();
// al2.imprimedatos();

// console.log(al2.nombre)
// console.log(al1.nombre)
// //al2.despertar(2)

class Alumnociclos extends Alumno{
    constructor(nom, ape, curso, nivelfrikismo)
    {
        super(nom,ape,curso)
        this.frikometro = nivelfrikismo;
    }
    getinfor()
    {
        super.imprimedatos() + console.log(` y su nivel de frikismo es ${this.frikometro}`);
    }
}

let al3 = new Alumnociclos ('Jose Antonio', 'Duarte','2 DAW', 100);
al3.getinfor();

