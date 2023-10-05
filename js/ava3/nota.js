// Média de Notas:
// Peça ao usuário para inserir três notas e use if-else para calcular e exibir a média das notas, indicando se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

let primeiraNota;
let segundaNota;
let terceiraNota;
let mediaNotas;
let quantidadeNotas = 3;

primeiraNota = prompt("Digite a primeira nota entre 1 e 10?");
segundaNota = prompt("Digite a segunda nota entre 1 e 10?");
terceiraNota = prompt("Dgite a terceira nota entre 1 e 10?");

mediaNotas = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / parseInt(quantidadeNotas);

if(mediaNotas >= 7) {
    alert("Você está aprovado. Sua nota geral foi " + mediaNotas);
} else {
    alert("Você está reprovado. Sua nota geral foi " + mediaNotas);
}