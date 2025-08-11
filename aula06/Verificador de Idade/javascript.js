function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            gênero = 'Homem'
            if (idade >=0 && idade < 12){

                // Criança
                img.setAttribute('src', 'masc-crianca.png')

            } else if (idade < 21){

                // Jovem
                img.setAttribute('src', 'masc-jovem.png')

            } else if (idade < 50) {

                // Adulto
                img.setAttribute('src', 'masc-adulto.png')

            } else {

                // idoso
                img.setAttribute('src', 'masc-velho.png')
            }


        } else if (fsex[1].checked) {

            gênero = 'Mulher'
            if (idade >=0 && idade < 12){

                // Criança
                img.setAttribute('src', 'fem-crianca.png')

            } else if (idade < 21) {

                // Jovem
                img.setAttribute('src', 'fem-jovem.png')

            } else if (idade < 50) {

                // Adulta
                img.setAttribute('src', 'fem-adulta.png')

            } else {

                // Idoso
                img.setAttribute('src', 'fem-velha.png')

            }


        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}