const blogPostModelSchema = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          title: {
            allowNull: false,
            type: DataTypes.STRING,        
          },
          content: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references:{
              model: 'users',
              key: 'id',
            }
          },
          published: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updated: {
            allowNull: false,
            type: DataTypes.DATE,
          },
    },
    {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,  
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    };
    
    return BlogPost;
}

module.exports = blogPostModelSchema;