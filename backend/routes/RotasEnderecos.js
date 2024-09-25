const express = require("express");
const router = express.Router();
const EnderecosController = require("../controller/EnderecosController");

// Rota para criar um novo endereço
router.post("/enderecos", EnderecosController.createEndereco);

// Rota para obter todos os endereços
router.get("/enderecos", EnderecosController.getAllEnderecos);

// Rota para obter um endereço pelo ID
router.get("/enderecos/:id", EnderecosController.getEnderecoById);

// Rota para atualizar um endereço
router.put("/enderecos/:id", EnderecosController.updateEndereco);

// Rota para deletar um endereço
router.delete("/enderecos/:id", EnderecosController.deleteEndereco);

module.exports = router;
