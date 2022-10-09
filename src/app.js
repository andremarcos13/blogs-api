const express = require('express');
const User = require('./controllers/login.controller');
const Users = require('./controllers/user.controller');
const validateToken = require('./auth/validateJWT');
// ...

const app = express();

app.use(express.json());

app.post('/login', User.login);
app.post('/user', Users.create);
app.get('/user', validateToken.tokenCheck, Users.getAllUsers);
app.get('/user/:id', validateToken.tokenCheck, Users.getId);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
