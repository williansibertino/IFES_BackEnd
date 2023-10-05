let notaAluno;

notaAluno = prompt("Digite sua nota entre 0 e 100!");

if(notaAluno >= 75) {
    alert("Aprovado com A")
} else if (notaAluno == 60 || notaAluno < 75){
    alert("Aprovado com B")
} else {
    alert("Tá Reprovado!")
}