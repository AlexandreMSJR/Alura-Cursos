const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11224321521",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "Altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});