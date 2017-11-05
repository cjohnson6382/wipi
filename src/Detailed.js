// match.params.network

import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

// const styles = {}

const Detailed = ({ match, networks }) => (
	<div>
		<div>{ networks[match.params.network] }</div>
		<div><span></span></div>
	</div>
)

Detailed.propTypes = {
	networks: PropTypes.array,
	match: PropTypes.object
}

export default Detailed