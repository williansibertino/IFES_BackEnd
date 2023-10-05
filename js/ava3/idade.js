let primeiraIdade;
let segundaIdade;

primeiraIdade = prompt("Digite a primeira idade.")
segundaIdade = prompt("Digite a segunda idade.")

if(primeiraIdade < 1 || segundaIdade < 1) {
    alert("Você digitou uma idade abaixo do minimo que é 1 ano.")
} else if (primeiraIdade > segundaIdade){
    alert("A idade de " + primeiraIdade + " anos é maior que você digitou.")
} else if (primeiraIdade == segundaIdade) {
    alert("As duas idades que você digitou são iguais.")
} else {
    alert(" A idade de " + segundaIdade + " anos é maior que você digitou.")
}