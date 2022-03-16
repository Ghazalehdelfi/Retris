import React from 'react';
import Login from './features/Login';
import Home from './features/Home';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import './App.css';

const PrivateRoute = () => {
  const isAuth = useSelector((state)=> state.login.isAuth)
  return (isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />)
}


function App() {
  const isAuth = useSelector((state)=> state.login.isAuth)
  return (
    <Router>
      <Routes> 
        <Route exact path ="/"  element ={<PrivateRoute />}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/home/*" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
