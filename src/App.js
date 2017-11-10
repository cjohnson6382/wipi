import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom' // , Redirect

import { Grid } from 'react-bootstrap'

import Home from './Home'
import Detailed from './Detailed'
import Networks from './Networks'
import Reset from './Reset'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Current from './Current'

import { wipiFetch } from './utilities'

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

class App extends Component {
  constructor (props) {
    super(props)

    this.getNetworks = this.getNetworks.bind(this)
    this.storedNetworks = this.storedNetworks.bind(this)
  }

  state = { networks: [], networks_dict: {}, stored: [], loading: true }

  componentDidMount () { 
    this.getNetworks()
    this.storedNetworks()
  }

  async getNetworks () {
    let networks = []
    this.setState({ loading: true })
    let t = await wipiFetch("GET")("get_networks")()
    if (t) networks = await t.json()
    else networks = []

    let k = networks.map(n => n.ESSID[0])
    let v = networks.map(n => {
      let dict = {}
      Object.keys(n).map(k => { n[k].length > 1 ? dict[k] = n[k] : dict[k] = n[k][0] })
      return dict
    })

    let networks_dict = {}
    let dud = [...Array(networks.length).keys()].map(i => networks_dict[k[i]] = v[i])

    await this.setState({
      networks,
      networks_dict,
      loading: false
    })

  }

  async storedNetworks () { 
    this.setState({ loading: true })

    let t = await wipiFetch("GET")("stored_networks")()
    if (t) t = await t.json()
    else t = []

    this.setState({
      stored: t,
      loading: false
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Grid style={ styles.container } className="App">
          <div style={ styles.sidebar } ><Sidebar /></div>
          <div style={ styles.content } >
            <Route exact path="/current" render={ (routeProps) => <Current { ...routeProps } /> } />
            <Route 
              exact 
              path="/" 
              render={ (routeProps) => (
                <Home 
                  { ...routeProps } 
                  networks={ this.state.networks } 
                  stored={ this.state.stored } 
                  storedNetworks={ this.storedNetworks } 
                  getNetworks={ this.getNetworks }
                  loading={ this.state.loading }
                />
              ) } 
            />
            <Route 
              exact 
              path="/networks" 
              render={ (routeProps) => (
                <Networks 
                  { ...routeProps }
                  stored={ this.state.stored }
                  getNetworks={ this.getNetworks } 
                />
              ) } 
            />
            <Route 
              exact 
              path="/reset" 
              render={ (routeProps) => (
                <Reset 
                  { ...routeProps } 
                  getNetworks={ this.getNetworks } 
                />
              ) } 
            />
            <Route 
              exact 
              path="/detailed/:network" 
              render={ (routeProps) => (
                <Detailed 
                  { ...routeProps } 
                  networks_dict={ this.state.networks_dict }
                  loading={ this.state.loading }
                />
              ) } 
            />
          </div>
          <Footer style={ styles.footer } />
        </Grid>
      </BrowserRouter> 
    )
  }
}


export default App