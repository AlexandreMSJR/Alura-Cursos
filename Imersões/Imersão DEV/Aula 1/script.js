let cotacaoDoDolar = 5.32;
let cotacaoDoEuro = 5.45;
let nome = prompt("Digite seu nome: ")
let valor = prompt("Digite o valor" );
let bitcoin = 119.389

let conversaoParaDolar = (valor * cotacaoDoDolar).toFixed(2);
let conversaoParaEuro = (valor * cotacaoDoEuro).toFixed(2);
let conversorparaBitcoin = (valor * bitcoin).toFixed(2);

alert(`Olá, ${nome}. Seu saldo ao converter para Dolar é ${conversaoParaDolar}`);
alert(`Olá, ${nome}. Seu saldo ao converter para Euro é ${conversaoParaEuro}`);
alert(`Olá, ${nome}. Seu saldo ao converter para Bitcoin é ${conversorparaBitcoinAlex}`);