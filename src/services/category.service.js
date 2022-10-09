const { Category } = require('../models');

const createCategory = async (name) => {
    const categories = await Category.create({ name });
    return categories;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

module.exports = {
    createCategory,
    getAllCategories,
};