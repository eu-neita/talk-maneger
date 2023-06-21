const insertValidationsNameAndTalk = (talkerList) => {
  if (!talkerList.name) return 'O campo "name" é obrigatório';
  if (talkerList.name.length < 3) return 'O "name" deve ter pelo menos 3 caracteres';
  if (!talkerList.talk) return 'O campo "talk" é obrigatório';
};

const insertValidationsAge = (talkerList) => {
  if (!talkerList.age) return 'O campo "age" é obrigatório';
  if (typeof talkerList.age !== 'number' 
  || talkerList.age < 18 || !Number.isInteger(talkerList.age)) {
  return 'O campo "age" deve ser um número inteiro igual ou maior que 18';
  }
};

const insertValidationWatchedAt = (talkerList) => {
  if (!talkerList.talk.watchedAt) return 'O campo "watchedAt" é obrigatório';
};

const mainVerification = (talkerList) => insertValidationsNameAndTalk(talkerList)
  || insertValidationsAge(talkerList)
  || insertValidationWatchedAt(talkerList)
  || insertValidationWatchedAt(talkerList);

module.exports = mainVerification;