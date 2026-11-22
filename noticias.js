const noticias = document.querySelectorAll(".noticia");
let atual = 0;

function mostrarProxima() {
    noticias[atual].classList.remove("ativa");
    atual = (atual + 1) % noticias.length;   // volta pra 0 depois da última
    noticias[atual].classList.add("ativa");
}

let intervalo = setInterval(mostrarProxima, 5000);