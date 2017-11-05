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
	<Link to={ `/detailed/${network}` } onClick={ onClick } style={ styles.network } >{ network }</Link>
)

Network.propTypes = {
	network: PropTypes.string,
	onClick: PropTypes.func
}

export default Network