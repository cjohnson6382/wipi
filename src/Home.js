import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import Network from './Network'
import Loading from './Loading'

// import { wipiFetch } from './utilities'

const styles = {
	store: (b) => ({
		border: b ? "0.1em solid black" : "",
		padding: "0.3em"
	}),
	button: {
		border: "0.1em solid black",
		padding: "0.3em",
		cursor: "pointer",
		width: "25%",
		margin: "0.3em",
		borderRadius: "0.2em",
		backgroundColor: "darkblue",
		color: "white"
	}
}

// will have a list of networks to connect to, with stored networks highlighted
const Home = ({ getNetworks, getStored, networks, stored, loading }) => {
	return (
		<div>
			<h1>WIRELESS NETWORKS IN RANGE OF YOUR RASPBERRY PI</h1>
			<h3>Connect to a network:</h3>
			<div>
				{ loading && <Loading /> }
				{ !loading && networks.length > 0 && networks.map((n, i) => (
					<div style={ styles.store(n.essid) } key={ i } ><Network
						onClick={ console.log("clicked network") } 
						network={ n }
					/></div>
				)) }
			</div>
			<div style={ styles.button } onClick={ getNetworks } >Refresh the Network List</div>
		</div>
	)
}

Home.propTypes = {
	getNetworks: PropTypes.func,
	getStored: PropTypes.func,
	networks: PropTypes.array,
	stored: PropTypes.array,
	loading: PropTypes.bool
}

export default Home