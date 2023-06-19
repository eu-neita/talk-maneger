const express = require('express');

const talkerDB = require('./db/talkerDB');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const loginReq = req.body;
  try {
    const result = talkerDB.loginToTokenReturn(loginReq);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

module.exports = loginRouter;