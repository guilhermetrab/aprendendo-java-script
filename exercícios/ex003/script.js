function contar(){
    let inicio = document.querySelector('input#iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let r = document.getElementById('resp')
    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados !')
        r.innerHTML = ('Impossível contar ')
    } else{
        r.innerHTML = ' Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( i <f){ //cpntagem cresccente
            for(c = i; c<= f; c += p){
            r.innerHTML += `${c} \u{1F449}`}
        } else{ //contagem regressiva
            for(c = i; c>= f; c -= p){
                r.innerHTML += `${c} \u{1F449}`}    
            }
            r.innerHTML+= `\u{1F3C1}`
        }
        
    }

    
