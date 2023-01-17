const livros = require ('./listaLivros');
const menorValor = require ('./menorValor')


for (let atual = 0; atual  < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    // console.log('Posição Atual',atual)
    // console.log('Livro Atual',livroAtual)
    let livroMenorPreco = livros[menor];
    // console.log('Livro menor preço',livroAtual)

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
};

console.log(livros)