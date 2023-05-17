const numeros = [13, 14, 15, 16, 17, 18];

let max = 0;

for ( let numero of numeros ) {

  if (max < numero)
    max = numero;
}
console.log(max);
