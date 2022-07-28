let teclado = require('prompt-sync')();

console.log("Digite sua 1º nota:");
let nota1 = teclado();
if (nota1>10){
    console.log("Você digitou a nota invalida. Digite novamente:");
    console.log("Digite sua 1º nota:");
    nota1 = teclado();
    if (nota1 > 10){
    return console.error("Voce digitou errado 2 x");
    }
}   
console.log("Digite sua 2º nota:");
let nota2 = teclado();
if (nota2>10){
    console.log("Você digitou a nota invalida. Digite novamente:");
    console.log("Digite sua 2º nota:");
    nota2 = teclado();
    if (nota2 > 10){
    return console.error("Voce digitou errado 2 x");
    }
}   
console.log("Digite sua 3º nota:");
let nota3 = teclado();
if (nota3>10){
    console.log("Você digitou a nota invalida. Digite novamente:");
    console.log("Digite sua 3º nota:");
    nota3 = teclado();
    if (nota3 > 10){
        return console.error("Voce digitou errado 2 x");
    }
}   

let n1 = parseFloat(nota1);
let n2 = parseFloat(nota2);
let n3 = parseFloat(nota3);

let soma = n1 + n2 + n3;
let media = (n1 + n2 + n3) / 3
if (media >=7 ){
    console.log (`A soma das notas foi ${soma} e o aluno foi aprovado com média ${media}.`);
} if (media >=6 && media <7){
    console.log(`A soma das notas foi ${soma} e o aluno está em exame com média ${media}.`)
} if (media <6){
    console.log(`A soma das notas foi ${soma} e o aluno está reprovado com média ${media}.`)
}








