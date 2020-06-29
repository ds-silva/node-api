const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(rep, res) {
        const products = await Product.find();
        return resp.json(products)
    },
}