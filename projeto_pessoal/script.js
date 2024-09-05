window.onload = function () {
    let section = document.getElementById('conteudo_exemplos');
    let exemplo = '';

    for (let dado of dados) {
        exemplo += `
            <div class="conteudo_exemplos_exemplo">
                <img class="conteudo_exemplos_exemplo_imagem" src="${dado.imagem}" alt="Bandeira_do_${dado.nome}">
                <div class="conteudo_exemplos_exemplo_info">
                    <h3 class="conteudo_exemplos_exemplo_titulo">${dado.nome}</h3>
                    <p>${dado.continente}</p>
                    <p>${dado.curiosidade}</p>
                    <a class="conteudo_exemplos_exemplo_descricao" href="${dado.link}" target="_blank">Saiba mais.</a>
                </div>
            </div>
        `
    }

    section.innerHTML = exemplo;
}

function pesquisar() {
    let section = document.getElementById('conteudo_exemplos');
    let section2 = document.getElementById('conteudo_pesquisa');
    let resultado = '';

    for (let dado of dados) {
        resultado += `
            <div class="conteudo_exemplos_exemplo">
                <img class="conteudo_exemplos_exemplo_imagem" src="${dado.imagem}" alt="Bandeira_do_${dado.nome}">
                <div class="conteudo_exemplos_exemplo_info">
                    <h3 class="conteudo_exemplos_exemplo_titulo">${dado.nome}</h3>
                    <p>${dado.curiosidade}</p>
                    <p>${dado.continente}</p>
                    <a class="conteudo_exemplos_exemplo_descricao" href="${dado.link}" target="_blank">Saiba mais.</a>
                </div>
            </div>
        `
    }

    section2.innerHTML = resultado;
    section.style.display = 'none';
    section2.style.display = 'flex';
    
}