const express = require('express');

const talkerDB = require('./db/loginDB');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const loginReq = req.body;
  try {
    const result = talkerDB.loginToTokenReturn(loginReq);
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