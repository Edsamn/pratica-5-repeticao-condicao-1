// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let homem = 'h';
let mulher = 'm';
let somaSalarioHomem = 0;
let somaSalarioMulher = 0;

do {
    let sexo = prompt('Digite o sexo.');
    let salario = Number(prompt('Digite o salário.'))
    if (sexo === 'h') {
        somaSalarioHomem += salario;
    } else if (sexo === 'm') {
        somaSalarioMulher += salario;
    }
} while (confirm('Quer continuar?'));

console.log(`Salário total de homens: ${somaSalarioHomem} e salário total de mulheres: ${somaSalarioMulher}`)