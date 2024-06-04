import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductUpdate = ({ match }) => {
  const productId = match.params.id; //ürün ıd göre çekme
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
        
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost/api/products/${productId}`, product);
      console.log(response.data); 
     
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
