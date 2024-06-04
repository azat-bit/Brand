import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 

const ProductDelete = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this product?');

    if (confirmation) {
      try {
        await axios.delete(`http://localhost/api/products/${id}`);
        console.log('Product deleted successfully');
        navigate('/products'); 
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <button onClick={handleDelete}>Delete Product</button>
      <button onClick={() => navigate('/products')}>Cancel</button>
    </div>
  );
};

export default ProductDelete;
