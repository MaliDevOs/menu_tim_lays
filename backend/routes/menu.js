const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

router.get('/', async (req, res) => {
  const menu = await Menu.getAll();
  res.json(menu);
});

router.post('/add', async (req, res) => {
  const item = req.body;
  const newItem = await Menu.add(item);
  res.json(newItem);
});

module.exports = router;
