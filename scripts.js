let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".capa-video");
let botao = document.querySelector(".btn.info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");

// ligar o SOM
botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
    video.muted = !video.muted
}

// Mostrar o MODAL 
botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

// Tocar o TUNDUM 

window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play();
}