/*
Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
ou Reprovado por Média. A média para aprovação é 70 e o limite de faltas é 25% do
total de aulas. O número de aulas ministradas no semestre foi de 80. A reprovação por
falta sobrepõe a reprovação por Média.
*/

const NUM_AULAS = 80;
const MEDIA = 70;
const PORCENTAGEM_FALTAS = 25;

let nome = "Mauro Duarte";
let nota1 = 65;
let nota2 = 75;
let nota3 = 80;

let numFaltas=15;

let totalNotas = nota1 + nota2 + nota3;

console.log(totalNotas);

let media = totalNotas/3;

console.log(media);

let mediaAluno = media.toFixed();

console.log(mediaAluno);

if (mediaAluno >= MEDIA) {
  console.log("Aprovado");
} else {
  console.log("Reprovado por Média")
}

porcentagemAlunoFaltas = (numFaltas/NUM_AULAS) * 100;

console.log(porcentagemAlunoFaltas);

if (mediaAluno >= MEDIA && porcentagemAlunoFaltas < PORCENTAGEM_FALTAS ) {
  console.log("Aluno " + nome + " está Aprovado!");
} else if (mediaAluno >= MEDIA && porcentagemAlunoFaltas > PORCENTAGEM_FALTAS) {
  console.log("Aluno " + nome + " está Reprovado por Falta!");
} else {
  console.log("Aluno " + nome + " está Reprovado por Média!");
}