const service = require('../services/hcrEquipamentosMedicosService');

class HcrEquipamentosMedicosController {
  async criar(req, res) {
    try {
      const equipamento = await service.criar(req.body);
      res.status(201).json(equipamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar equipamento médico.' });
    }
  }

  async listar(req, res) {
    try {
      const lista = await service.listar();
      res.json(lista);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar os equipamentos.' });
    }
  }

  async buscarPorId(req, res) {
    try {
      const equipamento = await service.buscarPorId(req.params.id);
      if (!equipamento) {
        return res.status(404).json({ error: 'Equipamento não encontrado.' });
      }
      res.json(equipamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar equipamento.' });
    }
  }

  async atualizar(req, res) {
    try {
      const equipamento = await service.atualizar(req.params.id, req.body);
      res.json(equipamento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar equipamento.' });
    }
  }

  async deletar(req, res) {
    try {
      await service.deletar(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar equipamento.' });
    }
  }
}

module.exports = new HcrEquipamentosMedicosController();
