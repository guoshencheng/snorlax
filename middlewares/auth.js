var config = require('config');

const checkAccess = (req, res, next) => {
  if (req.headers['access-token'] && req.headers['access-token'] == config.accessToken) {
    next();
  } else {
    res.status(401)
    res.makeJson(new Error(`auth not accessed`), 401)
  }
}

const checkAdminAccesss = (req, res, next) => {
  if (req.headers['admin-token'] && req.headers['admin-token'] == config.accessToken) {
    next();
  } else {
    res.status(401)
    res.makeJson(new Error(`auth not accessed`), 401)
  }
}

module.exports = {
  checkAccess, checkAdminAccesss
};
