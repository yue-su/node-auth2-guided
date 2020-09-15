const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization
  const secret = process.env.JWT_SECRET || "it is secret"

  if (token) {

    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        //token is wrong
        res.status(401).json({you: 'wrong token'})
        
      } else {
        //token is good
        req.jwt = decodedToken;
        next();
      }
    })
    
  } else {
    res.status(401).json({you: 'no token!'})
  }
};
