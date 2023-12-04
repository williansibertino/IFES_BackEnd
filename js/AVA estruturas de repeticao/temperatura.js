// Desenvolva um programa que permita ao usuário converter uma temperatura de Celsius para Fahrenheit. 
// Solicite a temperatura em Celsius e forneça o resultado em Fahrenheit. 
// Utilize uma estrutura de repetição para permitir que o usuário faça várias conversões.

let tempCelsius;
let tempFahrenheit;
let grausAcrescimo = 32;
let opcaoSistema;

do {
    tempCelsius = Number.parseFloat(prompt("Digite a temperatura em Celsius?"));

    for(let i = 1; i < 2; i++) {
        tempFahrenheit = (tempCelsius * 1.8) + grausAcrescimo;
        alert(`O Resultado da Temparatura de ${tempCelsius}º Celsius é ${tempFahrenheit}º Fahrenheit`);
    }

    opcaoSistema = prompt("Voce deseja continuar no sistema? sim | nao");
} while (opcaoSistema == "sim");