var numeroSecreto = parseInt(Math.random() * 1001);
let quantidadeDeChutes = 0;

while (numeroSecreto != chute) {
    var chute = prompt('Digite o número entre 1 e 1000');

    if (chute < 0 || chute > 1000) {
        alert('Valor menor ou igual a zero, tente novamente')
    } else if (chute == numeroSecreto) {
        alert(`Parabéns, acertou o número é ${numeroSecreto} e foi necessário ${quantidadeDeChutes + 1} de tentativas.`)
    } else if (chute > numeroSecreto) {
        alert('Errou... o número secreto é menor')
    } else if (chute < numeroSecreto)
        alert('Erro... o número secreto é maior')
    quantidadeDeChutes++

    if (quantidadeDeChutes >= 10)
        alert('Você excedeu a quantidade de tentativas')
};