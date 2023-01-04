const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];

console.log(numeros);

const numerosJuntos = [...numerosPares,...numerosImpares];

console.log(numerosJuntos);

const [num1, num2,...outrosNumeros] = [1, 2, 3, 4, 5, 6];

const pessoa = {
    nome: 'Ju',
    idade:25,
};

const pessoaComTelefone = {...pessoa, telefone: 123421521};

console.log(pessoaComTelefone);

//const nome = pessoa.nome
const { nome } = pessoa
const { idade } = pessoa

console.log(nome);
console.log(idade);

function imprimeDdados1(dados) {
    const { nome, idade } = dados
    console.log(nome, idade)
}

function imprimeDados2({ nome, idade }) {
    console.log(nome, idade)
}


imprimeDdados1(pessoa)
imprimeDados2(pessoa)