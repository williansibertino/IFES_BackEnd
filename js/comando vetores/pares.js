let vetor = [4,67,987,235,34,32,12,134,456,345,890,1234];

let maior = vetor[0];
let menor = vetor[0];

for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] > maior) {
        maior = vetor[i];
    }
    if(vetor[i] < menor) {
        menor = vetor[i];
    }
}

//alert(`O maior elemento e: ${maior}`);
//alert(`O menor elemento e: ${menor}`);

for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] % 2 == 0) {
        console.log(`O numero ${vetor[i]}  e par!/n`)
    }
}