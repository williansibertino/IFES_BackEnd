
//Mês do Ano:
// Peça ao usuário para inserir um número de 1 a 12 e use uma estrutura if-else para exibir o mês correspondente.

let mesdoAno;

mesdoAno = prompt("Digite de 1 a 12 para saber qual é o mês do ano em que você está.");

if (mesdoAno < 1 && mesdoAno > 12) {
    alert("Digite um mês de 1 a 12");
}  else if (mesdoAno == 1) {
    alert("O número " + mesdoAno + " é referente ao mês de Janeiro");
} else if (mesdoAno == 2) {
    alert("O número " + mesdoAno + " é referente ao mês de Fevereiro");
} else if (mesdoAno == 3) {
    alert("O número " + mesdoAno + " é referente ao mês de Março");
} else if (mesdoAno == 4) {
    alert("O número " + mesdoAno + " é referente ao mês de Abril");
} else if (mesdoAno == 5) {
    alert("O número " + mesdoAno + " é referente ao mês de Maio");
} else if (mesdoAno == 6) {
    alert("O número " + mesdoAno + " é referente ao mês de Junho");
} else if (mesdoAno == 7) {
    alert("O número " + mesdoAno + " é referente ao mês de Julho");
} else if (mesdoAno == 8) {
    alert("O número " + mesdoAno + " é referente ao mês de Agosto");
} else if (mesdoAno == 9) {
    alert("O número " + mesdoAno + " é referente ao mês de Setembro");
} else if (mesdoAno == 10) {
    alert("O número " + mesdoAno + " é referente ao mês de Outubro");
} else if (mesdoAno == 11) {
    alert("O número " + mesdoAno + " é referente ao mês de Novembro");
} else {
    alert("O número " + mesdoAno + " é referente ao mês de Dezembro");
};