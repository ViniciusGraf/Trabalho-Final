const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/UsuariosController");

// Rota para criar um novo usuário
router.post("/usuarios", UsuarioController.createUsuario);

// Rota para obter todos os usuários
router.get("/usuarios", UsuarioController.getAllUsuarios);

// Rota para obter um usuário pelo ID
router.get("/usuarios/:id", UsuarioController.getUsuarioById);

// Rota para atualizar um usuário
router.put("/usuarios/:id", UsuarioController.updateUsuario);

// Rota para deletar um usuário
router.delete("/usuarios/:id", UsuarioController.deleteUsuario);

// Rota para fazer Login
router.post("/usuarios/login", UsuarioController.login);

module.exports = router;
