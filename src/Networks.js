import React from 'react'

// import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import Network from './Network'

// import { wipiFetch } from './utilities'

// const styles = {}

// stored networks
const Networks = ({ loading, stored }) => {
	return (
		<div>
			<h1>YOUR SAVED WIRELESS NETWORKS</h1>
			<h3>Connect to a network:</h3>
			<div>
				{ !loading && stored.length > 0 && stored.map((n, i) => (
					<Network network={ n } key={ i } />
				))}
			</div>
		</div>
	)
}

export default Networks