import axios from 'axios';

// Middleware = Allows HTTP to set cookies
axios.defaults.withCredentials = true;

const url = axios.create({ baseURL: 'http://localhost:5000/' });

export const loginUser = (payload) => url.post('/users/login', payload);
export const registerUser = (payload) => url.post('/users/register', payload);
export const logoutUser = () => url.get('users/logout');
export const getAllProducts = () => url.get('/products');
export const getSingleProduct = (id) => url.get(`/products/${id}`);
export const addProduct = (payload) => url.post(`/products/add`, payload);
export const editSingleProduct = (id, payload) => url.post(`/products/${id}`, payload);
export const deleteSingleProduct = (id) => url.delete(`/admin/${id}`);
export const getAllOrders = () => url.get('/orders');
export const toggleOrderIsShipped = (id) => url.post(`/orders/${id}`);
export const getUser = () => url.get('/users');
export const getUserOrders = () => url.get('/orders/user');
export const getSingleOrder = (id) => url.get(`/orders/${id}`);
export const editUser = (payload) => url.post('/users/update', payload);

export const getCart = () => url.get('cart');

export const removeCartItem = (id) => url.post(`cart/delete/${id}`);

export const updateCart = (id, payload) => url.post(`cart/add/${id}`, payload);

// const fetches = {
//   loginUser,
//   logoutUser,
//   registerUser,
// };

// export default fetches;
