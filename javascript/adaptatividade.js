function mudouTamanho() {
    if (window.innerWidth < 1000) {/*Se o tamanho da minha tela for maior ou igual a 768px*/
        container.style.transform = 'scale(0.3)'
        
    } else {
        container.style.transform = 'scale(1.0)'
    }
}

   