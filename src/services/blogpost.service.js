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

const postById = async (id) => {
    const byIdPost = await BlogPost.findByPk(id, {
        include: [{
            model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
            model: Category, as: 'categories', through: { attributes: [] },
        }],
    });
    return byIdPost;
};

const updatePost = async ({ id, title, content }) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const postUpdatedId = await postById(id);
    return postUpdatedId;
};

module.exports = {
    createPost,
    allPosts,
    postById,
    updatePost,
};