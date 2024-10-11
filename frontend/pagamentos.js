const modal = document.getElementById("paymentModal");
const finalizarCompraBtn = document.querySelector(".finalizar-compra");

finalizarCompraBtn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "flex"; // Exibe o modal
  document.body.classList.add("modal-open"); // Aplica o blur ao fundo
});

// Fechar o modal ao clicar fora da caixa de conteúdo
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};

document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("tbody");

  let precoTotal = 0; precos = 0;
  const  frete = 23.68;

  cart.forEach((item, index) => {
    if (item != undefined) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>
            <div class="product">
              <img src="${item.imagem}" alt="" id="produto-imagem"/>
              <div class="info">
                <div class="name" id="produto-nome">${item.nome}</div>
                <div class="category" id="produto-categoria">${item.marca}</div>
              </div>
            </div>
          </td>
          <td id="produto-preco">R$ ${item.preco.toLocaleString()}</td>
          <td>
            <button class="remove" data-index="${index}"><i class="bx bx-x"></i></button>
          </td>
      `;
      tbody.appendChild(row);

      precos += item.preco * item.quantity; // Calcular o preço total
      precoTotal += precos + frete;
    }
  });

  // Atualizar o total na seção de resumo da compra
  document.querySelector(
    "footer span:nth-child(2)"
  ).innerText = `R$ ${precoTotal.toLocaleString()}`;

  // Atualizar o total na seção de resumo da compra
  document.querySelector(
    "aside span:nth-child(2)" 
  ).innerText = `R$ ${precos.toLocaleString()}`;

  //frete
  document.querySelector(
    "aside span:nth-child(3)" 
  ).innerText = `R$ ${frete.toLocaleString()}`;

  // Adicionar evento de clique aos botões de remover
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.dataset.index; // Obter o índice do item a ser removido
      cart.splice(index, 1); // Remover o item do array do carrinho
      localStorage.setItem("cart", JSON.stringify(cart)); // Atualizar o localStorage

      // Remover a linha da tabela
      tbody.removeChild(button.closest("tr"));

      // Atualizar o total após a remoção
      totalPrice -= item.preco * item.quantity;
      document.querySelector(
        "footer span:nth-child(2)"
      ).innerText = `R$ ${preco.toLocaleString()}`;
      location.reload();
    });
  });
});
