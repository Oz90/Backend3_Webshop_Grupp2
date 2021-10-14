import './App.css';
import axios from 'axios'
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { Route, Switch } from 'react-router-dom'

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </>
  );
}

export default App;
