import connectDB from "../config/db.js";
import ProductModel from "../models/product.model.js";

// Fetch all products from the database endpoint
export const getAllProducts = async (req, res) => {
    try{
        await connectDB(); // Connect to the database
        // Fetch all products from the database
        const products = await ProductModel.find({});

        res.status(200).json({
          success: true,
          data: products
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};

// fectch a product buy id endpoint
 export const getProductById = async (req, res) => {
    const { id } = req.params;

    try{
        await connectDB(); // Connect to the database
         
        // Fetch all products from the database
        const product = await ProductModel.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};

// Create a new product endpoint
export const createProduct = async (req, res) => {
//   const newProduct = req.body;
const { name, price, description, imageUrl, stock } = req.body;

console.log("Received product data:", req.body);

  try {
    await connectDB(); // Connect to the database

    // Validate the product data
    if (!name || !price || !description || !imageUrl || stock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new product object
    const product = new ProductModel({
        name,
        price,
        description,
        imageUrl,
        stock,
    });

    // Save the product to the database
    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

// Update a product by ID endpoint
export const updateProductById = async (req, res) => {
  const { id } = req.params;

    // Destructure the product data from the request body
  const { name, price, description, imageUrl, stock } = req.body;

    try {
        await connectDB(); // Connect to the database
    
        // Validate the product data
        if (!name || !price || !description || !imageUrl || stock === undefined) {
        return res.status(400).json({ message: "All fields are required" });
        }
    
        // Find the product by ID and update it
        const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        { name, price, description, imageUrl, stock },
        { new: true } // Return the updated document
        );
    
        if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

// Delete a product by ID endpoint
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await connectDB(); // Connect to the database

    // Find the product by ID and delete it
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};