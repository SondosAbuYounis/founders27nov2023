// models/commentModel.js
const pool = require('../db'); // Your PostgreSQL database connection

// const addComment = async (full_name, email, message,phone_numper) => {
//   try {
//     const addCommentQuery = `
//       INSERT INTO contact_us (full_name, email, message,phone_numper)
//       VALUES ($1, $2, $3,$4)
//       RETURNING *;
//     `;
    
//     const values = [full_name, email, message,phone_numper];
//     const { rows } = await pool.query(addCommentQuery, values);
//     return rows[0];
//   } catch (error) {
//     throw error;
//   }
// };
const addComment = async (full_name, email, message, phone_number) => {
    try {
      const addCommentQuery = `
        INSERT INTO comment (full_name, email, message, phone_number)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      
      const values = [full_name , email, message, phone_number];
      const { rows } = await pool.query(addCommentQuery, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  };
  

const getAllComments = async () => {
  try {
    const getAllCommentsQuery = `
      SELECT * FROM comment;
    `;
    
    const { rows } = await pool.query(getAllCommentsQuery);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { addComment ,getAllComments };
