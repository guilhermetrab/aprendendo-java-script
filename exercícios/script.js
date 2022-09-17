function res(){
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let resul = document.getElementById('resul')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(i == 0 || f == 0 || p == 0 ){
        window.alert('[ERO] Faltam dado !')
    } else{
        let c = ''
        resul.innerHTML= 'Contando'
        if(i<f){
            for(c = i; c <= f; c+=p ){
                resul.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(c = i; c>= f; c-=p){
                resul.innerHTML += `${c}\u{1F449}`
            }
        }
        resul.innerHTML+= `\u{1F3C1}`
    }
}



