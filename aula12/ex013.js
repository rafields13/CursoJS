var atual = new Date()
var dia = atual.getDay()
/*
Domingo = 0
Segunda-Feira = 1
Terça-Feira = 2
Quarta-Feira = 3
Quinta-Feira = 4
Sexta-Feira = 5
Sábado = 6
*/
switch(dia) {
    case 0:
        console.log('Domingo!')
        break
    case 1:
        console.log('Segunda-Feira!')
        break
    case 2:
        console.log('Terça-Feira!')
        break
    case 3:
        console.log('Quarta-Feira!')
        break
    case 4:
        console.log('Quinta-Feira!')
        break
    case 5:
        console.log('Sexta-Feira!')
        break
    case 6:
        console.log('Sábado!')
        break
    default:
        console.log('Dia inválido!')
        break
}