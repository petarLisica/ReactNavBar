import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Index';
import About from './components/pages/About';
import Services from './components/pages/Services';
import ContactUs from './components/pages/Contact us';
import SignUp from './components/pages/Sign up'
import SignIn from './components/pages/Sign in'


function App() {
  return (
    <Router>
         <Navbar />
            <Switch>
              <Route path ='/' exact component={Home} />
              <Route path ='/about' component={About} />
              <Route path ='/services' component={Services} />
              <Route path ='/contact-us' component={ContactUs} />
              <Route path ='/sign-up' component={SignUp} />
              <Route path ='/signin' component={SignIn} />
            </Switch>
    </Router>
  );
}

export default App;
