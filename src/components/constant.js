'use strict';

import React from 'react'
import {Switch,Route,HashRouter,NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Food from './Food';
import NotFoundPage from './NotFoundPage';
import ProductsList from './ProductsList';
import ProductPage from './ProductPage';
export const routes = (
  <Switch>
    <Route exact path="/" component={Food}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/About" component={About}/>
    <Route path="/Home" component={Home}/>
    <Route name="ProductsList" path="/ProductsList/:productListPath" component={ProductsList} />
    <Route name="ProductPage" path="/ProductPage" component={ProductPage} />
    //<Route name="ProductsList" path="/ProductsList/:productListPath" render={(props) => (<ProductsList {...props}/>)} />

    <Route component={NotFoundPage}/>
  </Switch>
);


