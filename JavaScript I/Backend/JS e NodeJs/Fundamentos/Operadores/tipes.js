// Tipagem de dados

let numero = 2;
let texto = "2";

console.log(numero == texto);
console.log(numero === texto);

// == compara apenas o valor 
// ===  compara o valor e o tipo 

// conversão explícita

let numeroString = String(numero);

console.log(typeof("String transformando número" + String(123)));

console.log(typeof(numeroString));

let textoNumero = Number(texto);

console.log(typeof(textoNumero));
console.log(numeroString, "==", textoNumero, "?")
console.log(numeroString == textoNumero)
console.log(numeroString, "===", textoNumero, "?")
console.log(numeroString === textoNumero)