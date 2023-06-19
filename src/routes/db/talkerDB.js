// const conn = require('./connection');

const fs = require('fs');
const path = require('path');

const talker = path.join(__dirname, '../../talker.json');

const generateToken = (length = 16) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i += 1) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

const findAll = () => {
  const data = fs.readFileSync(talker, 'utf8');
  return JSON.parse(data);
};

const findById = (id) => {
  const data = fs.readFileSync(talker, 'utf8');
  const people = JSON.parse(data);
  const person = people.find((personTalker) => Number(id) === personTalker.id);
  return person;
};

const loginToTokenReturn = (loginReq) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!loginReq.email) return { errMessage: 'O campo "email" é obrigatório' };
  if (!emailRegex.test(loginReq.email)) {
    return { errMessage: 'O "email" deve ter o formato "email@email.com"' };
  }
  if (!loginReq.password) return { errMessage: 'O campo "password" é obrigatório' };
  if (loginReq.password > 6) return { errMessage: 'O "password" deve ter pelo menos 6 caracteres' };
  return { token: `${generateToken()}`, errMessage: 'no error' };
};

module.exports = {
  findAll,
  findById,
  loginToTokenReturn,
};
