import React from 'react';
import NavBar from './components/elements/NavBar';
import Contacts from './components/contacts/Contacts';
import {Provider} from 'react-redux'
import store from './store'
import {  BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom'
import AddContact from './components/contacts/AddContact';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" className="text-primary">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Switch >
                <Route exact path="/" component={Contacts} />
                <Route exact path="/add" component={AddContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// 1hours 10min. tak ho gaya hein
// https://www.youtube.com/watch?v=6Q2B7Dv0OiQ