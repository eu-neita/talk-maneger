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

const insertValidations = (talkerList) => {
  if (!talkerList.name) return 'O campo "name" é obrigatório';
  if (!talkerList.age) return 'O campo "age" é obrigatório';
  // if (!talkerList.age) return 'O campo "name" é obrigatório';
};

const insert = async (talkerList) => {
  try {
    insertValidations(talkerList);
    const data = await fs.readFile(talker, 'utf8');
    const json = JSON.parse(data);
    json.push(talkerList);
    const toString = JSON.stringify(json);
    await fs.writeFile(talker, toString);
    return 'Arquivo escrito com sucesso!';
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = {
  findAll,
  findById,
  insert,
};
