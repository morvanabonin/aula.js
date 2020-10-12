/*
Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100
*/

let crescente = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Tamanho do array " + crescente.length);

for (i = crescente.length; i >= 0; i--) {
    console.log(crescente[i]);
}

let decrescente = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
console.log("Tamanho do array " + decrescente.length);

for (i = decrescente.length; i >= 0; i--) {
    console.log(decrescente[i]);
}