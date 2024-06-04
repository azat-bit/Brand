import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/product/ProductList';
import ProductDetailsComponent from './components/product/ProductAdd';
import ProductUpdateComponent from './components/product/ProductUpdate';
import ProductDeleteComponent from './components/product/ProductDelete';
import useRefreshToken from './hooks/useRefreshToken';

function App() {
  const refresh = useRefreshToken();

  useEffect(() => {
 
    refresh();
    
    const interval = setInterval(refresh, 15 * 60 * 1000); 
    return () => clearInterval(interval); 
  }, [refresh]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/details/:id" element={<ProductDetailsComponent />} />
        <Route path="/products/update/:id" element={<ProductUpdateComponent />} />
        <Route path="/products/delete/:id" element={<ProductDeleteComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
