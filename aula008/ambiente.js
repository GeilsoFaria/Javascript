var i = 0
//Teste lógico no início da estrutura de repetição
while(i<6){
    i++
    console.log(`Passo ${i}`)
}
console.log('-------')
//Teste lógico no final da estrutura de repetição
var j = 0
do {
    j++
    console.log(`Passo ${j}`)
} while (j < 6);
console.log('------')

//Repetição com variável de controle
// Inicialização, teste lógico e incremento
for(var ini = 0; ini < 10; ini++){
    console.log(`Passo var ini ${ini}`)
}