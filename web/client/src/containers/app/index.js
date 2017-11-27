import React from 'react';
import { Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <AppBar position="static" style={{ height: 40}}>
      <Link to="/"><Typography type="title" color="white" style={{ flex: 1 }}>
        Title
      </Typography></Link>
      <Link to="/about-us"><Typography type="title" color="inherit" style={{ flex: 1 }}>
        Title
      </Typography></Link>
      
    </AppBar>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
