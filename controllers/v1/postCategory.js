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

const create = async (req, res, next) => {
  const body = req.body;
  const attributes = Object.keys(db.PostCategory.attributes);
  const params = {};
  Object.keys(params).forEach(key => {
    if (body[key]) {
      params[key] = body[key]
    }
  })
  try {
    const postCategory = await db.PostCategory.create(params);
    res.makeJson(postCategory.toJSON());
  } catch (e) {
    next(e);
  }
}

const update = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const attributes = Object.keys(db.PostCategory.attributes);
  try {
    var postCategory = await db.PostCategory.findById(id);
    if (!postCategory) {
      throw new Error(`post category id ${id} not found`);
      return;
    }
    Object.keys(params).forEach(key => {
      if (body[key]) {
        postCategory[key] = body[key]
      }
    })
    postCategory = await postCategory.save();
    res.makeJson(postCategory.toJSON())
  } catch (e) {
    next(e)
  }
}

module.exports = {
  all, findById, create, update
};
