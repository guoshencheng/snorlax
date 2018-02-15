var config = require('config');

const checkAccess = (req, res, next) => {
  if (req.headers.access_token && req.headers.access_token == config.accessToken) {
    next();
  } else {
    res.status(401)
    res.makeJson(new Error(`auth not accessed`), 401)
  }
}

module.exports = {
  checkAccess
};
