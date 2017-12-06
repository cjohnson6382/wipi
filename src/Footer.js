import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

const styles = {
	footerItem: {
		paddingLeft: "1.5em",
		paddingRight: "1.5em"
	},
	footerBox: {
		padding: "0.5em",
		display: "flex",
		justifyContent: "center"
	},
	footerContainer: {
		backgroundColor: "aliceblue",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column"
	}
}

const Footer = () => {
	return (
		<div style={ styles.footerContainer } >
			<a style={ { margin: "auto", width: "20%" } } rel="info" href="mailto:info@sustainabilist.com">
				<div style={ styles.footerBox } ><span style={ styles.footerItem } >Created by Sustainabilist</span></div>
			</a>

		</div>
	)
}

export default Footer