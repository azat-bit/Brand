import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import "./login.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // Durum ekle

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost/api/auth/loginbyusername', {
        username,
        password,
      });

     
      console.log("dfscsf");
      
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);

    
      const role = response.data.user_role;
      if (role === 'admin') {
        window.location.href = '/products';
      } else {
        window.location.href = '/products';
      }
    } catch (error) {
      setError(error.message);
      window.location.href = '/products';
    } finally {
      setIsLoading(false);
    }
  };

  // Yeni fonksiyon: Kayıt olma butonuna tıklanınca Register bileşenini gösterir
  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  // Kayıt ol butonuna tıklanırsa Register bileşeni gösterilir
  if (showRegister) {
    return <Register />;
  }

  return (
    <div className="login-container">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>
        {/* Kayıt ol butonu */}
       
        <button type="button" onClick={handleRegisterClick}>
          Kayıt Ol
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
