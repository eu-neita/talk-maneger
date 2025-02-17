const express = require('express');

const talkerDB = require('./db/talkerDB');

const router = express.Router();

router.get('/search', async (req, res) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) return res.status(401).json({ message: 'Token não encontrado' });
  if (tokenHeader.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  const searchTerm = req.query.q;
  const result = await talkerDB.searchTerm(searchTerm);
  res.status(200).json(result);
});

router.get('/', async (req, res) => {
  try {
    const result = await talkerDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao encontrar todas as pessoas palestrantes' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await talkerDB.findById(id);
    if (!result || result.length === 0) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Esse erro ocorreu ao encontrar uma tarefa: ${err}` });
  }
});

router.post('/', async (req, res) => {
  const talkerList = req.body;
  const tokenHeader = req.headers.authorization;
  try {
    if (!tokenHeader) return res.status(401).json({ message: 'Token não encontrado' });
    if (tokenHeader.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    const response = await talkerDB.insert(talkerList);
    if (typeof response === 'string') return res.status(400).json({ message: response });
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const tokenHeader = req.headers.authorization;
  const talkerEdited = req.body;
  try {
    if (!tokenHeader) return res.status(401).json({ message: 'Token não encontrado' });
    if (tokenHeader.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    const result = await talkerDB.edit(talkerEdited, id);
    if (result.verify !== undefined) {
      return res.status(result.status).json({ message: result.verify }); 
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Esse erro ocorreu ao encontrar uma tarefa: ${err}` });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const tokenHeader = req.headers.authorization;
  try {
    if (!tokenHeader) return res.status(401).json({ message: 'Token não encontrado' });
    if (tokenHeader.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    const result = await talkerDB.remove(id);
    res.status(result.status).json(result.verify);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Esse erro ocorreu ao encontrar uma tarefa: ${err}` });
  }
});

module.exports = router;
