import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import Network from './Network'

import { wipiFetch, generalStyles } from './utilities'

// const styles = {}


/*

*/

export default class Networks extends React.Component {
    constructor (props) {
        super(props)

        this.storedNetworks = this.storedNetworks.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    state = { stored: [], loading: false }

    componentDidMount () {
        this.storedNetworks()
    }

    async storedNetworks () { 
        this.setState({ loading: true })

        let stored = await wipiFetch("GET")("stored_networks")()
        if (stored) stored = await stored.json()
        else stored = []

        this.setState({
            stored,
            loading: false
        })
    }

    async onClick (network, essid) { 
        console.log(essid)
        let r = await (await wipiFetch("POST")("choose_network")({ essid, password: "" })).json()
        console.log(r)
    }

    render () {
        return (
            <div>
                <h2 style={ generalStyles.title } >YOUR SAVED WIRELESS NETWORKS</h2>
                <div style={ generalStyles.body } >
                    { !this.state.loading && this.state.stored.length > 0 && this.state.stored.map((n, i) => (
                        <Network network={ n } type="current" onClick={ this.onClick } key={ i } />
                    ))}
                </div>
            </div>
        )
    }
}