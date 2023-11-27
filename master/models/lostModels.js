const pool = require('../db');

const addItem = async (title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename,type, imageurl) => {
  try {
    const addItemQuery = `
      INSERT INTO lostitems (title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename,type, imageurl)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12)
      RETURNING *;
    `;
    
    const values = [title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename,type, imageurl];
    const { rows } = await pool.query(addItemQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

async function getAllProducts() {
  try {
    let result = await pool.query('SELECT title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename, type,imageurl FROM lostitems WHERE is_deleted = false');
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getAllProducts,
  addItem
  // getProductsByCategory,
  // getProductById,
};
