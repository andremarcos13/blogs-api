const jwt = require('jsonwebtoken');
const UserService = require('../services/userLogin.service');
const { userSchema } = require('../helpers/joi');

const create = async (req, res) => {
    try {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({ displayName, email, password, image });
    if (error) {
        res.status(400).json({ message: error.message });
        return;
    }
    const user = await UserService.createUser({ displayName, email, password, image });
    const token = jwt.sign({ userId: user.id, userEmail: user.email }, process.env.JWT_SECRET);
    return res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: 'User already registered' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserService.getAll();
        console.log('all', allUsers);
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getId = async (req, res) => {
    try {
        const { id } = req.params;
        const idUser = await UserService.getUserById(id);
        if (!idUser) { return res.status(404).json({ message: 'User does not exist' }); }
        
        return res.status(200).json(idUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    create,
    getAllUsers,
    getId,
};