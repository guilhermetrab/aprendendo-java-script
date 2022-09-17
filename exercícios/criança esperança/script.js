var valor = document.getElementById('ivalor')
var resp = document.getElementById('res')
function res(){
    let v = Number(valor.value)
    switch(v){
        case 1:
            resp.innerHTML='Sua doação foi de R$ 10 <br> Muito obrigado !'
            break

        case 2:
            resp.innerHTML='Sua doação foi de R$ 25 <br> Muito obrigado !'
            break
        case 3:
            resp.innerHTML='Sua doação foi de R$ 50 <br> Muito obrigado !'
            break
        case 4:
            
            break
        case 5:
            resp.innerHTML='Sua doação foi de R$ 0 <br> Muito obrigado !'
            break
            
        default:
            resp.innerHTML='[ERRO] Digite um número válido !'
            break
    }
        

}