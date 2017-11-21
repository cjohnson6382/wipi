import React from 'react'

import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap' //	, Glyphicon, Modal
import { Link } from 'react-router-dom'

// import { wipiFetch } from './utilities'

const styles = {
	network: {
		padding: "0.3em"
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
	return ( <div>
		<Comp 
			to={ type === "current" ? `/current` : `/detailed/${network[essid]}` } 
			onClick={ e => onClick(network, network[essid]) }
			style={ styles.network }
		>
			{ network[essid] }
		</Comp>
	</div> )
}

Network.propTypes = {
	network: PropTypes.object,
	onClick: PropTypes.func
}

const SpecificNetwork = networkType(Network)

export default SpecificNetwork
