import React, { useState } from 'react';
import axios from 'axios';

const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/api/products', product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      console.log(response.data); // Handle successful creation
      // Optionally, clear the form or redirect to the product list page
    } catch (error) {
      console.error(error); // Handle API errors
    }
  };

  return (
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

      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductCreate;
