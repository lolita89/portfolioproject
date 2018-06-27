import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Quotes from './components/Quotes';
import Resume from './components/Resume';
import Navbar from './components/CustomNavBar';
import Profile from './components/Profile';
import Application from './components/Application'
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
    <Router>
      <div>
        < Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/resume" component={Resume} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
    );
  }
}

export default App;
