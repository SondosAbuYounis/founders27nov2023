const userModel = require('../models/profileModel');
const pool = require('../db');

const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  try {
    const updatedUser = await userModel.updateUser(userId, username, email, password);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    updateUser,
  
  
  };
  