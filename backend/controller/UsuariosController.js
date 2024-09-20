const { where } = require("sequelize");
const Usuario = require("../model/Usuarios");

const UsuarioController = {
  createUsuario: async (req, res) => {
    try {
      const novoUsuario = await Usuario.create(req.body);
      res.json(novoUsuario);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getUsuarioById: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).send("Usuário não encontrado");
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).send("Usuário não encontrado");
      }
      await usuario.update(req.body);
      res.send("Usuário atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).send("Usuário não encontrado");
      }
      await usuario.destroy();
      res.send("Usuário deletado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const usuario = await Usuario.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!usuario) {
        return res.status(404).send("Usuário não encontrado");
      }
      const senhaCorreta = await usuario.compareSenha(req.body.senha);
      if (senhaCorreta) {
        return res.json(usuario);
      } else {
        return res.status(400).send("Senha incorreta, tente novamente!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = UsuarioController;
