const pool = require('../db');

const Menu = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM menu ORDER BY category');
    return res.rows;
  },
  add: async (item) => {
    const { name, category, price, image } = item;
    const res = await pool.query(
      'INSERT INTO menu(name, category, price, image) VALUES($1,$2,$3,$4) RETURNING *',
      [name, category, price, image]
    );
    return res.rows[0];
  },
};

module.exports = Menu;
