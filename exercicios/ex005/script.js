var vetNumeros= []//Vetor de números(escopo global)

function adicionarNumero(){//Função para adicionar no vetor
  var numForm = document.getElementById('txtn')
  var numero = Number(numForm.value) //Recebe o valor numerico do formulario
  var selForm = document.getElementById('selTab')//Recebe o select do HTML

  if(numForm.value.length == 0 || vetNumeros.indexOf(numero) != -1|| numero >100 || numero<1 ){//Validação da entrada
      window.alert('Valor Inválido ou já existente')

  }else{
    vetNumeros.push(numero)//Adiciona no vetor
    var item= document.createElement('option')
    item.text = `Valor ${numero} adicionado`
    selForm.appendChild(item)
  }
  
}
function analisarNumero(){//Função para analisar o numero
  // if(adicionarNumero()== -1){
  //    window.alert('Adicione um número ') 
  // }
    

}
