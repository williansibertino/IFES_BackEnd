// Conversor de Temperatura: Crie um programa que converta uma temperatura em graus Celsius para graus Fahrenheit. A fórmula é: F = (C * 9/5) + 32.

var prompt = require('readline-sync');

let celsius;
let fahrenheit;

let constCalculo1 = 9/5;
let constCalculo2 = 32;

celsius = prompt.question("Digite a temperatura em Graus Celsius: ");

fahrenheit = (celsius * constCalculo1) + constCalculo2;

console.log("A temperatura de " + celsius + "ºC é " + fahrenheit + "ºF Fahrenheit");