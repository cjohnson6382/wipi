// match.params.network

import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Loading from './Loading'

import { wipiFetch } from './utilities'

const styles = {
	button: {
		border: "0.1em solid black",
		padding: "0.3em",
		cursor: "pointer",
		width: "25%",
		margin: "0.3em",
		borderRadius: "0.2em",
		backgroundColor: "darkblue",
		color: "white"
	},
	inlineButton: { display: "inline-block" }
}


// I have a race condition: something is letting this component load before networks_dict is ready.....

// { network["Encryption key"] === "on" && pw === "" ? "Enter Password" : "Connect" }

export default class Current extends React.Component {
	static propTypes = {
		match: PropTypes.object
	}

	constructor (props) {
		super(props)

		this.getCurrent = this.getCurrent.bind(this)
	}

	state = { current: {}, loading: true }

	componentDidMount () {
		this.getCurrent()
	}

	async getCurrent () {
		this.setState({ loading: true })
		let r = await wipiFetch("GET")("current_network")()
		let current = await r.json()
		this.setState({ current, loading: false })
	}

	render () {
		return (
			<div>
				<div>
					<h1>Current Network View</h1>
					<div>{ this.state.loading && <Loading /> }</div>
					<div>{ !this.state.loading && Object.keys(this.state.current).length < 1 && <div>You are not connected to a wireless network</div> }</div>
					<div>{ !this.state.loading && Object.keys(this.state.current).map((k, i) => <div key={ i } ><span>{ k }:</span>{ this.state.current[k] }</div>) }</div>
				</div>
				{ Object.keys(this.state.current).length > 0 && <Link to="/"  style={ { ...styles.button, ...styles.inlineButton } } >Disconnect</Link> }
			</div>		
		)
	}
}