import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './components/About'
export default (
  <Route path='/' component={App}>
    <IndexRoute component={App} />
    <Route path='/about' component={About} />
  </Route>
)