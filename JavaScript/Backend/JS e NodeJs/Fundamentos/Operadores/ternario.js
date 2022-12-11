const idadeMinima = 18;
const idadeCliente = 16;

if (idadeMinima <= idadeCliente) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Ternário = Condição ? true : false

console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");

const minhaIdade = 20;
const minhaIdade2 = 10;
const bebidaMaior = "Cerveja";
const bebidaMenor = "Suco";

console.log(`Por favor quero beber ${minhaIdade >= idadeMinima ? bebidaMaior : bebidaMenor}`);
console.log(`Por favor quero beber ${minhaIdade2 >= idadeMinima ? bebidaMaior : bebidaMenor}`);