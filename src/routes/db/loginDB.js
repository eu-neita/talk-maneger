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
  loginToTokenReturn,
};