let num = [ 32 , 53 , 15 , 91 , 44, 10]

num[6] = 30  // acrescenta mais um conteudo indicando o valor [6]
num.push(23) // acrescenta + 1 conteúdo sem indicar o valor - Acrescenta na última posição automaticamente


console.log(` O vetor tem ${num.length} posições. Nosso valor é ${num}`) // num.length - Qtos elemetos tem dentro da array
console.log(`Elementos em ordem crescente ${num.sort()}`) // num.sort - Ordenando em ordem crescente 
console.log(`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(150) // Busca valores dentro de um vetor
console.log(`o valor 53 está na posição ${pos}` )


if (pos == -1){
    console.log('O valor não foi encontrado')

} else {
    console.log(`O valor QUE VC PROCURA está na posição ${pos}`)
}