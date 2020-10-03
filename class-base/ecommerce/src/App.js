import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import Login from './components/Login'
import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoute from './components/Protected'

function App() {
  return (
    <>
      <Router>
        <ProtectedRoute exact path="/" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        <ProtectedRoute path="/list" component={RestaurantList} />
        <ProtectedRoute path="/create" component={RestaurantCreate} />
        <ProtectedRoute path="/search" component={RestaurantSearch} />
        <ProtectedRoute path="/update/:id" render={(props)=>(<RestaurantUpdate {...props} />)}  />
        <Route path="/login" render={(props)=>(<Login {...props} />)}  />
        <ProtectedRoute path="/logout" component={Logout} />
      </Router>
    </>
  );
}

export default App;
