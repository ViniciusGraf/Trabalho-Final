// Função para rolar suavemente para a seção de produtos
document.querySelector('.main-btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#trending').scrollIntoView({ behavior: 'smooth' });
});

// Função para buscar produtos da API
const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/produtos');

        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }

        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
};

// Função para exibir produtos no DOM
const displayProducts = (produtos) => {
    const produtosContainer = document.getElementById('produtos');
    produtosContainer.innerHTML = ''; // Limpa o conteúdo existente

    produtos.forEach(produto => {
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `
            <a href="produtos.html?id=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.nome}" />
                <div class="product-text">
                    <h5>Promoção</h5>
                </div>
                <div class="heart-icon">
                    <i class="bx bx-cart"></i>
                    <i class="bx bx-heart"></i>
                </div>
                <div class="descricao">${produto.nome}</div>
                <div class="rating">${'<i class="bx bxs-star"></i>'.repeat(5)}</div>
                <div class="price">
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </a>
        `;
        produtosContainer.appendChild(row);
    });
};

// Sugestões de busca
const items = [
    "Computador",
    "Laptop",
    "Teclado Mecânico",
    "Mouse Gamer",
    "Headset",
    "Monitor",
    "Placa de Vídeo",
    "Processador",
    "Memória RAM",
    "SSD"
];

// Função para mostrar sugestões de busca
const showSuggestions = (value) => {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = '';
    if (value.length === 0) return;

    const suggestions = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));

    if (suggestions.length === 0) {
        const noResults = document.createElement("div");
        noResults.classList.add("no-suggestions");
        noResults.innerHTML = `
            <i class="bx bx-sad"></i>
            <p>Nenhuma sugestão encontrada.</p>
        `;
        suggestionsContainer.appendChild(noResults);
    } else {
        suggestions.forEach(item => {
            const suggestionElement = document.createElement("div");
            suggestionElement.textContent = item;
            suggestionElement.classList.add("suggestion");
            suggestionElement.onclick = () => selectSuggestion(item);
            suggestionsContainer.appendChild(suggestionElement);
        });
    }
};

// Função para selecionar uma sugestão
const selectSuggestion = (item) => {
    document.getElementById("search-input").value = item;
    document.getElementById("suggestions").innerHTML = '';
};

// Função para pesquisa
const search = () => {
    const input = document.getElementById("search-input").value;
    alert(`Você pesquisou por: ${input}`);
};

// Evento de input na barra de pesquisa
document.getElementById("search-input").addEventListener("input", (event) => {
    showSuggestions(event.target.value);
});

// Inicia a busca de produtos quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado e DOM totalmente carregado");
    fetchProducts();
});


document.querySelectorAll('.navbar a').forEach((item, index) => {
    item.style.setProperty('--i', index);
});
