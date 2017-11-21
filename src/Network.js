import React from 'react'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap' //	, Glyphicon, Modal
import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

const styles = {
	network: {
		flex: "0 1 70%",
		padding: "0.5em",
		margin: "0.3em",
		backgroundColor: "deepskyblue",
		color: "white",
		fontWeight: "bold",
		textDecoration: "none"
	}
}

const networkType = (WrappedComponent) => class extends React.Component {
	render () {
		return <WrappedComponent { ...this.props } { ...{ 
			type: this.props.type,
			essid: this.props.type === "current" ? "essid" : "ESSID"
		} } />
	}
}

const Network = ({ network, onClick, type, essid }) => {
	let Comp = type === "detailed" ? Button : Link
	return ( 
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
	)
}

Network.propTypes = {
	network: PropTypes.object,
	onClick: PropTypes.func
}

const SpecificNetwork = networkType(Network)

export default SpecificNetwork
