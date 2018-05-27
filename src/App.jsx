import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Quotes from './components/Quotes';
import Profile from './components/Profile';
import Navbar from './components/CustomNavBar';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        < Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
    );
  }
}

export default App;
