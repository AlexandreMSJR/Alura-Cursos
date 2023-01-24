const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "53 53623623623";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

console.log(objPersonagem)

delete objPersonagem.aliado

console.log(objPersonagem)