const contactusModel = require('../models/contactusModel');

const addMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const comment = await contactusModel.addMessage(name, email, message);
    res.status(200).json({ message: 'Comment added successfully', data: comment });
  } catch (error) {
    console.error('Error adding comment: ', error);
    res.status(500).json({ error: 'Error adding comment' });
  }
};

module.exports = { addMessage,
     };