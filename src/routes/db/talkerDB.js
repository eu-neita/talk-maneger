const fs = require('fs').promises;
const path = require('path');

const talker = path.join(__dirname, '../../talker.json');

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

const insertValidationsName = (talkerList) => {
  if (!talkerList.name) return 'O campo "name" é obrigatório';
  if (talkerList.name.length < 3) return 'O "name" deve ter pelo menos 3 caracteres';
};

const insertValidationsAge = (talkerList) => {
  if (!talkerList.age) return 'O campo "age" é obrigatório';
  if (typeof talkerList.age !== 'number') {
  return 'O campo "age" deve ser um número inteiro igual ou maior que 18';
  }
  if (!Number.isInteger(talkerList.age)) {
  return 'O campo "age" deve ser um número inteiro igual ou maior que 18';
  }
};

const insert = async (talkerList) => {
  try {
    const list = talkerList;
    const data = await fs.readFile(talker, 'utf8');
    const json = JSON.parse(data);
    list.id = json.length + 1;
    json.push(list);
    const toString = JSON.stringify(json);
    await fs.writeFile(talker, toString);
    return insertValidationsName(talkerList) || insertValidationsAge(talkerList) || list;
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = {
  findAll,
  findById,
  insert,
};
