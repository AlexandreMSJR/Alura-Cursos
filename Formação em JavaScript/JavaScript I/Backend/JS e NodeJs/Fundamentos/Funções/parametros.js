function soma(x, y) {

    return x + y
};

// parâmetros x argumetos (Parâmetros)

// console.log(soma(2, 2));
console.log(soma(4, "5"));

// ordem dos parâmetros
function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
};

console.log(nomeIdade(15, "Alexandre"))

function multiplica (num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5)))