function res(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')
    if (num.value.length == 0){
        window.alert(' Por favor, digite um número !')
    } else{
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while ( c <= 10 ){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}


