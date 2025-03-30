import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "./productsSlice";
import { EditProductForm } from "./EditProductForm";
import "./products.css";

export function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
  };

  const handleCloseEditForm = () => {
    setEditingProductId(null);
  };

  return (
    <div className="products-container">
      {editingProductId && (
        <EditProductForm
          productId={editingProductId}
          onClose={handleCloseEditForm}
        />
      )}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p className={product.available ? "available" : "not-available"}>
                {product.available ? "Available" : "Not Available"}
              </p>
            </div>
            <div className="product-actions">
              <button
                className="button toggle-btn"
                onClick={() => dispatch(toggleAvailability(product.id))}
              >
                Toggle Availability
              </button>
              <button
                className="button edit-btn"
                onClick={() => handleEditClick(product.id)}
              >
                Edit
              </button>
              <button
                className="button delete-btn"
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}