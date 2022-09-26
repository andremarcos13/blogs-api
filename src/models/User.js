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
    });
    return User;
}

module.exports = userModelSchema;