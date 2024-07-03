import leia from 'readline-sync';

var primeiroNumero = leia.questionInt("INFORME PRIMEIRO VALOR: ")
var segundoNumero = leia.questionInt("INFORME SEGUNDO VALOR: ")
var operacao = leia.keyInSelect(["SOMA", "SUBTRAÇÃO", "MULTIPLICAÇÃO", "DIVISÃO"]);

switch(operacao){
  case 0: 
    var soma = primeiroNumero + segundoNumero;
    console.log("RESULTADO DA SOMA É: " + soma);
    break;
  case 1: 
    var subtracao = primeiroNumero - segundoNumero;
    console.log("RESULTADO DA SUBTRAÇÃO É: " + subtracao);
    break;
  case 2: 
    var mult = primeiroNumero * segundoNumero;
    console.log("RESULTADO DA MULTIPLICAÇÃO É: " + mult);
    break;
  case 3: 
    var divisao = primeiroNumero / segundoNumero;
    console.log("RESULTADO DA DIVISÃO É: " + divisao);
    break;
}