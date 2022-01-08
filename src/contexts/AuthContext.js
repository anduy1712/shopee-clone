import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserByToken } from '../store/reducers/usersSlice';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const loadUser = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };
  const authValue = {};
  useEffect(() => {
    loadUser();
    dispatch(fetchUserByToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
