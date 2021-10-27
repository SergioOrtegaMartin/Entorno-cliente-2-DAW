var numeros = [8, 7, 27, 12, 54, 90, 56, 34, 123, 0];

//ordena de forma ascendente
numeros.sort((a, b) => a - b)

//ordena de forma descendente
numeros.sort((a, b) => b - a)

var coches = [
    { marca: 'Mercedes', modelo: 'Clase SLK', transmision: 'manual'},
    { marca: 'Mazda', modelo: 'MX-5', transmision: 'manual'},
    { marca: 'Alfa Romeo', modelo: '159', transmision: 'automatica' },
    { marca: 'Fiat', modelo: 'Multipla', transmision: 'manual' },
    { marca: 'Lada', modelo: 'Niva', transmision: 'manual' },
    { marca: 'BMW', modelo: 'Serie 3', transmision: 'manual' },
    { marca: 'Opel', modelo: 'Astra', transmision: 'manual' },
    { marca: 'Ford', modelo: 'Sierra', transmision: 'manual' }
  ];

  coches.sort((a, b) => {
    if (a.marca < b.marca) {
      return -1;
    }
    else if (a.marca > b.marca) {
      return 1;
    } else {
        if (a.modelo < b.modelo){
            return -1;
        } else if (a.modelo > b.modelo){
            return 1;
        } else{
            if (a.transmision < b.transmision){
                return -1
            } else if (a.transmision > b.transmision){
                return 1
            } else {
                return 0
            };
        }
    }
  });