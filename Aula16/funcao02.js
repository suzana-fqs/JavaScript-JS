/*
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(7))

f8 mostra NaN pq o parametro n1 e n2 n tem valor default para caso n1 e ou n2 Não receba valor na chamada
*/

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(54, 91))
