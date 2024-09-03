import Product from "../models/Product.js";

const getAllProducts = async (query) => {
  const limit = query.limit;
  const sort = query?.sort ? JSON.parse(query.sort) : {};
  const filters = query?.filters ? JSON.parse(query.filters) : {};

  return await Product.find(filters).limit(limit).sort(sort);
};
const getProductsById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data);
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
};
