import express from "express";

const productRouter = express.Router();

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product.controller.js";

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);

productRouter.put("/:id", updateProductById);

productRouter.delete("/:id", deleteProduct);

export default productRouter;