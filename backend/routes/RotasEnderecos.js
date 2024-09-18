const express = require('express');
const router = express.Router();
const EnderecoController = require('../controller/Enderecos.Controller');

// Rota para criar um novo endereço
router.post('/enderecos', EnderecoController.createEndereco);

// Rota para obter todos os endereços
router.get('/enderecos', EnderecoController.getAllEnderecos);

// Rota para obter um endereço pelo ID
router.get('/enderecos/:id', EnderecoController.getEnderecoById);

// Rota para atualizar um endereço
router.put('/enderecos/:id', EnderecoController.updateEndereco);

// Rota para deletar um endereço
router.delete('/enderecos/:id', EnderecoController.deleteEndereco);

module.exports = router;
