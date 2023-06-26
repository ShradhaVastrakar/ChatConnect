const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;
 
   
    if (!token) {
      console.log("access denied");
      res.send("Please login first");
    } else {
      if (token == red_token) {
        res.send("please login again");
      } else {
        const user = jwt.verify(token, process.env.JWT);
        const { userId } = user;
  
        req.user = userId;
        next();
      }
    }
  };
  
  module.exports = {
    authenticate,
  };
  