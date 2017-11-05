import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { wipiFetch } from './utilities'

const styles = {
	button: {
		border: "0.1em solid white",
		borderRadius: "0.2em",
		cursor: "pointer",
		backgroundColor: "darkblue",
		padding: "0.5em",
		paddingRight: "1em",
		paddingLeft:"1em",
		color: "white",
		textDecoration: "none"
	}
}

const Reset = () => {
	const onClick = async () => {
		let r = await (await wipiFetch("reset")("GET")()).json()
		console.log(r)
	}

	return (
		<div>
			<h2>CLEAR YOUR STORED WIFI NETWORKS</h2>
			<h3>Are you sure you want to clear your stored wifi networks?</h3>
			<Link to="/" onClick={ onClick } style={ styles.button } >Yes</Link><Link to="/" style={ styles.button } >No</Link>
		</div>
	)
}

export default Reset