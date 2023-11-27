const pool = require('../db');
const addMessage = async (name, email, message) => {
    try {
      const addmessageQuery = `
        INSERT INTO contacts (name, email, message)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;
      
      const values = [name , email, message];
      const { rows } = await pool.query(addmessageQuery, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  };
  module.exports = { addMessage  };