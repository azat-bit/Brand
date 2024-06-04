import { useEffect } from 'react';
import axios from 'axios';

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const response = await axios.post('http://localhost/api/auth/refresh-token', {
        token: localStorage.getItem('refreshToken'),
      });
      localStorage.setItem('accessToken', response.data.accessToken);
    } catch (error) {
      console.error('Failed to refresh token', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(refresh, 15 * 60 * 1000); 
    return () => clearInterval(interval); 
  }, []);

  return refresh;
};

export default useRefreshToken;
