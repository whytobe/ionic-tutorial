import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://reqres.in/api/',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setCredential = (email, password) => {
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
};

export const getCredential = () => ({
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
});

export const logout = (email, password) => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
};

export const login = () => {
  return Api.post('login', getCredential()).then(response => {
    if (response && response.data && response.data.token) {
      return true;
    } else {
      return false;
    }
  }).catch(response => {
    return false;
  });
};

export default Api;