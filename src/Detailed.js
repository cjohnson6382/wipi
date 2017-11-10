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

const Detailed = ({ match, networks_dict, loading }) => {
	let network = loading ? {} : networks_dict[match.params.network]
	let pw = ""
	const connectPW = async (essid, password) => {
		let r = await (await wipiFetch("POST")("choose_network")({ essid, password })).json()
		console.log(r)
	}
	const connect = async essid => { 
		let r = await (await wipiFetch("POST")("choose_network")({ essid, password: "" })).json()
		console.log(r)
	}

	console.log(networks_dict)
	return (
		<div>
			<div>
				<h1>Detailed Network View</h1>
				<div>{ loading && <Loading /> }</div>
				<div>{ !loading && Object.keys(network).map((k, i) => <div key={ i } ><span>{ k }:</span>{ network[k] }</div>) }</div>
			</div>
			{ network["Encryption key"] === "on" && 
				<input 
					style={ styles.inlineButton } 
					onChange={ e => { pw = e.target.value }} 
					type="text" 
					placeholder="Password" 
				/> }
			<Link
				to="/current" 
				style={ { ...styles.button, ...styles.inlineButton } } 
				onClick={ 
					network["Encryption key"] === "on" ? 
						() => connectPW(network.ESSID, pw) 
					: 
						() => connect(network.ESSID) } 
			>
				Connect
			</Link>
		</div>
	)
}

Detailed.propTypes = {
	networks: PropTypes.array,
	match: PropTypes.object,
	loading: PropTypes.bool
}

export default Detailed