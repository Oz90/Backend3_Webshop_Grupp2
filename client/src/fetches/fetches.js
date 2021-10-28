import axios from 'axios';

// Middleware = Allows HTTP to set cookies
axios.defaults.withCredentials = true;

axios.defaults.baseURL = 'https://stark-headland-25678.herokuapp.com/' || 'http://localhost:5000/';

// const ourURLs = process.env.API_KEY || 'http://localhost:5000/'
// console.log(ourURLs);


// const url = axios.create({
//     baseURL: ourURLs
// });

export const loginUser = (payload) => axios.post('/users/login', payload);
export const registerUser = (payload) => axios.post('/users/register', payload);
export const logoutUser = () => axios.get('users/logout');
export const getAllProducts = () => axios.get('/products');
export const getSingleProduct = (id) => axios.get(`/products/${id}`);
export const addProduct = (payload) => axios.post(`/products/add`, payload);
export const editSingleProduct = (id, payload) => axios.post(`/products/${id}`, payload);
export const deleteSingleProduct = (id) => axios.delete(`/admin/${id}`);
export const getAllOrders = () => axios.get('/orders');
export const toggleOrderIsShipped = (id) => axios.post(`/orders/${id}`);
export const getUser = () => axios.get('/users');
export const getUserOrders = () => axios.get('/orders/user');
export const getSingleOrder = (id) => axios.get(`/orders/${id}`);
export const editUser = (payload) => axios.post('/users/update', payload);

export const getCart = () => axios.get('cart');

export const removeCartItem = (id) => axios.post(`cart/delete/${id}`);

export const updateCart = (id, payload) => axios.post(`cart/add/${id}`, payload);

export const placeOrder = (payload) => axios.post('orders', payload);

export const deleteCart = () => axios.post('cart/delete');

// const fetches = {
//   loginUser,
//   logoutUser,
//   registerUser,
// };

// export default fetches;
