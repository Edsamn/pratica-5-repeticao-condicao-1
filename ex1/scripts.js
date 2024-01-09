// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idade = 0;
let aluno = 0;
let somaIdade = 0;
let mediaIdade = 0;

while (idade !== 999) {
    idade = Number(prompt('Digite a idade do aluno.'));
    if (idade === 999) {
        console.log('Código parado.')
    } else {
        aluno++;
        somaIdade = idade + somaIdade;
        mediaIdade = somaIdade / aluno;
    }
    
}

console.log(`${aluno} e ${mediaIdade}`)
