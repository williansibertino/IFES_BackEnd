// Conversor de Horas para Segundos: Peça ao usuário para inserir uma quantidade de horas e converta-a para segundos.

var prompt = require('readline-sync');

let tempoHora;
let tempoMinutos;
let tempoSegundos;
let constTempo = 60;

console.log("Logo abaixo você terá que digitar dois valores para converter a quantidade de horas para minutos, o primeiro valor em Horas e Depois o valor de Minutos.")

tempoHora = prompt.question("Digite somente a quantidade de Horas: ");
tempoMinutos = prompt.question("Digite somente a quantidade de Minutos: ");

if(tempoMinutos === "") {
    tempoMinutos = 0;
} else {
    console.log("Digite um valor entre maior que 0 ou deixe em branco o campo")
}

tempoSegundos = (
    (
        (parseInt(tempoHora) * parseInt(constTempo)) + parseInt(tempoMinutos)
    ) 
    * parseInt(constTempo)
);

console.log("Você digitou o total de " + tempoHora + " horas e " + tempoMinutos + " minutos " + "que deram um total de " + tempoSegundos + " segundos");