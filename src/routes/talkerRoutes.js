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

module.exports = router;
