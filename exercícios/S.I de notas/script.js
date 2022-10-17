function converter(){
    let n = document.getElementById('inota')
    let nota = Number(n.value)
    let resu = document.getElementById('resu')
    if( nota <= 100 && nota >=90){
        resu.innerHTML = 'Nota A ' 
        } else if ( nota <= 89 && nota >=80){
        resu.innerHTML = 'Nota B ' 
        } else if(nota <= 79 && nota >=70){
             resu.innerHTML = 'Nota C '
        } else if(nota <= 69 && nota >=60){
        resu.innerHTML = 'Nota D '
        } else if (nota < 60 ) {
        resu.innerHTML = 'Nota F '
        } else {
            resu.innerHTML = 'Por favor digite um número válido de 0 a 100'
        }

}