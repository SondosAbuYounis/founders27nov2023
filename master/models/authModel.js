// authModel.js
const db = require("../db");

async function checkEmail(userEmail) {
  const checkEmailQuery = 'SELECT * FROM users WHERE email = $1';
  return await db.query(checkEmailQuery, [userEmail]);
}

async function addUser(displayName, userEmail) {
  const values = [displayName, userEmail];
  const query = `INSERT into users (username, email) values ($1, $2) RETURNING id_user`;
  return await db.query(query, values);
}

module.exports = {
  checkEmail,
  addUser,
};
