
const SOMA = 'somar';
const SUB = 'subtrair';
const MULT = 'multiplicar';
const DIV = 'dividir';

function calculadora(tipoCalculo, num, num2) {
  let total;

  switch(tipoCalculo) {
    case SOMA:
      total = soma(num, num2);
      break;
    case SUB:
      total = subtrair(num, num2);
      break;
    case MULT:
      total = multiplicar(num, num2);
      break;
    case DIV:
      total = dividir(num, num2);
      break;
    default:
      total = 0;
      break;
  }

  return total;
}

function soma(numero, numero2) {
  return numero + numero2;
}

function subtrair(numero, numero2) {
  return numero - numero2;
}

function multiplicar(numero, numero2) {
  return numero * numero2;
}

function dividir(numero, numero2) {
  if (numero !== 0 && numero2 !== 0 ) {
    return numero / numero2;
  } else {
    return "Não existe divisão por O";
  }
  
}


console.log(calculadora(SUB, 2, 3));