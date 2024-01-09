// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distancia = Number(prompt('Digite a quantidade de km da viagem'));

if (distancia <= 200) {
    let custo = distancia * 0.50;
    console.log(`O custo da viagem será de ${custo}`)
} else {
    let custo = distancia * 0.45;
    console.log(`O custo da viagem será de ${custo}`)
}