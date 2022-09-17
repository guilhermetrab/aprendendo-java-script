function veri(){
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.getElementById('inasc')
    var res = document.getElementById('txt')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        window.alert('tudo ok')
    }
    var fsex = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'Homem'
    } else if(fsex[1].checked){
        genero = 'Mulher'
    }

    if(fsex[0].checked){
        if (idade >=0 && idade < 12 ){
            //criança
            document.body.style.background = '#0CABA8'
            
        } else if(idade < 21){
            //jovem
            document.body.style.background = '#008F8C'
        } else if(idade < 50){
            //adulto
            document.body.style.background = '#015958'
        } else{
            //idoso
            document.body.style.background = '#023535'
        }
    } else if (fsex[1].checked){
        if (idade >=0 && idade < 12 ){
            //criança
            document.body.style.background = '#F2CCB5'
        } else if(idade < 21){
            //jovem
            document.body.style.background = '#F8A08C'
        } else if(idade < 50){
            //adulto
            document.body.style.background ='#E18777'
        } else{
            //idoso
            document.body.style.background ='#CC6D58'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
    
}