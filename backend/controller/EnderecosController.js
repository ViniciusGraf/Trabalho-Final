const Enderecos = require("../model/Enderecos");
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const EnderecosController = {
  createEndereco: async (req, res) => {
    try {
      const novoEndereco = await Enderecos.create(req.body);
      res.json(novoEndereco);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllEnderecos: async (req, res) => {
    try {
      const enderecos = await Enderecos.findAll();
      res.json(enderecos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getEnderecoById: async (req, res) => {
    try {
      const endereco = await Enderecos.findByPk(req.params.id);
      if (!endereco) {
        return res.status(404).send("Endereço não encontrado");
      }
      res.json(endereco);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateEndereco: async (req, res) => {
    try {
      const endereco = await Enderecos.findByPk(req.params.id);
      if (!endereco) {
        return res.status(404).send("Endereço não encontrado");
      }
      await endereco.update(req.body);
      res.send("Endereço atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteEndereco: async (req, res) => {
    try {
      const endereco = await Enderecos.findByPk(req.params.id);
      if (!endereco) {
        return res.status(404).send("Endereço não encontrado");
      }
      await endereco.destroy();
      res.send("Endereço deletado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = EnderecosController;
