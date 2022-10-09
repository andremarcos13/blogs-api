
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
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            through: PostCategory,
            foreignKey: "postId",
            otherKey: "categoryId",
            as: "categories",
        });
        models.Category.belongsToMany(models.BlogPost, {
            through: PostCategory,
            foreignKey: "categoryId",
            otherKey: "postId",
            as: "BlogPosts",
        });
    };

    return PostCategory;
}

module.exports = postCategoryModelSchema;