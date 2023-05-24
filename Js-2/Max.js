const numeros = [12, 13, 14, 15];

let max = 0;

for ( let numero of numeros ) {

  if (max < numero)
    max = numero;
}
console.log(max);
