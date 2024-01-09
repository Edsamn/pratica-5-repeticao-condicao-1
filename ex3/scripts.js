// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = Number(prompt('Digite o número inicial.'));
let valorFinal = Number(prompt('Digite o número final.'));
let i = Number(prompt('Digite o incremento'));
let valorI = 0;

console.log(valorInicial)
for (valorInicial; valorI < valorFinal;i++) {
    valorI = valorInicial + i;
    console.log(valorI)
}
console.log(valorFinal)

