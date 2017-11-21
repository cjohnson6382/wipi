import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import { generalStyles } from './utilities'

const styles = {
	headerItem: {
		padding: "0.7em",
		fontWeight: "bold",
		margin: "auto"
	},
	headerContainer: {
		backgroundColor: "aliceblue",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column"
	}
}

const Header = () => {
	return (
		<div style={ { ...styles.headerContainer, ...generalStyles.headerTitle } } >
			<h1 style={ styles.headerItem } >WIPI WIRELESS CONFIGURATION UTILITY</h1>
		</div>
	)
}

export default Header