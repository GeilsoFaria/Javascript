function gerarTabuada(){
    var numForm = window.document.getElementById('txtn')
    var tabuada= window.document.getElementById('selTab')
    var numero = Number(numForm.value)
    
    if(numForm.value.length == 0){
      window.alert('Digite um número!')
    }
    else{
      var numero = Number(numForm.value)
      var i = 1
      tabuada.innerHTML =''
      for(i;i<=10;i++){
        var item = document.createElement('option')
        item.text = `${numero} X ${i} = ${numero*i}`
        item.value = `item${i}`//Para uso em outras linguagens
        tabuada.appendChild(item)
      }
    }
    

}
