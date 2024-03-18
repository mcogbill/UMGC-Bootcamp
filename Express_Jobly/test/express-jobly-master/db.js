'use strict';

/** Database setup for jobly. */

const { Client } = require('pg');
const { getDatabaseUri } = require('./config');

// const db = new Client({
//   connectionString: getDatabaseUri(),
//   // ssl: {
//   //   rejectUnauthorized: false,
//   // },
// });

const db = new Client({
  connectionString: getDatabaseUri(),
  host: 'localhost',
  port: 5433,
  database: 'jobly',
  user: 'malcog',
  password: 'secretpassword!!',
})

db.connect();

module.exports = db;