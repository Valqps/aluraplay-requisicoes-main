import { conexaoAPI } from "./conexaoAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function inserirVideos(evento) {
   
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random()*10).toString();
    try {
        await conexaoAPI.inserirVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (e){
        alert(e);
    }
}

formulario.addEventListener("submit", (evento) => inserirVideos(evento));
