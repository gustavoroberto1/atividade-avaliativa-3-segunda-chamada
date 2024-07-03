import leia from 'readline-sync';

var primeiroNumero = leia.questionInt("INSIRA O PRIMEIRO NUMERO: ");
var segundoNumero = leia.questionInt("INSIRA O SEGUNDO NUMERO: ");
var terceiroNumero = leia.questionInt("INSIRA O TERCEIRO NUMERO: ");

if(primeiroNumero === segundoNumero || segundoNumero === terceiroNumero || primeiroNumero === terceiroNumero){
    console.log("EXISTEM DOIS NÚMEROS IGUAIS.");
}else{
    console.log("NÃO EXISTEM DOIS NÚMEROS IGUAIS.");
}