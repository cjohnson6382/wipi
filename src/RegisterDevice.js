import React from 'react'

import PropTypes from 'prop-types'

const styles = {
	button: {
		padding: "0.5em",
		margin: "0.3em",
		backgroundColor: "deepskyblue",
		color: "white",
		fontWeight: "bold",
		textDecoration: "none"
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		left: 0,
		top: 0,
		position: "absolute",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	modal: {
		padding: "1em",
		width: "25em",
		height: "15em",
		border: "0.1em solid black",
		boxShadow: "0.1em 0.2em 0.2em 0.2em black",
		backgroundColor: "white"
	}
}

const RegisterDevice = ({ registerEmail, registered, uuid }) => {
	let email = ""

	return (
			<div style={ styles.overlay } >
				<div style={ styles.modal } >
					<h3>Enter an Email Address to Receive PDF Printouts</h3>
					<hr />
					<div style={ { padding: "0.3em" } } ><input style={ { width: "100%" } } type="text" onChange={ e => email = e.target.value } /></div>
					<div style={ styles.button } onClick={ e => registerEmail(email) } >Register</div>
				</div>
			</div>
	)
}

RegisterDevice.propTypes = {
	registerEmail: PropTypes.func,
	registered: PropTypes.bool,
	uuid: PropTypes.string

}

export default RegisterDevice
