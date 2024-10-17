// Lógica para mudar as imagens do produto
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;
  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

// Adicionar produto
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado e DOM totalmente carregado");

  // Fetch para obter a lista de produtos
  fetch("http://localhost:3000/api/produtos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      return response.json();
    })
    .then((data) => {
      const produtosContainer = document.getElementById("produtos");
      data.forEach((produto) => {
        const row = document.createElement("div");
        row.className = "row";
        row.innerHTML = `
                    <a href="produtos.html?id=${
                      produto.id
                    }" class="product-link">
                        <img src="${produto.imagem}" alt="${produto.nome}" />
                        <div class="product-text">
                            <h5>Promoção</h5>
                        </div>
                        <div class="heart-icon">
                            <i class="bx bx-cart"></i>
                            <i class="bx bx-heart"></i>
                        </div>
                        <div class="descricao">${produto.descricao}</div>
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
    .catch((error) => console.error("Erro ao buscar produtos:", error));

  // Fetch para obter os detalhes do produto específico
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    fetch(`http://localhost:3000/api/produtos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar detalhes do produto");
        }
        return response.json();
      })
      .then((produto) => {
        // Atualizar a imagem do produto

        const precoAntigo = (produto.preco * 1.1).toFixed(2);

        const productImage = document.getElementById("produto-imagem");
        productImage.src = produto.imagem;

        const productContent = document.querySelector(".product-content");
        productContent.innerHTML = `
                    <h2 class="product-title">${produto.nome}</h2>
                    <a href="#" class="product-link">visite o nosso site</a>
                    <div class="product-rating">
                        ${'<i class="bx bxs-star"></i>'.repeat(5)} 
                        </div>
                    <div class="product-price">
                        <p class="last-price">Preço antigo: <span>R$${precoAntigo}</span></p>
                        <p class="new-price">Oferta: <span>R$${
                          produto.preco
                        }</span></p>
                    </div>
                    <div class="product-detail">
                        <h2>Sobre o produto:</h2>
                        <p>${produto.descricao}</p>
                        <ul>
                            <li>Disponibilidade: <span>${
                              produto.estoque
                            }</span></li>
                            <li>Categoria: <span>${
                              produto.categoria
                            }</span></li>
                            <li>Entrega: <span>Todo Brasil</span></li>
                        </ul>
                    </div>
                    <div class="purchase-info">
                        <input type="number" min="0" value="1" />
                        <button type="button" class="btn">
                            Adicionar ao carrinho <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                `;
      })
      .catch((error) =>
        console.error("Erro ao buscar detalhes do produto:", error)
      );
  }
});
