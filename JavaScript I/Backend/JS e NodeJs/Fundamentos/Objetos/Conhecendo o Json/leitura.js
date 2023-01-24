const dados = require("./cliente.json");

// console.log(dados);
// console.log(typeof dados);

// const lutador = require("./lutador.json");

// console.log(lutador.altura);

const clienteEmString = JSON.stringify(dados);

// console.log(clienteEmString);
// console.log(typeof clienteEmString);
// console.log(clienteEmString.altura);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);