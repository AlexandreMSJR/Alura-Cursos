// declaração de funcao

function minhaFuncao(param) {
    // bloco de código
};

minhaFuncao();

// expressão de função

// const soma = function(num1, num2){ return num1 + num2};
//console.log(soma(2, 2))
// 

// Diferença principal: HOISTING
// Funções e var são "Listadas" no topo do arquivo

console.log(apresentar());

function apresentar() {
    return "Olá"
}

// console.log(soma(2, 2))
// const soma = function(num1, num2){ return num1 + num2};