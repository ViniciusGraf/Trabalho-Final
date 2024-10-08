document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado e DOM totalmente carregado");

    // Seleção dos elementos da página
    const OpenShopping = document.querySelector(".shopping");
    const CloseShopping = document.querySelector(".closeShopping");
    const listCard = document.querySelector(".listCard");
    const total = document.querySelector(".total");
    const body = document.querySelector("body");
    const quantity = document.querySelector(".quantity");
    const produtosContainer = document.querySelector(".products");
    const suggestionsContainer = document.getElementById("suggestions");
    const searchInput = document.getElementById("search-input");

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

    let produtos = [];
    let cart = [];

    /* Funções de controle do carrinho */
    const toggleCart = (action) => {
        if (action === 'open') {
            body.classList.add("active");
        } else {
            body.classList.remove("active");
        }
    };

    OpenShopping.addEventListener("click", () => toggleCart('open'));
    CloseShopping.addEventListener("click", () => toggleCart('close'));

    /* Função para buscar produtos da API */
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/produtos');
            if (!response.ok) throw new Error('Erro ao buscar produtos');
            const data = await response.json();
            displayProducts(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    /* Função para exibir produtos no DOM */
    const displayProducts = (produtos) => {
        produtosContainer.innerHTML = ''; // Limpa o conteúdo existente
        produtos.forEach((produto, key) => {
        
            // Adiciona cartão de produto com estilo
            let newDiv = document.createElement("div");
            newDiv.classList.add("item"); // Adiciona a classe 'item' para estilizar o cartão
            newDiv.style.backgroundColor = "white";
            newDiv.style.borderRadius = "10px";
            newDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            newDiv.style.overflow = "hidden";
            newDiv.style.transition = "transform 0.3s ease";
            newDiv.style.width = "calc(33.33% - 20px)"; // Altera a largura dos cartões para um layout em 3 colunas
            newDiv.style.textAlign = "center";
            newDiv.style.padding = "20px";
            newDiv.style.marginBottom = "20px";

            newDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" style="max-width: 100%; height: auto;">
                <div class="title" style="margin-top: 15px; font-size: 1.2rem; color: #333; font-weight: bold;">
                    ${produto.nome}
                </div>
                <div class="price" style="font-size: 1rem; color: #560bad; margin: 10px 0;">
                    R$ ${produto.preco.toLocaleString()}
                </div>
                <button onclick="addToCart(${key})" style="background-color: #560bad; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">
                    Adicionar ao Carrinho
                </button>
            `;

            // Aplica o efeito hover ao cartão
            newDiv.addEventListener("mouseenter", () => {
                newDiv.style.transform = "translateY(-5px)";
            });
            newDiv.addEventListener("mouseleave", () => {
                newDiv.style.transform = "translateY(0)";
            });

            produtosContainer.appendChild(newDiv);
        });
    };

    /* Função para adicionar produtos ao carrinho */
    function addToCart(key) {
        console.log(`Produto ${key} adicionado ao carrinho`);
        if (!cart[key]) {
            cart[key] = { ...produtos[key], quantity: 1 };
        } else {
            cart[key].quantity += 1;
        }
        reloadCard();
    }

    /* Função para atualizar o card do carrinho */
    const reloadCard = () => {
        listCard.innerHTML = "";
        let totalPrice = 0;
        let count = 0;

        cart.forEach((item, index) => {
            if (item) {
                totalPrice += item.preco * item.quantity;
                count += item.quantity;
                const newDiv = document.createElement("li");
                newDiv.innerHTML = `
                    <div><img src="${item.imagem}" alt="${item.nome}"></div>
                    <div class="cardTitle">${item.nome}</div>
                    <div class="cardPrice">R$ ${item.preco.toLocaleString()}</div>
                    <div>
                        <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${index}, ${item.quantity - 1})">-</button>
                        <div class="count">${item.quantity}</div>
                        <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${index}, ${item.quantity + 1})">+</button>
                    </div>
                `;
                listCard.appendChild(newDiv);
            }
        });

        total.innerText = `Total: R$ ${totalPrice.toLocaleString()}`;
        quantity.innerText = count;
    };

    /* Função para alterar a quantidade de produtos no carrinho */
    const changeQuantity = (key, newQuantity) => {
        if (newQuantity <= 0) {
            delete cart[key];
        } else {
            cart[key].quantity = newQuantity;
        }
        reloadCard();
    };

    /* Função para mostrar sugestões de busca */
    const showSuggestions = (value) => {
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

    /* Função para selecionar uma sugestão */
    const selectSuggestion = (item) => {
        searchInput.value = item;
        suggestionsContainer.innerHTML = '';
    };

    /* Evento de input na barra de pesquisa */
    searchInput.addEventListener("input", (event) => {
        showSuggestions(event.target.value);
    });

    /* Função para pesquisa */
    const search = () => {
        const input = searchInput.value;
        alert(`Você pesquisou por: ${input}`);
    };

    // Rolar suavemente para a seção de produtos
    document.querySelector('.main-btn').addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#trending').scrollIntoView({ behavior: 'smooth' });
    });

    // Definindo propriedades para links do navbar
    document.querySelectorAll('.navbar a').forEach((item, index) => {
        item.style.setProperty('--i', index);
    });

    // Inicia a busca de produtos quando o DOM estiver totalmente carregado
    fetchProducts();
});
