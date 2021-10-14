import './App.css';
import axios from 'axios'
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <LoginPage />
      <RegisterPage />
    </>
  );
}

export default App;
