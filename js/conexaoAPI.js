async function listarVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const listaConvertida = await conexao.json();
    return listaConvertida;
}

async function inserirVideos(titulo, descricao, url, imagem){
    console.log('funcionando por enquanto');
    const conexao = await fetch('http://localhost:3000/videos',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
            
        })
    });
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo");
    }
    const conexaoConvertida = await conexao.json();
    console.log('até aqui, ok');
    return conexaoConvertida;
}

async function buscarVideos(termoPesquisado){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoPesquisado}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conexaoAPI = {
    listarVideos,
    inserirVideos,
    buscarVideos
}
