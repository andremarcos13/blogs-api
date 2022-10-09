const jwt = require('jsonwebtoken');
const UserService = require('../services/userLogin.service');

const secret = process.env.JWT_SECRET || 'insert_secret_password';

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
        const users = await UserService.getByPasswordAndEmail(email, password);
        // console.log('users controller', [users]);
        if (!users) {
            return res.status(400).json({
                message: 'Invalid fields',
              });
        }
        const jwtconfig = {
            expiresIn: '1d',
            algorithm: 'HS256',
        };

        const token = jwt.sign({ data: { userId: users.id } }, secret, jwtconfig);

        return res.status(200).json({ token });
};

module.exports = {
    login,
};