window.onload = function () {
    let section = document.getElementById('conteudo_exemplos');
    let exemplo = '';
    const numerosAleatorios = gerarNumerosAleatorios(5, 1, dados.length);
    console.log(numerosAleatorios)

    numerosAleatorios.forEach(numero => {
        for (let dado of dados) {
            if (numero == dado.id){
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
        }
    })
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

function gerarNumerosAleatorios (quantidade, minimo, maximo) {
    let numeros = [];
    while (numeros.length < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if(!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
}