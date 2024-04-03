// OBJETOS

let amigo = { nome:'José',
peso: 80, 
engordar(p=0){
    console.log('Engordou!')
    this.peso += p  //No Resultado não estáva somando e sim concatenando o Valor estava '80' entre aspas (porém com outras operações funcionou normal)
}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)