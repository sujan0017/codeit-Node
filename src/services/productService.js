import Product from "../models/Product.js";

const getAllProducts = async () => {
  return await Product.find();
};
const getProductsById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await Product.create(data);

  // console.log("Product added");
};

export default { createProduct, getAllProducts, getProductsById };
