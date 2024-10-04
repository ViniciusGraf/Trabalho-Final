
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
        .catch(error => console.error('Erro ao buscar produtos:', error));
});
