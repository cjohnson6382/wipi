import React from 'react'

import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap' //	, Glyphicon, Modal
import { Link } from 'react-router-dom'

import { register, wipiFetch } from './utilities'

const styles = {
	button: {
		padding: "0.5em",
		margin: "0.3em",
		backgroundColor: "deepskyblue",
		color: "white",
		fontWeight: "bold",
		textDecoration: "none"
	}
}

/*
		<div style={ { display: "flex" } } >
			<div style={ { visbility: "hidden", flex: "0 1 15%" } } ></div>
			<Comp 
				to={ type === "current" ? `/current` : `/detailed/${network[essid]}` } 
				onClick={ e => onClick(network, network[essid]) }
				style={ styles.network }
			>
				{ network[essid][0].length > 0 ? network[essid] : "(no ESSID for this network)" }
			</Comp>
			<div style={ { visbility: "hidden", flex: "0 1 15%" } } ></div>
		</div>
*/

const RegisterDevice = ({ register, registerd, uuid }) => {
	let email = ""
	
	return (
		 <Modal.Dialog>
		 	<Modal.Header>
		 		<Modal.Title>Enter an Email Address to Receive PDF Printouts</Modal.Title>
		 	</Modal.Header>
		 	<Modal.Body>
		 		<div><input type="text" onChange={ e => email = e.target.value } /></div>
		 	</Modal.Body>
		 	<Modal.Footer>
		 		<div style={ styles.button } onClick={ register(email)(uuid) } >Register</div>
		 	</Modal.Footer>
		 </Modal.Dialog>
	)
}

Network.propTypes = {
	network: PropTypes.object,
	onClick: PropTypes.func
}

const SpecificNetwork = networkType(Network)

export default SpecificNetwork
