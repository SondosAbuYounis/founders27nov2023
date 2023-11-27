const pool = require('../db');
async function getAllProducts() {
    try {
      let result = await pool.query('SELECT title, description, category, country, city, date_found, contact_name, contact_email, contact_phone, imagename, imageurl FROM founditems WHERE is_deleted = true');
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async function getAllProductss() {
    try {
      let result = await pool.query('SELECT title, description, category, country, city, date_lost, contact_name, contact_email, contact_phone, imagename, imageurl FROM lostitems WHERE is_deleted = true');
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
 

  
module.exports = {
    getAllProducts,
    getAllProductss
};