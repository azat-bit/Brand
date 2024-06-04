import React, { useState } from 'react';
import axios from 'axios';
import './register.css'; // CSS dosyasını import et

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/api/auth/signup", {
        username,
        password,
        role
      });
      console.log(response.data); // Burada başarılı kayıt mesajı veya diğer bilgileri işleyebilirsiniz
    } catch (error) {
      setError(error.response.data.message); // API'den dönen hata mesajını ayıklama
    }
  };

  return (
    <div className="register-container"> {/* className ekleyin */}
      <h2>Register</h2>
      {error && <p className="error">{error}</p>} {/* className ekleyin */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
