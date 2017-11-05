import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

const styles = {
	footerItem: {
		paddingLeft: "1.5em",
		paddingRight: "1.5em",
		fontWeight: "bold"
	},
	footerBox: {
		padding: "2em"
	},
	footerContainer: {
		backgroundColor: "aliceblue"
	}
}

const Footer = () => {
	return (
		<div style={ styles.footerContainer } >
			<div style={ styles.footerBox } ><span style={ styles.footerItem } >Don't Steal</span><span style={ styles.footerItem }>Don't Copyright</span><span style={ styles.footerItem }>Make Stuff</span></div>
			<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
				<img 
					alt="Creative Commons License" 
					src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" 
				/>
			</a>
			<br />
			<div style={ styles.footerBox } >
				<span>This work is licensed under a </span>
				<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
					Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
				</a>.
			</div>
		</div>
	)
}

export default Footer