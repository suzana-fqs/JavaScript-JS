function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Vazio | limpa o seletor a cada novo num inserido
        while (c <=10) {
            let item = document.createElement('option')
            item.text = ´${n} x ${c} = ${n*c}´  // 1 x 5
            item.value = `tab${c}`// Abaixo, próximo passo p/ essa expressão aparecer representada na no select tabuada
            tab.appendChild(item)
            c++
        }
    }
}    