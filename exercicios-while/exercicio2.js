
let i = 0;
let anterior = 1;
let posterior= 1;
let atual=0;
console.log(anterior);
console.log(posterior);

while (i < 28) {
    atual = anterior + posterior;
    anterior = posterior
    posterior = atual
    i++;

    console.log(atual);
}