function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpasso')
    let r = document.getElementById('res')
    if  (ini.value.lenght == 0 || fim.value.lenght == 0 || pas.value.lenght == 0) {
        r.innerHTML = 'Impossível Contar!'
        // alert('ERRO! Faltam dados!')
    } else {
        r.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            alert('Passo INVÁLIDO! Considerando Passo = 1...')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c < f; c += p) {
            r.innerHTML += ` ${c} \u{1f449}`
        }
        } else {
            // Contagem decrescente
            for (let c = i; c > f; c -= p) {
                r.innerHTML += ` ${c} \u{1f449}`
            }
        }
        r.innerHTML += `\u{1f3c1}`
    }
}