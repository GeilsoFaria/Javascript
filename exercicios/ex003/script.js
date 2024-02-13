function contar(){
    var divResultado = document.getElementById('idResposta')//Recebe a div de exibicao resultado
    // var divAviso = document.getElementById('idAviso')
    var formInicio = document.getElementById('inicio')
    var formFim = document.getElementById('fim')
    var formPasso = document.getElementById('passo')

    if(formInicio.value.length == 0 || formFim.value.length == 0 || formPasso.value.length == 0)
    {
      divResultado.innerHTML ='Impossível contar'
    }else{
      divResultado.innerHTML = 'Contando: <br>'
      var inicio = Number(formInicio.value)
      var fim = Number(formFim.value)
      var passo= Number(formPasso.value)
     
      if(passo <= 0){
        window.alert('Passo Inválido. Considerando Passo = 1')
        passo = 1
      }
     
      if(inicio < fim){//Crescente 
        for(var i = inicio; i <= fim; i+=passo){
          divResultado.innerHTML +=` ${i} \u{1F449} `
        }
      }else {//Regressiva
        for(var i = inicio; i >= fim; i-=passo){
          divResultado.innerHTML +=` ${i} \u{1F449} `
        }
      }
      divResultado.innerHTML +=`\u{1F3C1} `
      
    }
}