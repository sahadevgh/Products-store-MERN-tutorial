import { Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ConfirmModal from "../components/ConfirmModal";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);

  // Function that fetches all products from the database
  async function getAllProducts() {
    // Use the javaScript fetch method
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is ok
    if (response.ok) {
      const data = await response.json();
      setProducts(data.data);
    } else {
      console.error("Failed to fetch products");
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="h-screen m-0 overflow-auto">
      <div className="w-[90%] mx-auto">
        <h2 className="text-center flex justify-center items-center">
          Current Products
          <Rocket size={18} />
        </h2>

        {/**Grid container for the products */}
        <div className="border-green-500 grid grid-cols-3 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setShowModal={setShowModal}
                setProductId={setProductId}
              />
            ))}
        </div>
      </div>
      {showModal && (
        <ConfirmModal setShowModal={setShowModal} productId={productId} />
      )}
    </div>
  );
}

export default HomePage;
