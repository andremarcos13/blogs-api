const BlogPostService = require('../services/blogpost.service');
// const CategoryService = require('../services/category.service');

const getAll = async (req, res) => {
    const getAllPosts = await BlogPostService.allPosts();
    if (!getAllPosts) {
        return res.status(400).json({ message: 'Algo deu errado' });
    }
    return res.status(200).json(getAllPosts);
};

// const create = async (req, res) => {
//     const { title, content, categoryId } = req.body;
//     if (!title || !content || categoryId.length) {
//         return res.status(400).json({
//             message: 'Some required fields are missing',
//           });
//     }

//     const checkCategoryId = await CategoryService.getAllCategories();
//     const allCategoriesChecked = await 
    
//     const userId = req.id;
//     const post = await BlogPostService.createPost({ title, content, userId, categoryId });
//     return res.status(201).json(post);
// };

module.exports = {
    getAll,
};