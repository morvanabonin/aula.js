/*
    Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
    da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
    uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
    para o produto.
*/

const LUCRO1 = 45;
const LUCRO2 = 30;

let produto = 55;

if (produto < 50) {
    let valorLucro = (produto * LUCRO1) / 100 ;
    console.log(valorLucro);
    let valorFinal = produto + valorLucro;
    console.log("O produto de valor R$ " + produto + " terá seu valor final com lucro de 45% de R$ " + valorFinal);
} else {
    let valorLucro = (produto * LUCRO2) / 100 ;
    console.log(valorLucro);
    let valorFinal = produto + valorLucro;
    console.log("O produto de valor R$ " + produto + " terá seu valor final com lucro de 30% de R$ " + valorFinal);
}


