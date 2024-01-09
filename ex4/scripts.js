// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let homem = 'h';
let mulher = 'm';
let nome = prompt('Digite o nome.');
let sexo = prompt('Digite o sexo.')
let compra = Number(prompt('Digite o valor da compra.'))

if (sexo === 'h') {
    let compraDesconto = compra - (compra * 5 / 100)
    console.log(`Valor da compra com desconto de ${nome}: ${compraDesconto}`)
} else if (sexo === 'm') {
    let compraDesconto = compra - (compra * 13 / 100)
    console.log(`Valor da compra com desconto de ${nome}: ${compraDesconto}`)
}