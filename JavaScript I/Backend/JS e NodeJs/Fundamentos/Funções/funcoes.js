/*  let x = "";
    console.log(x);
    x = "oi";

    Declaração da função
    
    1) Declara a função
*/

function imprimeTexto(texto) {
    console.log(texto);

};

// 2) Executa a função (1 ou + vezes)

imprimeTexto("Teste");
imprimeTexto(soma())

// três formas de escrever funções

function soma() {
    return 2 + 2;
}

console.log(soma());