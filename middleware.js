const jwt = require('jsonwebtoken');
const response = require('./utility/responses');
const Models = require('./models/index');
let verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    jwt.verify(token, "worldisfullofdevelopers", (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: response.responseMessages.INVALID_TOKEN
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: response.responseMessages.TOKEN_MISSING
    });
  }
};
module.exports = {
  verifyToken: verifyToken
}