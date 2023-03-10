const express = require('express');
const User = require('./controllers/login.controller');
const Users = require('./controllers/user.controller');
const validateToken = require('./auth/validateJWT');
const Category = require('./controllers/category.controller');
const BlogPost = require('./controllers/blogpost.controller');
// ...

const app = express();

app.use(express.json());

app.post('/login', User.login);
app.post('/user', Users.create);
app.get('/user', validateToken.tokenCheck, Users.getAllUsers);
app.get('/user/:id', validateToken.tokenCheck, Users.getId);
app.post('/categories', validateToken.tokenCheck, Category.create);
app.get('/categories', validateToken.tokenCheck, Category.getAll);
app.post('/post', validateToken.tokenCheck, BlogPost.postCreate);
app.get('/post', validateToken.tokenCheck, BlogPost.getAll);
app.get('/post/:id', validateToken.tokenCheck, BlogPost.getById);
app.put('/post/:id', validateToken.tokenCheck, BlogPost.blogPostUpdate);
app.delete('/post/:id', validateToken.tokenCheck, BlogPost.blogPostDelete);
app.delete('/user/me', validateToken.tokenCheck, Users.deleteMe);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
