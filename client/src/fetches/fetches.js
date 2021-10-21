import axios from 'axios';

// Middleware = Allows HTTP to set cookies
axios.defaults.withCredentials = true;

const url = axios.create({ baseURL: 'http://localhost:5000/' });

export const loginUser = (payload) => url.post('/users/login', payload);
export const registerUser = (payload) => url.post('/users/register', payload);
export const logoutUser = () => url.get('users/logout');

export const getCart = () => url.get('cart');

export const getSingleProduct = (id) => url.get(`products/${id}`);

// const fetches = {
//   loginUser,
//   logoutUser,
//   registerUser,
// };

// export default fetches;
