/*
Implemente o jogo de dados Craps. 
O jogador lança dois dados e a soma dos valores determina o resultado. 
Se a soma for 7 ou 11 na primeira rodada, o jogador ganha. Se for 2, 3 ou 12, o jogador perde. 
Para qualquer outro resultado, esse número se torna o "ponto" e 
o jogador continua lançando os dados até obter o mesmo número (ganha) ou até obter 7 (perde). 
Utilize estruturas de repetição para simular as rodadas do jogo.*/

alert('REGRAS DO JOGO \n1) Se for 7 ou 11 pontos na primeira rodada você vence.\n2) Se for 2, 3 ou 12 pontos voce perdeu.\n3) Se voce obter 7 novamente voce perde.');

for(let i = 1;i < 11; i++) {
    
    // O comando Math.ceil(), ele permite que o numero aleatorio varie somente do 1 a 6.
    // O comando Math.floor() ou Math.round(), não dava certo, porque estava variando de 0 a 6
    let dado1 = Math.ceil(Math.random() * 6);
    let dado2 = Math.ceil(Math.random() * 6);
    let [soma] = dado1 + dado2;

    alert(`(${i}º) RODADA - Você rolou dois dados e fez ${soma} pontos.\nVocê tirou ${dado1} no primeiro dado.\nVoce tirou ${dado2} no segundo dado.`);

    if (soma == 7 && i < 2 || soma == 11 && i < 2) {
        alert(`Parabéns, você ganhou na primeira rodada.\nVocê fez ${soma} pontos.`);
        break;
    } else if (soma == 7 && i > 1) {
        alert(`Você perdeu.\nVocê fez ${soma} pontos.`);
        break;
    } else if (soma == 2 || soma == 3 || soma == 12){
        alert(`Você perdeu.\nVocê fez ${soma} pontos.`);
        break;
    } else if (soma == soma){
        alert('teste');
    }
    else {
        alert('Boa sorte na proxima.')
    }
}
