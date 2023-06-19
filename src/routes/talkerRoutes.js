const express = require('express');

const talkerDB = require('./db/talkerDB');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [result] = await talkerDB.findAll();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao encontrar todas as tarefas' });
  }
});

// router.post('/', async (req, res) => {
//   const todoList = req.body;
//   try {
//     const [result] = await tasksDB.insert(todoList);
//     res.status(201).json({
//       message: `Tarefa cadastrada com sucesso com o id ${result.insertId}` });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
//   }
// });

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const todoList = req.body;
//   try {
//     const [result] = await tasksDB.update(todoList, id);
//     res.status(201).json({
//       message: `Tarefa atualizada com sucesso com o id ${result.insertId}` });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [result] = await tasksDB.remove(id);
//     res.status(201).json({
//       message: `Tarefa deletada com sucesso com o id ${result.insertId}` });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Ocorreu um erro ao deletar uma tarefa' });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const [result] = await tasksDB.findAll();
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Ocorreu um erro ao encontrar todas as tarefas' });
//   }
// });

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [result] = await tasksDB.findById(id);
//     if (!result || result.length === 0) throw new Error('tarefa não existe');
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: `Esse erro ocorreu ao encontrar uma tarefa: ${err}` });
//   }
// });

module.exports = router;
