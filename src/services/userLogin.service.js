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
    console.log('camada service, getBy', user);
    return user;
};

module.exports = {
    getAll,
    getByPasswordAndEmail,
    createUser,
};