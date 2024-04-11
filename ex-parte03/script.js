function verificar() {
    //window.alert('uncuionou')
    var data = new Date()
    var ano = data.getFullYear() // Aqui estava getFullYear() , Porem adicionei novamente o () e o codigo está funcionando 
    var fano = document.getElementById('txtano') // Aqui estava com a var anoatual
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO - Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade ${idade}`
        var genero = ' '
        var img = document.createElement('img') //Incluindo a imagem pelo Javascript
        img.setAttribute('id','foto') //id foto
        
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade <3) {
                //bebe
                img.setAttribute('src', 'bebe-boy.png')
            } else if (idade >=3 && idade <=10) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade >=11 && idade <=18) {
                //jovem
                img.setAttribute('src', 'jovem-boy.png')
            } else if (idade >=19 && idade <60) {
                //adulto
                img.setAttribute('src','homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
       
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)  

            
        
        } if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade <3) {
                //bebe
                img.setAttribute('src', 'bebe-girl.png')

            } else if (idade >=3 && idade <=10) {
                //criança
                img.setAttribute('src', 'menina.png')

            } else if (idade >=11 && idade <=18) {
                //jovem
                img.setAttribute('src', 'jovem-girl.png')

            } else if (idade >=19 && idade <60) {
                //adulto
                img.setAttribute('src', 'mulher.png')

            } else{
                //idoso
                img.setAttribute('src', 'idosa.png')

            }

             
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img) 


}
}
}

