// tipo de dado
// booleanos

// conversão implícita
const NUMERO = 456;
let NUMERO_STRING = "456";

console.log(NUMERO === NUMERO_STRING);
console.log(NUMERO == NUMERO_STRING);
console.log(NUMERO + NUMERO_STRING);

// conversão explícita 
// Number()
// String()

console.log(NUMERO + Number(NUMERO_STRING));
NUMERO_STRING = "456a"
console.log(NUMERO + Number(NUMERO_STRING));
