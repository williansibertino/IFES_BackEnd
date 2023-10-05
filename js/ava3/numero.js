// Cálculo do Valor Absoluto:
// Peça ao usuário para inserir um número. Calcule o valor absoluto do número (ou seja, remova o sinal negativo, se houver) usando uma estrutura if-else.

let dadoNumero;
let valorAbsoluto;
let negativoAbsoluto = -1;

dadoNumero = prompt("Digite um número para calcular seu valor absoluto.");

if (dadoNumero < 0) {
    valorAbsoluto = dadoNumero * negativoAbsoluto;
    alert("O valor absoluto de " + dadoNumero + " é " + valorAbsoluto + " pois é a quantidade de casas até chegar a zero.");
} else {
    alert("O valor absoluto de " + dadoNumero + " é " + dadoNumero + " pois é a quantidade de casas até chegar a zero.");
}