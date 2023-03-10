const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'insert_secret_password';

const tokenCheck = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.id = decoded.data.userId;
        // console.log('decoded', decoded);
        console.log('req id', req.id);
      next();
    } catch (e) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenCheck,
};