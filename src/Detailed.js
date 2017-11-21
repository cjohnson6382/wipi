// match.params.network

import React from 'react'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap' // , Glyphicon, Modal
// import { Link } from 'react-router-dom'

// import Loading from './Loading'

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

const Detailed = ({ history, network, setDetailed }) => {
	let pw =  ""

	const connect = async (essid, password="") => {
		console.log(essid[0], password)
		essid = essid[0]

		let r = await (await wipiFetch("POST")("choose_network")({ essid, password })).json()
		console.log(r)

		let s = await (await wipiFetch("POST")("save_network")({ essid, password })).json()
		console.log(s)

		await setDetailed()
		// history.push({ pathname: "/add_item", state: { Page: this.props.location.state ? this.props.location.state.Page : 1 } 
		history.push({ pathname: "/current" })
	}	

	console.log(network["Encryption key"])

	return (
		<div>
			<div>
				<h1>Detailed Network View</h1>
				<div>{ Object.keys(network).map((k, i) => <div key={ i } ><span>{ k }:</span>{ network[k] }</div>) }</div>
			</div>
			{ 
				network["Encryption key"][0] === "on" && 
				<input 
					style={ styles.inlineButton } 
					onChange={ e => { pw = e.target.value } } 
					type="text" 
					placeholder="Password" 
				/> 
			}
			<Button
				style={ { ...styles.button, ...styles.inlineButton } } 
				onClick={ e => connect(network.ESSID, pw) } 
			>
				Connect
			</Button>
		</div>
	)
}

Detailed.propTypes = {
	network: PropTypes.object
}

export default Detailed
