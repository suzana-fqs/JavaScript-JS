let num = document.querySelector('input#fnum') 
let lista = document.querySelector('select#lsel')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) !== -1){
        return true
    } else{
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild (item)
        valores.push(Number(num.value)) // adiciona o número a lista de valores  - esse era o comando que estava faltando :O
    } else{
        window.alert ('Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert ('Adicione valores a lista antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma+= valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML=''
        res.innerHTML+= `<p> No total temos ${tot} números adicionados.</p>`
        res.innerHTML+= `<p> O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML+= `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML+= `<p>A soma de todos os números é de ${soma}.</p>`
        res.innerHTML+= `<p>A média é de ${media}.</p>`
    }
}

