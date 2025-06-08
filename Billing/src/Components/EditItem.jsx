import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";

function EditItem() {
  const { state } = useLocation();

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    serial_no: state?.product?.serial_no || "",
    product_id: state?.product?.product_id || "",
    product_name: state?.product?.product_name || "",
    product_quantity: state?.product?.product_quantity || "",
    product_price: state?.product?.product_price || "",
    total_price: state?.product?.total_price || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newTotalPrice = product.total_price;

    if (name === "product_quantity" || name === "product_price") {
      const quantity =
        parseInt(
          name === "product_quantity" ? value : product.product_quantity
        ) || 0;
      const price =
        parseInt(name === "product_price" ? value : product.product_price) || 0;
      newTotalPrice = quantity * price;
    }

    setProduct({
      ...product,
      [name]: value,
      total_price: newTotalPrice
    });
  };

  const updateData = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:8090/api/resources/update/${id}`,
      product
    );

    alert("update successful");

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={updateData}>
        <div>
          <label>
            S. No:
            <input
              type="text"
              name="serial_no"
              value={product.serial_no}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Item Id:
            <input
              type="text"
              name="product_id"
              value={product.product_id}
              onChange={handleChange}
              readOnly
            />
          </label>
        </div>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              name="product_name"
              value={product.product_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="text"
              name="product_quantity"
              value={product.product_quantity}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="text"
              name="product_price"
              value={product.product_price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total:
            <input
              type="text"
              name="total_price"
              value={product.total_price}
              onChange={handleChange}
              readOnly
            />
          </label>
          <div>
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
