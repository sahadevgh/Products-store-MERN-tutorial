import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    imageUrl: "",
    description: "",
  });

  const submitProduct = async (e) => {
    e.preventDefault();

    const serializedData = {
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: Number(newProduct.stock),
      imageUrl: newProduct.imageUrl,
      description: newProduct.description,
    };

    try {
      // Create the fetch method
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serializedData),
      });

      if (response.ok) {
        const data = await response.json(); 
        console.log("Product created", data.product)
        navigate("/")
      }
    } catch (error) {
      console.log("Product submission error", error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-center font-bold">Create a new product</h2>

        <form
          onSubmit={submitProduct}
          className="dark:bg-gray-950 p-4 rounded border border-gray-500/25 shadow-lg"
        >
          <div className="w-full mb-2">
            <input
              type="text"
              id="name"
              placeholder="Enter product name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="border border-gray-500/25 w-full px-4 py-2 rounded"
            />
          </div>

          <div className="w-full mb-2">
            <input
              type="float"
              id="price"
              min={0}
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              placeholder="Enter product price"
              className="border border-gray-500/25 w-full px-4 py-2 rounded"
            />
          </div>

          <div className="w-full mb-2">
            <input
              type="url"
              id="imageUrl"
              value={newProduct.imageUrl}
              onChange={(e) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
              placeholder="Enter product image url"
              className="border border-gray-500/25 w-full px-4 py-2 rounded"
            />
          </div>

          <div className="w-full mb-2">
            <input
              type="number"
              id="stock"
              min={0}
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              placeholder="Enter product stock"
              className="border border-gray-500/25 w-full px-4 py-2 rounded"
            />
          </div>

          <textarea
            className="w-full border border-gray-500/25 outline-none px-4 py-2 mb-2"
            rows={5}
            placeholder="Enter product description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 rounded shadow-lg bg-green-600 font-bold hover:bg-green-800 cursor-pointer"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
