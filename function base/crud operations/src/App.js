import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/pages/users/AddUser';
import EditUser from './components/pages/users/EditUser';
import ViewUser from './components/pages/users/ViewUser';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/view/:id" component={ViewUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
