var vet = [5,8,2,9,3]//Variável composta(Vetor)
//vet[5]= 20//Acrecentando manualmente na última posição
vet.push(1)//Acrescentando automaticamente na última posição

vet.sort()//Ordena vetor (crescente)
var posicao = vet.indexOf(1)//Procura elementos e retorna indice se tiver, senão -1

console.log(vet)
vet.pop()//Remover último elemento
console.log(vet)
console.log(`O vetor tem ${vet.length} posições`)

for(var i=0; i < vet.length; i++){//Percorrendo vetor tradicionalmente
    console.log(`Posição ${i} = ${vet[i]}`)
}
for(var j in vet){//Percorrendo vetor usando forin JS
    console.log(`Posição do vet ${j} = ${vet[j]}`)
}
if(posicao == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`Valor na posição ${posicao}`)
}

