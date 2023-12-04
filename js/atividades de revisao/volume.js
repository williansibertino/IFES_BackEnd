function calcularVolume(){
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    const pi = 3.14;

    let volume = pi * (base * base) * altura;
    let litros = volume * 1000;

    alert("Essa caixa possui capacidade de " + litros + " litros");
}