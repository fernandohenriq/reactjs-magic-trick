import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SelectCard from './pages/SelectCard';

function Routes() {
  return(
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/selectCard" exact component={ SelectCard } />
          <Route component={ NotFound } />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
