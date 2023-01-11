const livros = require('./listaLivros')

function menorValor (arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco ) {
            maisBarato = atual
        }
    }
    return maisBarato
}

// for (let atual = 0; atual < livros.length; atual++) {
//     if (livros[atual].preco < livros[maisBarato].preco ) {
//         maisBarato = atual
//     }
// // }

// console.log(`O livro mais barato custa ${livros[maisBarato].preco} e seu títulos é ${livros[maisBarato].titulo}.`)

module.exports = menorValor;