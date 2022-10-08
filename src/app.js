const express = require('express');
const User = require('./controllers/userLogin.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', User.login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
