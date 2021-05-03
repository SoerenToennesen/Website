import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import './App.css';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import ContactMe from './components/pages/ContactMe'

function App() {
  return (
    <div>
      <div>Under development</div>
    </div>  );
}
    {/*<>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact-me" component={ContactMe} />
      </Switch>
    </Router>
    </>*/}


export default App;
