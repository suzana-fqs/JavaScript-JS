let valores = [ 74 , 6 , 9 , 45 , 12 ]
valores.sort() // não funcionou - n ordenou os vetores

// console.log(valores)

/* O jeito Burro
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

/* 
for (let pos=0; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}