import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Career from './components/Career';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import { from } from 'rxjs';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/About" component={About}/>
        <Route exact path ="/Career" component={Career}/>
        <Route exact path ="/Contact" component={Contact}/>

      </Switch>
    </React.Fragment>
  );
}

export default App;
