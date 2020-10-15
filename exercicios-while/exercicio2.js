let i = 0;
let anterior = 1;
let posterior= 1;
let atual=0;
while (i < 30) {
    atual = anterior + posterior;
    anterior = posterior
    posterior = atual
    i++;

    console.log(atual);
}