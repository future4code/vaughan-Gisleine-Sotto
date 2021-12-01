

/* Exercícios de interpretação de código

Exercicio 1

let resultado = bool && bool2
 resposta = false

 let resultado =bool 1 && bool2 bool3
 resposta = false


 let resultado = !resultado && bool1 || bool2
 resposta = true

 console.log("d." , typeof  resultado)
 
 resultado =,boolean*/


/*Exercicio 2
 ficou impresso a uniao do primeiro valo e do segundo valor,infelizmente
  não houve a soma pq ele não fez a conversao de string para numero.

Exercicio 3  sugestão para o codigo rodar corretamente é fazendo a conversão
   de string 
  para numero.
 
 
  let primeiroNumero = Number (prompt("Digite um numero!"))
  let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log (soma)*/

// Exercicio de Escrita de codigo
//Exercicio 1

let idade = Number(prompt("Qual é a sua idade"));
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo"));

let comparacao = idade > idadeMelhorAmigo;
console.log("Sua idade é maior que a do seu melhor amigo?", comparacao);

let resultado = idade - idadeMelhorAmigo;
console.log("resultado subtraçâo", resultado);



// Exercico 2

let numeroPar = Number(prompt("Insira um numero par"));
let numeroPAr = numeroPar

let restoDoNumeroPar = numeroPar % 2



console.log("restoDoNumeroPar divisão por 2", restoDoNumeroPar);

/*Numeros pares sempre darão resultados exatos,
 não tendo resto quando divididos por 2*/



//Exercicio 3//


let anos = Number(prompt("Quantos anos vc tem?"));
let meses = anos * 12;
let dias = anos * 365;
let horas = dias * 24;
console.log(anos, "anos");
console.log(meses, "meses");
console.log(dias, "dias");
console.log(horas, "horas");

// Exercicio 4//

let numero1 = Number(prompt("Digite um numero"));
let numero2 = Number(prompt(" Digite um numero"));
let comparacao1 = numero1 > numero2;
let comparacao2 = numero1 === numero2;
let comparacao3 = numero2 !== 0;
let comparacao4 = numero1 !== 0;

console.log(comparacao1, 'comparacao1');
console.log(comparacao2, 'comparacao2');
console.log(comparacao3, 'comparacao3');
console.log(comparacao4, 'comparacao4');














