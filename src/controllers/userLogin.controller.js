const UserService = require('../services/userLogin.service');

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    // try {
        const users = await UserService.getByPasswordAndEmail(email, password);
        if (!users) {
            return res.status(400).json({
                message: 'Invalid fields',
              });
        }
        return res.status(200).json(users);
    // } catch (e) {
    //     console.log(e.message);
    //     res.status(500).json({ message: 'error' });
    // }
};

module.exports = {
    login,
};