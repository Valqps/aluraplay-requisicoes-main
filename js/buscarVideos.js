import { conexaoAPI } from "./conexaoAPI.js";
import construirItemLista from "./listarItens.js";

async function buscarVideos(evento) {
    evento.preventDefault();
    const buscaDigitada = document.querySelector('[data-pesquisa]').value;
    const busca = await conexaoAPI.buscarVideos(buscaDigitada);;
    const lista = document.querySelector('[data-lista]');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(elemento => lista.appendChild(construirItemLista(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não há nenhum vídeo com o termo pesquisado.</h2>`;
    }
}

const botaoPesquisa = document.querySelector('[data-botaoPesquisar]');
botaoPesquisa.addEventListener("click", evento => buscarVideos(evento));
