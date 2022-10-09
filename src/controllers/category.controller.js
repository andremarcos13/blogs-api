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

module.exports = {
    create,
};