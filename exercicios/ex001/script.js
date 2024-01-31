function carregar(){
    var mensagem= window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()
   
    mensagem.innerHTML = (`Agora são ${hora} horas`)
    if(hora >= 0 && hora <12){
        imagem.src = 'imagens/manha-redonda.png'
        window.document.body.style.backgroundColor = "#A2D8FC"
    }else if(hora >=12 && hora <= 18){
        imagem.src = 'imagens/tarde-redonda.png'
        window.document.body.style.backgroundColor = "#EEA24D" 
    }else{
        imagem.src = 'imagens/noite-redonda.png'
        window.document.body.style.backgroundColor = " #081D20" 
    }
}