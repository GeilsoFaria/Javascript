var vetNumeros = []//Vetor de números(escopo global)
var somaNum = 0
var divAnalisa = document.getElementById('divAnalisar')//div de Analise   

function adicionarNumero() {//Função para adicionar no vetor
  var numForm = document.getElementById('txtn')
  var numero = Number(numForm.value) //Recebe o valor numerico do formulario
  var selForm = document.getElementById('selTab')//Recebe o select do HTML

  if ( numForm.value.length == 0 || vetNumeros.indexOf(numero) != -1 || numero > 100 || numero<1) {//Validação da entrada
    window.alert('Valor Inválido ou já existente')

  } else {
    vetNumeros.push(numero)//Adiciona no vetor
    somaNum += numero
    var item = document.createElement('option')
    item.text = `Valor ${numero} adicionado`
    selForm.appendChild(item)
    divAnalisa.innerHTML = ''//Caso um novo valor, limpe
  }
  numForm.value = ''
  numForm.focus()
}
function analisarNumero() {//Função para analisar o(s) numero(s)
  if (vetNumeros.length == 0) {
    window.alert('Adicione um número ')
  } else {
    var maior = vetNumeros[0]
    vetNumeros.sort()
    for(let i in vetNumeros){
      if(vetNumeros[i]> maior){
        maior = vetNumeros[i]
      }
    }
    divAnalisa.innerHTML = `Temos ao todo ${vetNumeros.length} números cadastrados <br>
    <br> O maior valor informado foi ${maior} <br>
    <br> O menor valor informado foi ${vetNumeros[0]} <br>
    <br> Somando todos valores, temos ${somaNum} <br>
    <br> A média dos valores digitados é ${somaNum / vetNumeros.length} <br>`
    console.log(vetNumeros)
  }
}
