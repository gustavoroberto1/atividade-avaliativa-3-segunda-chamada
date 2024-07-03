import leia from 'readline-sync';

var valorEmprestimo = leia.questionFloat("INFORME O VALOR DO EMPRESTIMO: ");
var anos = leia.questionInt("INFORME EM QUANTOS ANOS PRETENDE PAGAR: ");
var taxa = leia.questionFloat("INFORME QUAL A TAXA DE JUROS DO EMPRESTIMO: ");

var taxaJurosCalculado = taxa / 100;

var valorJuros = valorEmprestimo * anos * taxaJurosCalculado;

var valorTotalEmprestimo = valorEmprestimo + valorJuros;

console.log("VALOR EMPRÉSTIMO: R$" + valorEmprestimo.toFixed(2))
console.log("VALOR DO JUROS DO EMPRÉSTIMO: R$" + valorJuros.toFixed(2))
console.log("VALOR TOTAL DO EMPRÉSTIMO: R$" + valorTotalEmprestimo.toFixed(2))

