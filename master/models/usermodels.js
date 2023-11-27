// userModel.js

const db = require('../db');

const findByEmail = async (email) => {
  const result = await db.query('SELECT * FROM Users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async (username, email, password,phonenumber,city,country) => {
  const result = await db.query(
    'INSERT INTO Users(username, email, password,phonenumber,city,country) VALUES($1, $2, $3,$4,$5,$6) RETURNING *',
    [username, email, password,phonenumber,city,country]
  );
  return result.rows[0];
};

const findByEmailAndPassword = async (email, password) => {
  const result = await db.query('SELECT * FROM Users WHERE email = $1 AND password = $2', [
    email,
    password,
  ]);
  return result.rows[0];
};

module.exports = {
  findByEmail,
  createUser,
  findByEmailAndPassword,
};
