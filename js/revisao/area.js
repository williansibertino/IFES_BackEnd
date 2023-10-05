// Solicite ao usuário que informe dois números (base e altura) e calcule a área de um terreno retangular
var prompt = require('readline-sync');

let base;
let altura;
let areaTerreno;

base = prompt.question("Digite o valor da base do terreno: ");
altura = prompt.question("Digite o valor da altura do terreno: ");

areaTerreno = parseFloat(base) * parseFloat(altura);

console.log("O tamanho do terreno é: " + areaTerreno + "m².");