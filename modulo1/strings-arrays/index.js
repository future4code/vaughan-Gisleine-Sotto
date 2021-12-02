/*Exercícios de interpretação de código
 
1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
// undefined pois a variavel array foi criada mas não atribuiu valor

array = null
console.log('b. ', array)
// null pois foi atribuido null à variável

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 11 pois length é a quantidade de itens no array

let i = 0
console.log('d. ', array[i])
// 3 pois no array a posição 0 vale 3

array[i+1] = 19
console.log('e. ', array)
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// foi atribuido o valor 19 ao array na posição 1

const valor = array[i+6]
console.log('f. ', valor)
// 9 pois a variavel valor recebeu o conteúdo do array na posição 6



2) Leia o código abaixo com atenção: 


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)



Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

r: SUBI NUM ÔNIBUS EM MIRROCOS   27


xercícios de escrita de código


1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

    const emailDoUsuario = prompt ("Digite seu nome");
    const nomeDoUsuario = prompt ("Digite seu e-mail");
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso`);

    
    









   /* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado 
   em uma variável. Em seguida, siga os passos:*/

   //a) Imprima no console o array completo//
  
   const comidaPreferida =['lasanha', 'chocolate', 'comida japonesa', 'mousse', 'arroz'];
  
   console.log(comidaPreferida);
  
  
  
 /*b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por
     cada uma das comidas, uma embaixo da outra.*/

     console.log("Essas são as minhas comidas preferidas");
     console.log(comidaPreferida[0]);
     console.log(comidaPreferida[1]);
     console.log(comidaPreferida[2]);
     console.log(comidaPreferida[3]);
     console.log(comidaPreferida[4]);
  
  
    
   /* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida 
    da sua lista pela inserida pelo usuário. Imprima no consolea nova lista*/
     
    let comidaPreferidaUsuario = prompt("Digite uma comida preferida");
    console.log(comidaPreferida ,"comidaPreferida");
     comidaPreferida [1] = (comidaPreferidaUsuario);
     console.log(comidaPreferida , "comidaPreferidaUsuario");




    
    
//3. Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = []

    
 //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e
    // armazene-as, uma por uma, no array
   
    listaDeTarefas.push( prompt("Digite uma tarefa"));
    listaDeTarefas.push( prompt("Digite outra tarefa"));
    listaDeTarefas.push( prompt("Digite mais uma tarefa"));


   // c) Imprima o array no console

   console.log(listaDeTarefas);
    
    //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    let indice = prompt("Digite o indice de uma tarefa que já realizou!");
    
    //e) Remova da lista o item de índice que o usuário escolheu.
    listaDeTarefas.splice(indice, 1);
    
    //f) Imprima o array no console*/
   console.log(listaDeTarefas);
    
    
        
        
        

 