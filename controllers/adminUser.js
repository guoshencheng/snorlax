var db = require('../db/index');

const getAdminUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const adminUser = await db.adminUser.findById(id)
    if (adminUser) {
      res.makeJson(adminUser.toJSON());
    } else {
      next(new Error(`can't find user id ${id}`))
    }
  } catch (e) {
    next(e)
  }
}

const getAdminUserByUserName = async (req, res, next) => {
  const username = req.params.username;
  try {
    const adminUser = await db.adminUser.findOne({ username })
    if (adminUser) {
      res.makeJson(adminUser.toJSON());
    } else {
      next(new Error(`can't find user username ${username}`))
    }
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getAdminUserById, getAdminUserByUserName
};
