import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.query);

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productService.getProductsById(id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addProduct = async (req, res) => {
  const data = req.body;

  if (!data.name) return res.status(422).send("Product name is required");
  if (!data.price) return res.status(422).send("Product price is required");

  try {
    const createdProduct = await productService.createProduct(data);

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const product = await productService.getProductsById(id);

    if (!product) return res.status(404).send("Product not found");

    const updatedProduct = await productService.updateProduct(id, data);

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productService.getProductsById(id);

    if (!product) return res.status(404).send("Product not found");

    await productService.deleteProduct(id);

    res.send(`Product with id ${id} is deleted successfully`);
  } catch (error) {
    req.status(500).send(error.message);
  }
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
