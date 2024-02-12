function contar(){
    var divResultado = document.getElementById('idResposta')
    var formInicio = document.getElementsByName('nomeInicio')[0].value
    var formFim = document.getElementsByName('nomeFim')[0].value
    var formPasso = document.getElementsByName('nomePasso')[0].value
   

  

    if( Number(formFim) > Number(formInicio)){
        divResultado.innerHTML = ''
        var inicio = Number(formInicio)
        var fim = Number(formFim)
        var passo= Number(formPasso)
        // window.alert(`${inicio}, ${fim}, ${passo}`)
        
        // for(inicio; inicio < fim; passo++){
        //       divResultado.innerHTML=`${fim}`
        //  }
    }
    else{
        window.alert('Fim menor que inicio')
    }
}