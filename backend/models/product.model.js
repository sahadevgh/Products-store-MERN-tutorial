// Import mongoose
import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Ensure price is not negative
        default: 0, // Default price if not provided
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0, // Ensure stock is not negative
        default: 0, // Default stock if not provided
    }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the product model
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;