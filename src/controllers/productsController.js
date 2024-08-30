import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await productService.getProductsById(id);

  if (!product) res.status(404).send("Product not found");

  res.json(product);
};

const addProduct = async (req, res) => {
  const data = req.body;
  try {
    const createdProduct = await productService.createProduct(data);

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(422).send(error.message);
  }
};

export { getAllProducts, getProductById, addProduct };
