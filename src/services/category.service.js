const { Category } = require('../models');

const createCategory = async (name) => {
    const categories = await Category.create({ name });
    return categories;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    console.log('todas cat', [allCategories.dataValues]);
    return allCategories;
};

const gellAllById = async () => {
    const allIdsCategories = await Category.findAll({
        attributes: ['id'],
      });
      console.log('tods ids cat', allIdsCategories);
      return allIdsCategories;
};

module.exports = {
    createCategory,
    getAllCategories,
    gellAllById,
};