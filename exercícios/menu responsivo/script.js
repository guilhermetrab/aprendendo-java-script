function tela(){
    if(window.innerWidth <= 768){
        menuIcon.style.display = 'block'
        list.style.display = 'none'
        loguinButton.style.display = 'none'
    } else {
        menuIcon.style.display = 'none'
        list.style.display = 'block'
        loguinButton.style.display = 'block'
        mobileMenu.style.display = 'none'
    }
}
function menushow(){
    if(mobileMenu.style.display == 'none'){
        mobileMenu.style.display = 'block'
    } else{
        mobileMenu.style.display = 'none'
    }
}