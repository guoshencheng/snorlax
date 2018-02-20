var db = require('../../db/index');

const all = async (req, res, next) => {
  try {
    const postCategories = await db.PostCategory.findAll();
    res.makeJson(postCategories.map(doc => doc.toJSON()));
  } catch (e) {
    next(e);
  }
}

const findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const postCategory = await db.PostCategory.findById(id);
    res.makeJson(postCategory.toJSON());
  } catch (e) {
    next(e)
  }
}

module.exports = {
  all, findById
};
