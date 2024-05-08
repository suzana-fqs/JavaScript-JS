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
            let multiplicador = c.toString().padStart(2, '0') // Adiciona zero à esquerda se necessário
            /* 
                c.toString(): Aqui, estamos convertendo o número c para uma string. Isso é necessário para podermos aplicar a função padStart(), já que ela só funciona em strings.
                
                .padStart(2, '0'): Esta é a função padStart(). Ela recebe dois argumentos:

                    O primeiro argumento, 2, especifica o comprimento total da string após a aplicação da função. Nesse caso, queremos que a string resultante tenha pelo menos dois caracteres de comprimento.

                    O segundo argumento, '0', é o caractere que será usado para preencher a string à esquerda. Aqui, estamos usando o zero '0'.
            */

            item.text = `${n} \u{2716} ${multiplicador} = ${n*c}`  // 1 x 5 ... aqui subistituí o let C pelo let multiplicador 
            item.value = `tab${c}`// Abaixo, próximo passo p/ essa expressão aparecer representada na no select tabuada
            tab.appendChild(item)
            c++
        }
    }
}  