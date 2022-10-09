const CategoryService = require('../services/category.service');

const create = async (req, res) => {
        const { name } = req.body;
        if (!name) {
 return res.status(400).json({
            message: '"name" is required',
          }); 
}
    const categories = await CategoryService.createCategory(name);

    return res.status(201).json(categories);
};

const getAll = async (req, res) => {
    try {
        const allCategories = await CategoryService.getAllCategories();
        return res.status(200).json(allCategories);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    create,
    getAll,
};