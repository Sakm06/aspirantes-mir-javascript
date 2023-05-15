const array = [5, 10, 2];

const suma1 = array.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
}, 0);

console.log(suma1);