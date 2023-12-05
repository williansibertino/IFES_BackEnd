/*
Implemente o jogo de dados Craps. 
O jogador lança dois dados e a soma dos valores determina o resultado. 
Se a soma for 7 ou 11 na primeira rodada, o jogador ganha. Se for 2, 3 ou 12, o jogador perde. 
Para qualquer outro resultado, esse número se torna o "ponto" e 
o jogador continua lançando os dados até obter o mesmo número (ganha) ou até obter 7 (perde). 
Utilize estruturas de repetição para simular as rodadas do jogo.*/

//do {
    alert('REGRAS DO JOGO \n1) Se for 7 ou 11 pontos na primeira rodada você vence.\n\n2) Caso não consiga tirar 7 ou  11, o primeiro número que você tirar, você precisar tirar ele novamente para ganhar.\n\n3)Se for 2, 3 ou 12 pontos voce perdeu.\n\n4) Se voce obter 7 depois da primeira rodada você perde.');

    
    var pontos = [0], soma=0, dado1, dado2, i;

    for( i = 1; i <= 12 ; i++) {
        
        // O comando Math.ceil(), ele permite que o numero aleatorio varie somente do 1 a 6.
        // O comando Math.floor() ou Math.round(), não dava certo, porque estava variando de 0 a 6
        dado1 = Math.ceil(Math.random() * 6);
        dado2 = Math.ceil(Math.random() * 6);
        soma = dado1 + dado2;

        
        pontos[i] = soma;
        console.log(pontos[i]);


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
        } else if (i < 2){
            alert(`Você precisa tirar ${soma} pontos outra vez para ganhar.`);
        } else if (soma == pontos[i]){
            alert(`teste`);
        } else {
            alert('Boa sorte na proxima.')
        }

    }

//} while(soma != 2,3,7,12);