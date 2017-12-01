import React from 'react';
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <AppBar position="static" style={{ height: 40}}>
    </AppBar>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
