function checar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoForm = document.getElementById('idAno')
    var divResultado = document.getElementById('idResultado')

    /*Pequena validação do ano*/
    if (anoForm.value.length == 0 || Number(anoForm.value) > anoAtual) {
        window.alert('Anos de Nascimento Inválido')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoForm.value)
        var genero = ''
        var img = document.createElement('img')//Criar imagem dinamicamente
        divResultado.style.textAlign = 'center'
        img.setAttribute('id', 'foto')
        divResultado.innerHTML =''

        if (sexo[0].checked) {//Feminino
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src','crianca-menina.png.png')
            }
            else if (idade < 18) {
                img.setAttribute('src','adolescente-mulher.png')
            } else if (idade < 60) {
                img.setAttribute('src','adulto-mulher.png')
            }
            else {
                img.setAttribute('src','idoso-mulher.png')
            }
        }
        else if (sexo[1].checked) {//Masculino
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src','crianca-menino.png')
            }
            else if (idade < 18) {
                img.setAttribute('src','adolescente-homem.png')
            } else if (idade < 60) {
                img.setAttribute('src','adulto-homem.png')
            }
            else {
                img.setAttribute('src','idoso-homem.png')
            }
        }
        
        divResultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        divResultado.appendChild(img)  
    }  
}
