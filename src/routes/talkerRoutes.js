const express = require('express');

const talkerDB = require('./db/talkerDB');

const router = express.Router();

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

module.exports = router;
