const fsr = require('fs').promises;
const fs = require('fs');
const path = require('path');
const mainVerification = require('./insertVerification');

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

const insert = async (talkerList) => {
  try {
    const list = talkerList;
    const data = await fsr.readFile(talker, 'utf8');
    const json = JSON.parse(data);
    list.id = json.length + 1;
    json.push(list);
    const toString = JSON.stringify(json);
    await fsr.writeFile(talker, toString);
    return mainVerification(talkerList) || list;
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

const edit = async (talkerEdited, id) => {
  try {
    const data = await fsr.readFile(talker, 'utf8');
    const json = JSON.parse(data);
    json.map((person) => person.id === Number(id));
    console.log(json.map((person) => person.id === Number(id)));
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

module.exports = {
  findAll,
  findById,
  insert,
  edit,
};
