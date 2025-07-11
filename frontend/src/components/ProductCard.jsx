import { PenBox, Trash2 } from "lucide-react";

function ProductCard({ key, product, setShowModal, setProductId }) {

function handleDeleteProduct(id){
    setShowModal(true)
    setProductId(id)
}

  return (
      <div
        key={key}
        className="border border-gray-500/25 bg-gray-950 rounded shadow-lg"
      >
        <div>
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="overflow-hidden rounded-t h-18 w-full"
          />
          <div className="p-1">
            <h4>{product?.name}</h4>
            <p>${product?.price}</p>
            <p>{product?.description}</p>
            <div className="flex space-x-2 mt-2">
              <PenBox
                size={18}
                className="p-1 bg-blue-400 text-black rounded"
              />

                <Trash2
                  size={18}
                  className="p-1 bg-red-300 text-black rounded"
                  onClick={() => handleDeleteProduct(product?._id)}
                />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductCard;
