 const userModelSchema = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         displayName: {
           allowNull: false,
           type: DataTypes.STRING,
         },
         email: {
           allowNull: false,
           type: DataTypes.STRING,
           unique: true,
         },
         password: {
           allowNull: false,
           type: DataTypes.STRING,
         },
         image: {
           allowNull: false,
           type: DataTypes.STRING,
         },
    },
    {
        tableName: 'users',
        underscored: true,
        timestamps: false,
        defaultScope: {
          attributes: { exclude: ['password'] }, // https://trybecourse.slack.com/archives/C0320DL79QS/p1664311492331089
        },
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            foreignKey: "userId",
            as: "users",
        });
    }
    
    return User;
}

module.exports = userModelSchema;