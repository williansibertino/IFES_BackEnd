// Classificação de IMC:
//Escreva um programa em JavaScript que solicita ao usuário seu peso (em quilogramas) e sua altura (em metros). Em seguida, calcule o IMC com a fórmula:

let peso;
let altura;
let imc;

// Foi utilizado o toString + o replace para mudar a entrada padrão dos dados de '.' para ',', comumente utilizado em nosso país.
peso = prompt("Digite seu peso em quilogramas").toString().replace(',','.');
altura = prompt("Dgite sua altura em metros").toString().replace(',','.');

imc = parseFloat(peso) / ( parseFloat(altura) * parseFloat(altura));

if(imc > 0 && imc < 18.5) {
    alert("Abaixo do peso. O seu IMC deu o resultado de " + imc.toFixed(1));
} else if (imc >= 18.5 && imc <= 24.9){
    alert("Peso normal. O seu IMC deu o resultado de " + imc.toFixed(1));
} else if (imc >= 25.0 && imc <= 29.9){
    alert("Sobrepeso. O seu IMC deu o resultado de " + imc.toFixed(1));
} else if (imc >= 30.0 && imc <= 34.9){
    alert("Obesidade Grau 1. O seu IMC deu o resultado de " + imc.toFixed(1));
} else if (imc >= 35.0 && imc <= 39.9){
    alert("Obesidade Grau 2. O seu IMC deu o resultado de " + imc.toFixed(1));
} else if(imc >= 40) {
    alert("Obesidade Grau 3. O seu IMC deu o resultado de " + imc.toFixed(1));
} else {
    alert("Não foi possível calcular o IMC. Tente novamente.");
}
