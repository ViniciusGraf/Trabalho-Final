/* Seleção dos elementos da página */
const OpenShopping = document.querySelector(".shopping");
const CloseShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

let produtos = [];
let cart = [];

/* Abrir e fechar o carrinho */
OpenShopping.addEventListener("click", () => {
    body.classList.add("active");
});

CloseShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

/* Carregar produtos no DOM */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado e DOM totalmente carregado");

    fetch("http://localhost:3000/api/produtos")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            return response.json();
        })
        .then((data) => {
            produtos = data;
            produtos.forEach((produto, key) => {
                let newDiv = document.createElement("div");
                newDiv.classList.add("item");
                newDiv.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <div class="title">${produto.nome}</div>
                    <div class="price">R$ ${produto.preco.toLocaleString()}</div>
                    <button onclick="addToCart(${key})">Adicionar ao Carrinho</button>
                `;
                // Anexar os cartões dentro da seção trending-product
                document.querySelector(".products").appendChild(newDiv);
            });
        })
        .catch((error) => console.error("Erro ao buscar produtos:", error));
});

/* Função para adicionar produtos ao carrinho */
function addToCart(key) {
    console.log(`Produto ${key} adicionado ao carrinho`);

    if (cart[key] == null) {
        cart[key] = {
            ...produtos[key],
            quantity: 1
        };
    } else {
        cart[key].quantity += 1;
    }

    reloadCard();
}

/* Função para atualizar o card do carrinho */
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    cart.forEach((value, key) => {
        if (value) {
            totalPrice += value.preco * value.quantity;
            count += value.quantity;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="${value.imagem}" alt="${value.nome}"></div>
                <div class="cardTitle">${value.nome}</div>
                <div class="cardPrice">R$ ${value.preco.toLocaleString()}</div>
                <div>
                    <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    // Atualiza o total formatado
    total.innerText = `Total: R$ ${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
};

/* Função para alterar a quantidade de produtos no carrinho */
const changeQuantity = (key, quantity) => {
    if (quantity <= 0) {
        delete cart[key];
    } else {
        cart[key].quantity = quantity;
    }
    reloadCard();
};
