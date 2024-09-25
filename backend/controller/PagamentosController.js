const Pagamentos = require("../model/Pagamentos");

const PagamentosController = {
  createPagamento: async (req, res) => {
    try {
      const novoPagamento = await Pagamentos.create(req.body);
      res.json(novoPagamento);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllPagamentos: async (req, res) => {
    try {
      const pagamentos = await Pagamentos.findAll();
      res.json(pagamentos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getPagamentoById: async (req, res) => {
    try {
      const pagamento = await Pagamentos.findByPk(req.params.id);
      if (!pagamento) {
        return res.status(404).send("Pagamento não encontrado");
      }
      res.json(pagamento);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updatePagamento: async (req, res) => {
    try {
      const pagamento = await Pagamentos.findByPk(req.params.id);
      if (!pagamento) {
        return res.status(404).send("Pagamento não encontrado");
      }
      await pagamento.update(req.body);
      res.send("Pagamento atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deletePagamento: async (req, res) => {
    try {
      const pagamento = await Pagamentos.findByPk(req.params.id);
      if (!pagamento) {
        return res.status(404).send("Pagamento não encontrado");
      }
      await pagamento.destroy();
      res.send("Pagamento deletado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = PagamentosController;
