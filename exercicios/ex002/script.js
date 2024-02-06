var ano = document.getElementById('idAno')

var sexo = document.getElementsByName('sexo')
var div = document.getElementById('idResultado')

function checar()
{
    var anoValor = parseInt(ano.value)
    if(sexo[0].checked){//Feminino
        if(anoValor > 2014){
            div.innerHTML=''
            var imagem = document.createElement('img')
            imagem.src= '../imagens/crianca-menina.png'
            div.appendChild(imagem)
            
        }
        
    }
    if(sexo[1].checked){
        window.alert('Masculino')

    }
}
