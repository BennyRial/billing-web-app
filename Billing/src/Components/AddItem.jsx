import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddItem() {
  const navigate = useNavigate();
  const [productData, setproductData] = useState({
    serial_no: "",
    product_id: "",
    product_name: "",
    product_quantity: "",
    product_price: "",
    total_price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newTotalPrice = productData.total_price;

    if (name === "product_quantity" || name === "product_price") {
      const quantity =
        parseInt(
          name === "product_quantity" ? value : productData.product_quantity
        ) || 0;
      const price =
        parseInt(
          name === "product_price" ? value : productData.product_price
        ) || 0;
      newTotalPrice = quantity * price;
    }

    setproductData({
      ...productData,
      [name]: value,
      total_price: newTotalPrice
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8090/api/resources/create",
      productData
    );
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={submitData}>
        <div>
          <label>
            S. No:
            <input
              type="text"
              name="serial_no"
              value={productData.serial_no}
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
              value={productData.product_id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              name="product_name"
              value={productData.product_name}
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
              value={productData.product_quantity}
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
              value={productData.product_price}
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
              value={productData.total_price}
              onChange={handleChange}
              readOnly
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
