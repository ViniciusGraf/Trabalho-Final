
//rolamento pra quando clica em compre agora
document.querySelector('.main-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('#Produtos').scrollIntoView({
        behavior: 'smooth'  
    });
});

//Buscar os produtos
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado e DOM totalmente carregado");

    fetch('http://localhost:3000/api/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            return response.json();
        })
        .then(data => {
            const produtosContainer = document.getElementById('produtos');
            data.forEach(produto => {
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
                        <div class="rating">
                            ${'<i class="bx bxs-star"></i>'.repeat(5)}
                        </div>
                        <div class="price">
                            <p>R$ ${produto.preco}</p>
                        </div>
                    </a>
                `;
                produtosContainer.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar produtos:', error));
});


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

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = '';
    if (value.length === 0) return;

    const suggestions = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    suggestions.forEach(item => {
        const suggestionElement = document.createElement("div");
        suggestionElement.textContent = item;
        suggestionElement.classList.add("suggestion");
        suggestionElement.onclick = () => selectSuggestion(item);
        suggestionsContainer.appendChild(suggestionElement);
    });
}

function selectSuggestion(item) {
    document.getElementById("search-input").value = item;
    document.getElementById("suggestions").innerHTML = '';
}

function search() {
    const input = document.getElementById("search-input").value;
    alert(`Você pesquisou por: ${input}`);
}