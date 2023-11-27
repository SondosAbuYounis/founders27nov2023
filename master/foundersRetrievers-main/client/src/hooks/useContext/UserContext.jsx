import { createContext, useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

  useEffect(() => {
    // Check for stored token in cookies on page load
    const storedToken = cookies.userToken;
    if (storedToken) {
      setUser(storedToken);
    }
  }, [cookies]);

  const login = (token) => {
    // Set user data in context
    setUser(token);
    // Set token in cookies
    setCookie('userToken', token); 
  };

  const logout = async () => {
    // Clear user data from context
    setUser(null);
    // Clear token from cookies
    removeCookie('userToken');
    // log out on the server using Axios
    try {
      await axios.post('/api/logout');
    } catch (error) {
      console.error('Error during logout API call:', error);
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
