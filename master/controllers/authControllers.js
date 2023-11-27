// authController.js
const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

async function handleProtectedRoute(req, res) {
  try {
    const userEmail = req.user && req.user.emails && req.user.emails[0] && req.user.emails[0].value;
    const userid = req.user.id;
    const displayName = req.user.displayName;

    const sendemail = await authModel.checkEmail(userEmail);
    
    if (sendemail.rows.length > 0) {
      const payload = {
        username: displayName,
        email: userEmail,
        id_user: userid,
      };

      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

      res.status(200).json({
        message: "User added successfully",
        token: token,
      });
      console.log(token);

      
    } else {
      const user = await authModel.addUser(displayName, userEmail);

      const payload = {
        displayName,
        email: userEmail,
        id_user: userid,
      };

      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

      res.status(200).json({
        message: "User added successfully",
        token: token,
        
      });
      console.log(token);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  isLoggedIn,
  handleProtectedRoute,
};
