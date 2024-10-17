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

  let precoTotal = 0;

  // Função para recalcular o preço total
  function recalcularPrecoTotal() {
    precoTotal = 0; // Reseta o preço total

    // Recalcula o preço total do carrinho
    cart.forEach((item) => {
      precoTotal += item.preco * item.quantity;
    });

    return precoTotal;
  }

  // Função para atualizar o valor do frete e os preços
  function atualizarFrete() {
    const opcoesFrete = document.querySelectorAll('input[name="shipping"]');
    let valorFrete = 0; // Valor padrão do frete caso nenhuma opção esteja selecionada

    // Percorre as opções para verificar qual está selecionada
    opcoesFrete.forEach((opcao) => {
      if (opcao.checked) {
        valorFrete = parseFloat(
          opcao.parentElement
            .querySelector(".price")
            .innerText.replace("R$", "")
            .replace(",", ".")
        );
      }
    });

    // Atualiza o valor do frete no span com id "frete"
    const spanFrete = document.querySelector("#frete");
    if (spanFrete) {
      spanFrete.innerText = `R$ ${valorFrete.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`;
    }

    // Recalcula o preço total com frete
    const precoTotalComFrete = precoTotal + valorFrete;
    document.querySelector(
      "footer span:nth-child(2)"
    ).innerText = `R$ ${precoTotalComFrete.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

    // Atualiza o preço dos itens na seção de resumo (sem o frete)
    document.querySelector(
      "aside span:nth-child(2)"
    ).innerText = `R$ ${precoTotal.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`; // Mostra apenas o total dos itens
  }

  // Renderiza os itens do carrinho na tabela
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

      precoTotal += item.preco * item.quantity; // Calcular o preço total dos itens
    }
  });

  // Atualiza os preços ao carregar a página
  atualizarFrete();

  // Adicionar evento de clique aos botões de remover
  const removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.closest("tr").rowIndex - 1; // Ajuste o índice para corresponder ao índice do item no carrinho

      // Remove o item do array do carrinho
      const itemRemovido = cart.splice(index, 1)[0];
      localStorage.setItem("cart", JSON.stringify(cart)); // Atualiza o localStorage

      // Remove a linha da tabela
      tbody.removeChild(button.closest("tr"));

      // Recalcula o preço total após a remoção do item
      precoTotal -= itemRemovido.preco * itemRemovido.quantity;

      // Atualiza o total com frete
      atualizarFrete();
    });
  });

  // Adiciona o evento de mudança a todas as opções de frete
  document.querySelectorAll('input[name="shipping"]').forEach((opcao) => {
    opcao.addEventListener("change", atualizarFrete);
  });
});
