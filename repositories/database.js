const { Pool } = require('pg');
const { pgUser, pgDatabase, pgPassword } = require('../constant');

const client = new Pool({
  user: pgUser,
  host: 'localhost',
  database: pgDatabase,
  password: pgPassword,
  port: 5432,
});

module.exports = {client};
