module.exports = (sequelize, DataTypes) => {
  var PostCategoryMap = sequelize.define("PostCategoryMap", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'post_id'
    },
    postTagId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'post_category_id'
    }
  }, {
    tableName: 'gsc_post_category_map',
  });
  return PostCategoryMap;
};
