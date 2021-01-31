import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
