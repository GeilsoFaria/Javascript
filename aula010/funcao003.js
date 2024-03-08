let v = function(x){
    return x*2
} 
console.log(v(5))

function calcularFatorial(n){
    let fat = 1
    for(var i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(calcularFatorial(5))

function calcularFatorialRec(n){
    if(n == 1){
        return 1 
    }else{
        return n * calcularFatorialRec(n-1)
    }
}
console.log(calcularFatorialRec(5))