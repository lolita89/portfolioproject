import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Quotes from './components/Quotes';
import Resume from './components/Resume';
import Navbar from './components/CustomNavBar';
import Video from './components/Video';
import Contact from './components/Contact';
import ApiEx from './components/ApiEx';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        < Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/resume" component={Resume} />
        <Route path="/video" component={Video} />
        <Route path="/contact" component={Contact} />
        <Route path="/apicall" component={ApiEx} />
        <Route path="/counter" component={Counter} />
      </div>
    </Router>
    );
  }
}

export default App;
