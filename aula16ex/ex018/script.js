// Declarando variáveis globais, as quais serão usadas em todo o programa.
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// Função criada para verificar se o valor informado é um número válido entre 1 e 100.
function isNumero(n) {
    if(Number(n) >= 1 && Number(n <= 100)) {
        return true
    } else {
        return false
    }
}

// Funcão criada para verificar se o número já foi adicionado na lista ou não.
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Funcão criada para adicionar o número informado, caso ele seja válido.
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado à lista com SUCESSO!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    vum.focus()
}

// Funcão criada para mostrar o resultado após a inserção dos números desejados.
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de FINALIZAR!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media.toFixed(2)}.</p>` // "toFixed(2)" é usado para arredondar o resultado da média para duas casas decimais após a vírgula.
    }
}