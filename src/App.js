import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom' // , Redirect

import { Grid } from 'react-bootstrap'

import Home from './Home'
import Detailed from './Detailed'
import Networks from './Networks'
import Reset from './Reset'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Current from './Current'

// import { wipiFetch } from './utilities'

import './App.css';

const styles = {
  sidebar: {
    width: "20%",
    display: "inline-block",
    backgroundColor: "cornflowerblue"
  },
  content: {
    width: "80%",
    display: "inline-block"
  }
}

const App = () => (
  <BrowserRouter>
    <Grid style={ styles.container } className="App">
      <div style={ styles.sidebar } ><Sidebar /></div>
      <div style={ styles.content } >
        <Route exact path="/current" render={ routeProps => <Current { ...routeProps } /> } />
        <Route exact path="/" render={ routeProps => <Home { ...routeProps } /> } />
        <Route exact path="/networks" render={ routeProps => <Networks { ...routeProps } /> } />
        <Route exact path="/reset" render={ routeProps => <Reset { ...routeProps } /> } />
        <Route exact path="/detailed/:network" render={ routeProps => <Detailed { ...routeProps } /> } />
      </div>
      <Footer style={ styles.footer } />
    </Grid>
  </BrowserRouter> 
)

export default App