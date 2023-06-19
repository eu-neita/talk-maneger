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
}

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
  if (loginReq.email.length !== 0 && loginReq.password.length !== 0) {
    return { token: `${generateToken()}` };
  }
};

  // const findAll = () => conn.execute('SELECT * FROM talkers');

module.exports = {
  findAll,
  findById,
  loginToTokenReturn,
};
