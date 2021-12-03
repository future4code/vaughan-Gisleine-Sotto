//Exercícios de interpretação de código//

        /*Leia o código abaixo
            
            
            function minhaFuncao(variavel) {
            	return variavel * 5
            }
            
            console.log(minhaFuncao(2))
            console.log(minhaFuncao(10)*/
        
            
           /* a) O que vai ser impresso no console?
             r: 10, 50 ,pois a função retorna qualquer valor multiplicado por 5 .
            
            
            
            b) O que aconteceria se retirasse os dois `console.log` e simplesmente
             invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria
              no console?

             R: Nada pq sem a função console.log não da para fazer a impressão dos valores.
            
        //2. Leia o código abaixo*/
            
        
            /*let textoDoUsuario = prompt("Insira um texto");
            
            const outraFuncao = function(texto) {
            	return texto.toLowerCase().includes("cenoura")
            }
            
            const resposta = outraFuncao(textoDoUsuario)
            console.log(resposta)*/
            
            
           /* a. Explique o que essa função faz e qual é sua utilidade

               R: A função retorna boleano caso encontre a palavra cenoura, independente da caixa alta ou baixa, 
               pois trasforma em caixa baixa antes de comparar.

            
            b. Determine qual será a saída no console para
             cada uma das 3 entradas
             do usuário:
                 i.   `Eu gosto de cenoura`
                  
                 R: true

                 ii.  `CENOURA é bom pra vista`

                 R: true

                 iii. `Cenouras crescem na terra`
                 R: true
                 */

           
                 /*Exercícios de escrita de código
           
           
            1. Escreva as funções explicadas abaixo:*/
            
           /* a) A função não deve receber nenhum parâmetro e deve
             imprimir uma
             mensagem falando algumas informações sobre você, como: 
            
          "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou 
            estudante."
             
            /*Troque o nome, idade, cidade e se é estudante ou não 
            por informações 
            sobre você. Lembrando que a função não possui 
            entradas, apenas imprime
             essa mensagem.*/
            
             function informacaoSobremim(nome, idade, cidade, profissao) {
            console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
           }
           informacaoSobremim(`Gisleine`, 28, `Promissão`, `estudante` )


           /* b)  Agora escreva uma função que receba 4 parâmetros que
             correspondem às 
            informações de uma pessoa: o nome (`string`), a idade
             (`number`),
             a cidade (`string`) e uma profissão (`string`). Ela deve
              retornar uma `string` que unifique todas as informações 
              da
               pessoa em uma só mensagem com o template:
            
            
            Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e
            sou [PROFISSÃO]*/


            function dadosDoUsuario (nome, idade, cidade, profissao) {
                    console.log(`Olá eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, sou ${profissao}.`)
            }
           dadosDoUsuario(`Juliana`, 24, `Bauru`, `programadora`)
           
        

            
            
            /*2. Escreva as funções explicadas abaixo:
            
            a) Escreva uma função que receba 2 números como 
            parâmetros, e, dentro 
            da função, faça a soma das duas entradas e retorne o
             resultado. Invoque a
             função e imprima no console o resultado.*/

            
            function soma(a,b) {
                return a+b
            }
            console.log(soma(5,3) )  //retorna 8


           /*b) Faça uma função que recebe 2 números e retorne um
             booleano que 
            informa se o primeiro número é **maior ou igual** ao
             segundo.*/
            
             function maiorIgual(a, b) {
                return a >= b 

             }
                     
            console.log(maiorIgual(8,9));


           /* c) Escreva uma função que receba um número e devolva um 
            ]booleano
             indicando se ele é par ou não*/
            
             function numeroPar(a){

                return a % 2 == 0
             }
              console.log(numeroPar(4));



            /*d) Faça uma função que recebe uma mensagem (`string`) 
            como parâmetro
             e imprima o tamanho dessa mensagem, juntamente com uma
              versão dela em 
             letras maiúsculas.*/
            
             function tamanhoMaiuscula(frase){

                let contagem = frase.length
                console.log(contagem)

                let maiusculas = frase.toUpperCase()
                console.log(maiusculas);

             }




        /*3. Crie uma função para cada uma das operações básicas
         (soma, subtração, 
            multiplicação e divisão). Em seguida, peça para o usuário
             inserir dois números e **chame** essas 4 funções com esses
              valores inputados pelo usuário sendo o argumento. Por fim, mostre
               no console o resultado das operações:*/
            
             function soma(a,b){
                return a+b;
             }
                 function subtracao(a,b){
                 return a-b;    
                 }

                 function  multiplicacao(a,b) {
                     return a*b;
                 }
             
                function divisao(a,b) {
                    return a/b;
    
                    }

                    let valor1 = Number(prompt("Digite um numero"));
                    let valor2 = Number (prompt("Digite outro numero"));
                    
                    console.log("soma", soma (valor1, valor2));
                    console.log("subtracao", subtracao (valor1, valor2));
                    console.log("multiplicacao", multiplicacao (valor1, valor2));
                    console.log("divisao", divisao (valor1, valor2));

            /*Números inseridos: 30 e 3
            Soma: 33
            Diferença: 27
            Multiplicação: 90
            Divisão: 10*/
            
            
            