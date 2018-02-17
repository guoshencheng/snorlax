module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("adminUser", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    leverl: {
      type: DataTypes.INTEGER(11),
      defaultValue: 0,
    },
    username: {
      type: DataTypes.STRING(200),
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING(200),
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING(200),
      defaultValue: "",
    }
  }, {
    tableName: 'gsc_admin_user',
  });
  return Post;
};
