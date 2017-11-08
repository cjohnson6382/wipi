import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

const styles = {
	network: {
		padding: "0.3em"
	}
}

const Network = ({ network, onClick }) => (
	<Link to={ `/detailed/${network.ESSID}` } onClick={ onClick } style={ styles.network } >{ network.ESSID }</Link>
)

Network.propTypes = {
	network: PropTypes.string,
	onClick: PropTypes.func
}

export default Network