const conn = require('./connection');

  const findAll = () => conn.execute('SELECT * FROM talkers');

// const insert = (todoList) => conn.execute(
//     `INSERT INTO tasks 
//       (nome, descricao) VALUES (?, ?)`,
//     [todoList.nome, todoList.descricao],
//   );

//   const update = (todoList, id) => conn.execute(
//     `UPDATE tasks 
//     SET nome = ?, descricao = ? WHERE id = ?`,
//     [todoList.nome, todoList.descricao, id],
//   );

//   const remove = (id) => conn.execute(
//     `DELETE FROM tasks
//     WHERE id = ?`,
//     [id],
//   );

  // const findById = (id) => conn.execute('SELECT * FROM tasks WHERE id = ?', [id]);

module.exports = {
  findAll,
  // insert,
  // update,
  // remove,
  // findById,
};