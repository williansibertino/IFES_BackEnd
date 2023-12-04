let numeroAleatorio = Math.floor(Math.random() * 100);
let numeroPalpite = 0;

while(numeroPalpite != numeroAleatorio) {
    numeroPalpite = prompt('Digite seu palpite:');
    if(numeroPalpite < numeroAleatorio) {
        alert('O numero sorteado e maior que seu palpite');
    } else if (numeroPalpite > numeroAleatorio){
        alert('O numero sorteado e menor que seu palpite');
    }
}
alert(`Voce acertou!, o numero sorteado foi de ${numeroAleatorio}`);
