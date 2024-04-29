function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO')
    } else{
        res.innerHTML = ('Contando...<br>')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F913} `

        }
    }    
}   

