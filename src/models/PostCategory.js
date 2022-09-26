
const postCategoryModelSchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: "blog_posts",
              key: "id",
            }
          },
          categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: "categories",
              key: "id",
            }
          }
    },
    {
        tableName: 'post_categories',
        underscored: true,
    });
    return PostCategory;
}

module.exports = postCategoryModelSchema;