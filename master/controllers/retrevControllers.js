const db = require('../db');
const lostModel = require('../models/retreve');
async function getAllProductss(req, res) {
    try {
      const products = await lostModel.getAllProductss();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting the home');
    }
  }
  async function getAllProducts(req, res) {
    try {
      const products = await lostModel.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting the home');
    }
  }
  
  module.exports = {
      getAllProductss,
      getAllProducts
     
  };