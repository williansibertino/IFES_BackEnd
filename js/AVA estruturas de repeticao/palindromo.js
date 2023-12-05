// Elabore um programa que receba uma palavra do usuário e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente). 
// Utilize uma estrutura de repetição para comparar os caracteres.

// Pesquisa efetuada no site: 
// https://www.freecodecamp.org/portuguese/news/tres-maneiras-de-inverter-uma-string-em-javascript/

let palavra;
let palindromo = "";

palavra = prompt("Digite uma palavra para fazer a verificacao de Palindromo");

for (let i = palavra.length - 1; i >= 0; i--) {
    palindromo += palavra[i];
}
if (palavra == palindromo) {
    alert('A palavra é um Palíndromo.');
} else {
    alert('A palavra não é um Palíndromo.');
}