/*
até 1.045,00 30%
1.045,01 a 1.500,00 25%
1.500,01 a 2.600,00 20%
2.600,01 a 3.550,00 15%
Acima de 3.550,00 10%
*/

let salario = 1500;

if(salario <= 1045) {
    let valorPago = calculoAumento(salario, 30);

    console.log ("Valor a ser pago R$ " + valorPago);
} else if (salario > 1045 && salario <= 1500) {
    let valorPago = calculoAumento(salario, 25);

    console.log ("Valor a ser pago R$ " + valorPago);
} else if (salario > 1500 && salario <= 2600) {
    let valorPago = calculoAumento(salario, 20);

    console.log ("Valor a ser pago R$ " + valorPago);
} else if (salario > 2600 && salario <= 3550) {
    let valorPago = calculoAumento(salario, 15);

    console.log ("Valor a ser pago R$ " + valorPago);
} else {
    let valorPago = calculoAumento(salario, 10);

    console.log ("Valor a ser pago R$ " + valorPago);
}

function calculoAumento (salario, aumento) {
    let valorAumento = (salario * aumento) /100;
    let valorFinal = salario + valorAumento;
    return valorFinal;
}
