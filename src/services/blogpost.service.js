const { BlogPost, User, Category } = require('../models');

const createPost = async (title, content, userId) => {
    const post = BlogPost.create({ 
        title, 
        content, 
        userId, 
        updated: Date.now(), 
        published: Date.now() }); 
    return post;
};

const allPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [{
            model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        { 
            model: Category, as: 'categories', through: { attributes: [] },
        }],
    });
    // console.log(posts);
    return posts;
};

module.exports = {
    createPost,
    allPosts,
};