//Conversor de Moedas com Taxa de Câmbio Variável: 
// Crie um programa que converta uma quantidade de reais para dólares, o usuário irá informar quantos reais deseja converter, o valor do dólar é (R$4,86).

var prompt = require('readline-sync');

let moedaReal;
let moedaDolar;
let cotacaoMoeda = 4.86;

moedaReal = prompt.question("Digite a quantia em dinheiro que você tem: ");

moedaDolar = parseFloat(moedaReal) * parseFloat(cotacaoMoeda);

console.log("A quantia de R$ " + moedaReal + " Reais são exatamente $ " + moedaDolar.toFixed(2) + " Doláres");


