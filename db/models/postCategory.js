module.exports = (sequelize, DataTypes) => {
  var PostCategory = sequelize.define("PostCategory", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'gsc_post_category',
  });
  return PostCategory;
};
