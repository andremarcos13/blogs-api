const express = require('express');
const User = require('./controllers/login.controller');
const Users = require('./controllers/user.controller');
const validateToken = require('./auth/validateJWT');
const Category = require('./controllers/category.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', User.login);
app.post('/user', Users.create);
app.get('/user', validateToken.tokenCheck, Users.getAllUsers);
app.get('/user/:id', validateToken.tokenCheck, Users.getId);
app.post('/categories', validateToken.tokenCheck, Category.create);
app.get('/categories', validateToken.tokenCheck, Category.getAll);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
