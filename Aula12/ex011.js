var idade = 78
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Voto opcional')
} else if (idade > 65)
console.log('voto opcional')
else {
    console.log('Voto obrigatório')
}


// na linha 5 tentei utilizar (idade < 18 || > 65), PORÉM, não funcionou  - Comparei com o video e estava tudo certo
