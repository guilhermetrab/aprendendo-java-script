
var peso = document.getElementById('ipeso')
var alt = document.getElementById('ialt')
var resp = document.getElementById('res')
function res(){
    let p = Number(peso.value)
    let a = Number(alt.value)
    let imci = p / (a*a)
    let imc = Number(imci.value)
    resp.innerHTML= `IMC :${imc} <br>`
    if(imc < 17){
       resp.innerHTML+= 'Muito abaixo do peso'
    } else if(imc < 18.5){
        resp.innerHTML+='Abaixo do peso'
    } else if(imc < 25){
        resp.innerHTML+='Peso ideal'
    } else if(imc < 30){
        resp.innerHTML+='Sobrepeso'
    } else if(imc < 35){
        resp.innerHTML+='Obesidade'
    } else if(imc < 40){
        resp.innerHTML+='Obesidade severa'
    } else if (imc => 40){
        resp.innerHTML+='Obesidade móbida'
    }
}