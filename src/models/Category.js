const categoryModelSchema = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING,
          },
    },
    {
      tableName: 'categories',
      timestamps: false,
    });
    return Category;
}

module.exports = categoryModelSchema;