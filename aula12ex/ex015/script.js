function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var r = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Erro! Digite um ano VÁLIDO!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebeH.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoH.jpg')
            } else {
                img.setAttribute('src', 'idosoH.jpg')
            }
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultaM.jpg')
            } else {
                img.setAttribute('src', 'idosaM.jpg')
            }
        }
        r.style.textAlign = 'center'
        r.innerHTML = `Detectamos ${gen} com ${idade} ano(s).`
        r.appendChild(img)
    }
}