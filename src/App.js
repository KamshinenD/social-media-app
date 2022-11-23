import './App.css';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import { Switch, Route } from "react-router-dom"
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/profile/:username">
            <Profile/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
