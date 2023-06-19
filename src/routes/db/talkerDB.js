// const conn = require('./connection');

const fs = require('fs');
const path = require('path');

const talker = path.join(__dirname, '../../talker.json');

const findAll = () => {
  const data = fs.readFileSync(talker, 'utf8');
  return JSON.parse(data);
};

  // const findAll = () => conn.execute('SELECT * FROM talkers');

module.exports = {
  findAll,
};
