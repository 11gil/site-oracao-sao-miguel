document.querySelector('a[href="#oracao"]').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('oracao').scrollIntoView({ behavior: 'smooth' });
});

function carregarOracaoCompleta() {
    fetch('oracao-completa.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a oração completa:', error));
}

function carregarOracaoReduzida() {
    fetch('oracao-reduzida.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a Oração reduzida:', error));
}

function copiarOracaoCompleta() {
    const oracaoTitulo = document.querySelector("#oracao-completa h2").innerText;
    const oracaoTextos = document.querySelectorAll("#oracao-completa p");
    
    let textoCompleto = `${oracaoTitulo}\n\n`;
    
    oracaoTextos.forEach(paragrafo => {
        textoCompleto += paragrafo.innerText + "\n\n";
    });
    
    navigator.clipboard.writeText(textoCompleto)
        .then(() => alert("Oração completa copiada com sucesso!"))
        .catch(err => console.error("Erro ao copiar: ", err));
}

function copiarOracaoReduzida() {
    const oracaoTitulo = document.querySelector("#oracao-reduzida h2").innerText;
    const oracaoTextos = document.querySelectorAll("#oracao-reduzida p");
    
    let textoCompleto = `${oracaoTitulo}\n\n`;
    
    oracaoTextos.forEach(paragrafo => {
        textoCompleto += paragrafo.innerText + "\n\n";
    });
    
    navigator.clipboard.writeText(textoCompleto)
        .then(() => alert("Oração reduzida copiada com sucesso!"))
        .catch(err => console.error("Erro ao copiar: ", err));
}

document.querySelector('a[href="#historia"]').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('historia').scrollIntoView({ behavior: 'smooth' });
});

// Funções para carregar conteúdo dinamicamente
function carregarOrigem() {
    fetch('historia.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

// Novas funções para as novas páginas
function carregarEstruturaOracao() {
    fetch('estrutura-oracao.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a Estrutura da oração:', error));
}

function carregarUsoImportancia() {
    fetch('uso-e-importancia.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar Uso e importância:', error));
}

function carregarSignificadoEspiritual() {
    fetch('significado-espiritual.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar Significado espiritual:', error));
}

function carregarComoRezar() {
    fetch('como-rezar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página Como rezá-la:', error));
}

function carregarPapaPvi() {
    fetch('papa-paulo-vi.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
       })
        .catch(error => console.error('Erro ao carregar a página O que o Papa Paulo VI reconhecia?:', error));
}

function carregarPapaJpIi() {
    fetch('papa-jp-ii.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('historia-conteudo').innerHTML = data;
       })
        .catch(error => console.error('Erro ao carregar a página O que o Papa João Paulo II notou?:', error));
}

document.querySelector('a[href="#oracao-rotina-diaria"]').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.getElementById('oracao-rotina-diaria').scrollIntoView({ behavior: 'smooth' });
});

function carregarAoAcordar() {
    fetch('ao-acordar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página Ao acordar:', error));
}

function carregarAntesTrabalharEstudar() {
    fetch('antes-trabalhar-estudar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página Antes de trabalhar ou estudar:', error));
}

function carregarNoFinalDoTerco() {
    fetch('no-final-do-terco.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página No final do terço:', error));
}

function carregarAntesDeDormir() {
    fetch('antes-de-dormir.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
    .catch(error => console.error('Erro ao carregar a página Antes de dormir:', error));
}

function carregarProtecaoDaFamilia() {
    fetch('protecao-da-familia.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
    .catch(error => console.error('Erro ao carregar a página Proteção da família:', error));
}

function carregarNoCarroOuAoSairDeCasa() {
    fetch('no-carro-ou-ao-sair-de-casa.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
           .catch(error => console.error('Erro ao carregar a página No carro ou ao sair de casa:', error));
}
  
function carregarDuranteSituacoesDificeis() {
    fetch('durante-situacoes-dificeis.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('oracao-rotina-diaria-conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página Durante situações difíceis:', error));
}