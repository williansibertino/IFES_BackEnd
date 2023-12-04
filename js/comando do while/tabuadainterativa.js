// Executa o codigo da estrutura do 'do' enquanto a condicao do while for verdadeira.

let num;
let opcao;

do{
    num = prompt("Informe um numero: \n");
    for(let i = 1; i  <= 10; i++){
        console.log(i + " X " + num + " = " + i * num + "\n");
    }

    opcao = prompt('Deseja continuar? \n S para sim - N para nao');
} while (opcao == 'S');