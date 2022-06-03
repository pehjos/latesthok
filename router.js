import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route path='/news' />
    <Route path='/sports' />
    <Route path='/technology' />
    <Route path='/discover' />
    <Route path='/entertainment' />
    <Route path='/allnews' />
    <Route path='/science' />
    <Route path='/world' />
    <Route path='/auth' />
    <Route path='/privacy' />
    <Route path='/about' />
    <Route path='//user/:id' />
    <Route path='/' />
  </Switch>
)