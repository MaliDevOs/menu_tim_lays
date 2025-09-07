const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/create', async (req, res) => {
  const order = req.body;
  const newOrder = await Order.create(order);
  res.json(newOrder);
});

router.get('/', async (req, res) => {
  const orders = await Order.getAll();
  res.json(orders);
});

router.patch('/status/:id', async (req, res) => {
  const { status } = req.body;
  const updatedOrder = await Order.updateStatus(req.params.id, status);
  res.json(updatedOrder);
});

module.exports = router;
