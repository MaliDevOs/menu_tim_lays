const pool = require('../db');

const Order = {
  create: async (order) => {
    const { items, total, delivery, customer } = order;
    const res = await pool.query(
      'INSERT INTO orders(items,total,delivery,customer,status) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [JSON.stringify(items), total, delivery, customer, 'pending']
    );
    return res.rows[0];
  },
  getAll: async () => {
    const res = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
    return res.rows;
  },
  updateStatus: async (id, status) => {
    const res = await pool.query('UPDATE orders SET status=$1 WHERE id=$2 RETURNING *', [status, id]);
    return res.rows[0];
  },
};

module.exports = Order;
