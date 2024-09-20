const Categoria = require("../model/Categorias");
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const CategoriaController = {
  createCategoria: async (req, res) => {
    try {
      const novaCategoria = await Categoria.create(req.body);
      res.json(novaCategoria);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllCategorias: async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getCategoriaById: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).send("Categoria não encontrada");
      }
      res.json(categoria);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateCategoria: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).send("Categoria não encontrada");
      }
      await categoria.update(req.body);
      res.send("Categoria atualizada com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteCategoria: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (!categoria) {
        return res.status(404).send("Categoria não encontrada");
      }
      await categoria.destroy();
      res.send("Categoria deletada com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Implementação das funções de controle de estoque
  // registrarEntrada e registrarSaida
  // ... (a ser implementado)
};

module.exports = CategoriaController;
