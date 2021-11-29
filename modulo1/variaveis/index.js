console.log("Ola Mundo");

//exercicio de interpretação de código//


function analise1() {
    let a = 10;
    let b = 10;
    console.log(b);

    b = 5;
    console.log(a, b);

    /*resultado 1
     a= 10
     b= 5*/
}
analise1();

function analise2() {
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c);
    /*resultado 2
    a=10
    b=10
    c=10*/
}
// analise2();

function analise3() {

    let horaTrabalho = prompt("Quantas horas você trabalha por dia?");
    let valorDia = prompt("Quanto você ganha por dia");
    alert(`Voce recebe ${valorDia / horaTrabalho} por hora`);

}
// analise3();

function analiseEscritadeCodigo() {

    console.log("exercicios de escrita de codigo");

    let nome;
    let idade;

    console.log(typeof nome);
    console.log(typeof idade);


    nome = prompt("Qual é o seu nome?");
    idade = prompt("Qual a sua idade?");

    console.log(typeof nome);
    console.log(typeof idade);
/*notei que mesmo avendo resposta com numero,
 ela classificou tudo como string*/

    alert(`Olá ${nome}, você tem ${idade} anos`);

 }
analiseEscritadeCodigo();


choveu= prompt("Hoje choveu?");
chocolate= prompt("Você gosta de chocolate?");


