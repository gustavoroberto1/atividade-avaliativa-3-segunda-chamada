import leia from 'readline-sync';

var real = leia.questionFloat("INFORME O VALOR A SER CONVERTIDO R$");
var moeda = leia.keyInSelect(["DÓLAR (USS)", "EURO (EUR)"])

if(moeda === 0){
  var valorConvertido = real * 5.66;
  console.log("O VALOR PARA DÓLAR É US$" + valorConvertido.toFixed(2))
} else if(moeda === 1){
  var valorConvertido = real * 6.08;
  console.log("O VALOR PARA EURO É €" + valorConvertido.toFixed(2))
}