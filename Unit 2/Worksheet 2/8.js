//8. Crea una web en la que cada vez que se accede se muestre una imagen (de modo aleatorio) de entre 3 posibles

var numero = Math.trunc(Math.random()*(4 - 1)+1);

document.write(`<img src='${numero}.jpg'></img>`);
