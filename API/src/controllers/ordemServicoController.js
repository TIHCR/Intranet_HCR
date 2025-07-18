const ordemServicoService = require('../services/ordemServicoService');

const ordemServicoController = {
 async criar(req, res) {
  try {
    const solicitanteId = req.usuario.id;
    const data = {
      ...req.body,
      solicitanteId,
    };
    const os = await ordemServicoService.criar(data);
    res.status(201).json(os);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar Ordem de Serviço', detalhes: error.message });
  }
},

  async listar(req, res) {
    try {
      const osList = await ordemServicoService.listar();
      res.status(200).json(osList);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao listar ordens de serviço' });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const os = await ordemServicoService.buscarPorId(Number(id));
      if (!os) return res.status(404).json({ error: 'Ordem de serviço não encontrada' });
      res.status(200).json(os);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao buscar ordem de serviço' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const os = await ordemServicoService.atualizar(Number(id), req.body);
      res.status(200).json(os);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar ordem de serviço' });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await ordemServicoService.deletar(Number(id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar ordem de serviço' });
    }
  }
};

module.exports = ordemServicoController;
