var db = require('../../db/index');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const allOnline =  async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        status: 1
      },
      order: [["created_at", "DESC"]]
    });
    res.makeJson(posts.map(p => p.toJSON()));
  } catch (e) {
    next(e)
  }
}

const findById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await db.Post.findById(id);
    res.makeJson(post.toJSON());
  } catch (e) {
    next(e)
  }
}

const all = async (req, res, next) => {
  try {
   const posts = await db.Post.all({ order: [["id", "asc"]]})
   res.makeJson(posts.map(post => post.toJSON()))
  } catch (e) {
    next(e)
  }
}

const createEmpty = async (req, res, next) => {
  try {
    const post = await db.Post.create();
    res.makeJson(post.toJSON());
  } catch (e) {
    next(e)
  }
}

const changeStatus = async (req, res, next) => {
  const id = req.params.id;
  const status = req.params.status;
  try {
    var post = await db.Post.findById(id);
    if (!post) {
      throw new Error(`update post id: ${id} failed`)
      return;
    }
    post.status = status;
    post = await post.save();
    res.makeJson(post.toJSON());
  } catch (e) {
    next(e)
  }
}

const update = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const { markdown, html, title, short, status } = body;
  const attributes = Object.keys(db.Post.attributes);
  try {
    let post = await db.Post.findById(id)
    attributes.forEach((key) => {
      if (body[key]) {
        post[key] = body[key];
      }
    })
    post = await post.save();
    res.makeJson(post.toJSON());
  } catch (e) {
    next(e)
  }
}

const findByCategory = async (req, res, next) => {
  const id = req.params.id;
  try {
    var postCategory = await db.PostCategory.findById(id);
    var postCategoryMaps = await db.PostCategoryMap.findAll({ where: { postCategoryId: id } });
    var postIds = postCategoryMaps.map(postCategoryMap => postCategoryMap.postId);
    var posts  = await db.Post.findAll({
      where: {
        id: {
          [Op.in]: [postIds]
        }
      },
      attributes: ['id', 'short', 'title', 'status']
    })
    const result = {
      postCategory, posts: posts.map(post => post.toJSON())
    }
    res.makeJson(result);
  } catch (e) {
    next(e);
  }
}

const linkPostAndCategory = async (req, res, next) => {
  const id = req.params.id;
  const categoryId = req.params.categoryId;
  try {
    var post = await db.Post.findById(id);
    if (!post) {
      throw new Error(`post id ${id} not found`)
      return;
    }
    var postCategory = await db.PostCategory.findById(categoryId);
    if (!postCategory) {
      throw new Error(`post category id ${categoryId} not found`)
      return;
    }
    var postCategoryMap = await db.PostCategoryMap.findOne({ postId: id, postCategoryId: categoryId });
    postCategoryMap = postCategoryMap || await db.PostCategoryMap.create({ postId: id, postCategoryId: categoryId })
    res.makeJson(postCategoryMap);
  } catch (e) {
    next(e)
  }
}

module.exports = {
  findByCategory, all, createEmpty, update, findById, changeStatus, allOnline, linkPostAndCategory
};
