// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = Number(prompt('Digite a largura em m.'));
let comprimento = Number(prompt('Digite o comprimento em m.'));
let area = largura * comprimento;

if (area < 100) {
    console.log('Terreno Popular')
} else if (area >= 100 && area <= 500) {
    console.log('Terreno Master')
} else {
    console.log('Terreno VIP')
}