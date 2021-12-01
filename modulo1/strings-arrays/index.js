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