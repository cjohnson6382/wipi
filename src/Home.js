import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import Network from './Network'
import Loading from './Loading'
import Detailed from './Detailed'


import { wipiFetch, generalStyles } from './utilities'

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

export default class Home extends React.Component {
	static propTypes = {
		getNetworks: PropTypes.func,
		getStored: PropTypes.func,
		networks: PropTypes.array,
		stored: PropTypes.array,
		loading: PropTypes.bool
	}

	constructor (props) {
		super(props)

		this.setDetailed = this.setDetailed.bind(this)
		this.getNetworks = this.getNetworks.bind(this)
	}

	state = {
		networks: [],
		networks_dict: {},
		loading: false,
		detailed: {}
	}

	componentDidMount () { this.getNetworks() }

	setDetailed (detailed = {}) { this.setState({ detailed }) }

	async getNetworks () {
		let networks = []
		this.setState({ loading: true, detailed: {} })
		let t = await wipiFetch("GET")("get_networks")()
		if (t) networks = await t.json()
		else networks = []

		let k = networks.map(n => n.ESSID[0])
		let v = networks.map(n => {
			let dict = {}
			let dud = Object.keys(n).map(k => { return n[k].length > 1 ? dict[k] = n[k] : dict[k] = n[k][0] })
			return dict
		})

		let networks_dict = {}
		let dud = [...Array(networks.length).keys()].map(i => networks_dict[k[i]] = v[i])

		await this.setState({
			networks,
			networks_dict,
			loading: false
		})
	}

	render () {
		return (
			<div>
				{ Object.keys(this.state.detailed).length < 1 && <h2 style={ generalStyles.title } >NETWORKS IN RANGE</h2> }
				<div>
					{ this.state.loading && <Loading /> }
					{ Object.keys(this.state.detailed).length > 0 && 
						<Detailed 
							history={ this.props.history } 
							setDetailed={ this.setDetailed } 
							network={ this.state.detailed } 
						/> 
					}
					<div style={ generalStyles.body } >{ Object.keys(this.state.detailed).length < 1 && !this.state.loading && this.state.networks.length > 0 && 
						this.state.networks.map((n, i) => (
							<Network
								key={ i }
								onClick={ network => this.setDetailed(network) }
								type="detailed"
								network={ n }
							/>
						)
					) }</div>
				</div>
				<div style={ styles.button } onClick={ this.getNetworks } >{ Object.keys(this.state.detailed).length < 1 ? "Refresh the Network List" : "Go Back to List" }</div>
			</div>
		)
	}
}