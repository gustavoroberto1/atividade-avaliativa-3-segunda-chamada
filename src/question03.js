import leia from 'readline-sync';

var idade = leia.questionInt("INFORME SUA IDADE: ");

if(idade <= 12){
    console.log(`VOCÊ TEM ${idade} ANOS E É UMA CRIANÇA.`)
}else if(idade <= 17){
    console.log(`VOCÊ TEM ${idade} ANOS E É UMA ADOLESCENTE.`)
}else if(idade <= 64){
    console.log(`VOCÊ TEM ${idade} ANOS E É UMA ADULTO.`)
}else{
    console.log(`VOCÊ TEM ${idade} ANOS E É UMA IDOSO.`)
}