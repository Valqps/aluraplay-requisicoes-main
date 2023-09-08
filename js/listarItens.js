import { conexaoAPI } from "./conexaoAPI.js";

const lista = document.querySelector('[data-lista]');

export default function construirItemLista(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`;
    return video;
}

async function listarVideos () {
    try {
        const listaDaAPI = await conexaoAPI.listarVideos();
        listaDaAPI.forEach(elemento => lista.appendChild(construirItemLista(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível exibir a lista de vídeos. Recarregue o seu navegador, e se não funcionar, tente novamente mais tarde. </h2>`
    }
}

listarVideos();

console.log(lista.getOwnPropertyNames(listaDaAPI));

