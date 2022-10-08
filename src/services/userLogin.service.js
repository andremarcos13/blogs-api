const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();
    return users;
};

const getByPasswordAndEmail = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    console.log('camada service, getBy', user);
    return user;
};

module.exports = {
    getAll,
    getByPasswordAndEmail,
};