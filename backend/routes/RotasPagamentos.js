const express = require("express");
const router = express.Router();
const PagamentoController = require("../controller/PagamentosController");

// Rota para criar um novo pagamento
router.post("/pagamentos", PagamentoController.createPagamento);

// Rota para obter todos os pagamentos
router.get("/pagamentos", PagamentoController.getAllPagamentos);

// Rota para obter um pagamento pelo ID
router.get("/pagamentos/:id", PagamentoController.getPagamentoById);

// Rota para atualizar um pagamento
router.put("/pagamentos/:id", PagamentoController.updatePagamento);

// Rota para deletar um pagamento
router.delete("/pagamentos/:id", PagamentoController.deletePagamento);

// Rota para fazer Login (se necessário para pagamentos, caso contrário, remova esta rota)
router.post("/pagamentos/login", PagamentoController.login);

module.exports = router;
