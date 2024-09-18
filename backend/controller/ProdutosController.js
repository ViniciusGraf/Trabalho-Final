const Produtos = require('../model/Produtos');
// const EntradaEstoque = require('../models/EntradaEstoque');
// const SaidaEstoque = require('../models/SaidaEstoque');

const ProdutosController = {
    createProdutos: async (req, res) => {
        try {
            const novoProduto = await Produtos.create(req.body);
            res.json(novoProduto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProdutos: async (req, res) => {
        try {
            const produtos = await Produtos.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProdutosById: async (req, res) => {
        try {
            const produto = await Produtos.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            res.json(produto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProdutos: async (req, res) => {
        try {
            const produto = await Produtos.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            await produto.update(req.body);
            res.send('Produto atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProdutos: async (req, res) => {
        try {
            const produto = await Produtos.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).send('Produto não encontrado');
            }
            await produto.destroy();
            res.send('Produto deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

module.exports = ProdutosController;
