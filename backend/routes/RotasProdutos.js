const express = require("express");
const router = express.Router();
const ProdutoController = require("../controller/ProdutosController");

// Rota para criar um novo produto
router.post("/produtos", ProdutoController.createProdutos);

// Rota para obter todos os produtos
router.get("/produtos", ProdutoController.getAllProdutos);

// Rota para obter um produto pelo ID
router.get("/produtos/:id", ProdutoController.getProdutosById);

// Rota para atualizar um produto
router.put("/produtos/:id", ProdutoController.updateProdutos);

// Rota para deletar um produto
router.delete("/produtos/:id", ProdutoController.deleteProdutos);

module.exports = router;
