const BlogPostService = require('../services/blogpost.service');
const { BlogPost } = require('../models');

const getAll = async (req, res) => {
    const getAllPosts = await BlogPostService.allPosts();
    if (!getAllPosts) {
        return res.status(400).json({ message: 'Algo deu errado' });
    }
    console.log('red id no controller', req.id);
    return res.status(200).json(getAllPosts);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const findById = await BlogPostService.postById(id);
    if (!findById) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(findById);
};

const blogPostUpdate = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            message: 'Some required fields are missing',
        });
    }
    const post = await BlogPostService.updatePost({ id, title, content });
    if (post.dataValues.userId !== req.id) {
        return res.status(401).json({
            message: 'Unauthorized user',
          });
    }   
    return res.status(200).json(post);
};

const blogPostDelete = async (req, res) => {
    const { id } = req.params;
    const postId = await BlogPostService.postById(id);
    // const postId = await BlogPost.findByPk(id);
    console.log('postId', postId);

    if (!postId) {
        return res.status(404).json({
            message: 'Post does not exist',
          });
    }
    if (postId.dataValues.userId !== req.id) {
        return res.status(401).json({
            message: 'Unauthorized user',
          });
    }
    await BlogPost.destroy({ where: { id } });
     return res.status(204).json();
};

const postCreate = async (req, res) => {
    const { title, content } = req.body;
    const newPost = await BlogPostService.createPost({
        title, content, userId: req.id,
    });
    console.log('create new post', newPost);
    if (!title || !content) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    return res.status(201).json(newPost);
};

module.exports = {
    getAll,
    getById,
    blogPostUpdate,
    blogPostDelete,
    postCreate,
};