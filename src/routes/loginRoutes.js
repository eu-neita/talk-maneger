const express = require('express');

const talkerDB = require('./db/talkerDB');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
  const loginReq = req.body;
  try {
    const result = await talkerDB.loginToTokenReturn(loginReq);
    if (result.errMessage !== 'no error') {
      return res.status(400).json({ message: result.errMessage });
    }
    return res.status(200).json({ token: result.token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = loginRouter;