// Seleção dos elementos da página
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
const searchInput = document.getElementById("search-input");
const suggestionsContainer = document.getElementById("suggestions");

let produtos = [];
let cart = [];

// Funções para abrir e fechar o carrinho
const toggleCart = (isOpen) => {
  body.classList.toggle("active", isOpen);
};

openShopping.addEventListener("click", () => toggleCart(true));
closeShopping.addEventListener("click", () => toggleCart(false));

// Carregar produtos no DOM
const loadProducts = async () => {
  console.log("Script carregado e DOM totalmente carregado");

  try {
    const response = await fetch("http://localhost:3000/api/produtos");
    if (!response.ok) throw new Error("Erro ao buscar produtos");

    produtos = await response.json();
    renderProducts();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};

// Renderiza produtos na lista
const renderProducts = () => {
  produtos.forEach((produto, key) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="title">${produto.nome}</div>
            <div class="price">R$ ${produto.preco.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Adicionar ao Carrinho</button>
        `;
    list.appendChild(newDiv);
  });
};

// Adicionar produtos ao carrinho
function addToCart(key) {
  console.log(`Produto ${key} adicionado ao carrinho`);

  if (!cart[key]) {
    cart[key] = { ...produtos[key], quantity: 1 };
  } else {
    cart[key].quantity += 1;
  }

  reloadCard();
}

// Atualiza o card do carrinho
const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  cart.forEach((item, key) => {
    if (item) {
      totalPrice += item.preco * item.quantity;
      count += item.quantity;

      const newDiv = document.createElement("li");
      newDiv.innerHTML = `
                
         <div><img src="${item.imagem}" alt="${
        item.nome
      }"></div>
                <div class="cardTitle">${item.nome}</div>
                <div class="cardPrice">R$ ${item.preco.toLocaleString()}</div>
                <div>
                    <button class="cardButton" style="background-color: #560bad" onclick="changeQuantity(${key}, ${
        item.quantity - 1
      })">-</button>
                    <div class="count">${item.quantity}</div>
                    <button class="cardButton" style="background-color: #560bad" onclick="changeQuantity(${key}, ${
        item.quantity + 1
      })">+</button>
                </div>
            `;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = `Total: R$ ${totalPrice.toLocaleString()}`;
  quantity.innerText = count;
};

// Altera a quantidade de produtos no carrinho
const changeQuantity = (key, newQuantity) => {
  if (newQuantity <= 0) {
    delete cart[key];
  } else {
    cart[key].quantity = newQuantity;
  }
  reloadCard();
};

// Redirecionar para a tela de compra
document.querySelector(".buy").addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "pagamento.html";
});

// Funções de sugestão de pesquisa
function showSuggestions(value) {
  suggestionsContainer.innerHTML = "";
  if (!value) return;

  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(value.toLowerCase())
  );

  filteredProducts.forEach((produto) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = produto.nome;
    suggestionItem.onclick = () => {
      searchInput.value = produto.nome;
      suggestionsContainer.innerHTML = "";
    };
    suggestionsContainer.appendChild(suggestionItem);
  });
}

// Inicializar a aplicação
document.addEventListener("DOMContentLoaded", loadProducts);
