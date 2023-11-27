const db =require ('../db');
const foundModel = require('../models/foundModels');

const additem = async (req, res) => {
    const { title,description, category, country,city, date_found,contact_name,contact_email,contact_phone,imagename ,imageurl} = req.body;
  
    try {
      const found = await foundModel.additem(title,description, category,country,city,date_found,contact_name,contact_email,contact_phone,imagename,imageurl);
      console.log(found)

      res.status(200).json({ message: 'item added successfully', data: found });
    } catch (error) {
      console.error('Error adding item: ', error);
      res.status(500).json({ error: 'Error adding item' });
    }
  };
async function getAllProducts(req, res) {
    try {
        const products = await foundModel.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in getting the home');
    }
}

// const db = require('../db');
// const foundModel = require('../models/foundModels');

// const additem = async (req, res) => {
//   const {
//     title,
//     description,
//     category,
//     country,
//     city,
//     date_found,
//     contact_name,
//     contact_email,
//     contact_phone,
//     imagename,
//     imageurl,
//     status // Assuming status is included in the request body
//   } = req.body;

//   try {
//     const found = await foundModel.addItem(title, description, category, country, city, date_found, contact_name, contact_email, contact_phone, imagename, imageurl, status);
//     console.log(found);

//     res.status(200).json({ message: 'item added successfully', data: found });
//   } catch (error) {
//     console.error('Error adding item: ', error);
//     res.status(500).json({ error: 'Error adding item' });
//   }
// };

// async function getAllProducts(req, res) {
//   try {
//     const products = await foundModel.getAllProducts();
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error in getting the home');
//   }
// }

module.exports = {
    getAllProducts,
    additem
};