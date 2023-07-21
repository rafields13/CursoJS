// Maneira diferente: O que muda? Primeiro ele executa o primeiro loop, depois verifica a condição no while.
var c = 1
do {
    console.log(`Loop número ${c}.`)
    c++
} while (c <= 5)

/*// Maneira eficiente:
var c = 1
while (c <= 5) {
    console.log(`Loop número ${c}.`)
    c++ // c = c + 1
}
*/

/* Maneira não eficiente:
console.log('Salve, meu querido!')
console.log('Salve, meu querido!')
console.log('Salve, meu querido!')
console.log('Salve, meu querido!')
console.log('Salve, meu querido!')
*/