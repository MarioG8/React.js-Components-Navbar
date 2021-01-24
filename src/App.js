import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Figures from './pages/Figures';
import More from './pages/More';
import JoinUs from './pages/Join-us';
import Stoicism from './pages/Stoicism';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/stoicism' exact component={Stoicism} />
        <Route path='/figures' component={Figures} />
        <Route path='/more' component={More} />
        <Route path='/join-us' component={JoinUs} />
      </Switch>
    </Router>
  );
}

export default App;
