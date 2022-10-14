const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();
    return users;
};

const createUser = async ({ displayName, email, password, image }) => {
    await User.create({ displayName, email, password, image });
    return createUser;
};

const getByPasswordAndEmail = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
};

const getUserById = async (id) => {
    const userById = User.findByPk(id);
    return userById;
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    await user.destroy();
};

module.exports = {
    getAll,
    getByPasswordAndEmail,
    createUser,
    getUserById,
    deleteUser,
};