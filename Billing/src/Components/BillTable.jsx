import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BillTable() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/resources/readlist")
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  const handleClick = () => {
    navigate("/add");
  };

  const handleDelete = async () => {
    await axios.delete("http://localhost:8090/api/resources/deleteall");
    window.location.reload();
  };
  const delItem = async (id) => {
    await axios.delete(`http://localhost:8090/api/resources/delete/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.serial_no}</td>
              <td>{product.product_name}</td>
              <td>{product.product_quantity}</td>
              <td>{product.product_price}</td>
              <td>{product.total_price}</td>
              <td>
                <Link to={`/edit/${product.product_id}`} state={{ product }}>
                  ✏️
                </Link>
              </td>
              <td>
                <Link onClick={() => delItem(`${product.product_id}`)}>🗑️</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClick}>New Item</button>
      <button onClick={handleDelete}>Clear Table</button>
    </div>
  );
}

export default BillTable;
