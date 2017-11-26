// match.params.network

import React from 'react'

import PropTypes from 'prop-types'
// import { Button, Glyphicon, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Loading from './Loading'

import { wipiFetch, generalStyles, register } from './utilities'

const styles = {
	button: {
		border: "0.1em solid black",
		padding: "0.3em",
		cursor: "pointer",
		width: "25%",
		margin: "0.3em",
		borderRadius: "0.2em",
		backgroundColor: "darkblue",
		color: "white"
	},
	inlineButton: { display: "inline-block" }
}


// I have a race condition: something is letting this component load before networks_dict is ready.....

// { network["Encryption key"] === "on" && pw === "" ? "Enter Password" : "Connect" }

export default class Current extends React.Component {
	static propTypes = {
		match: PropTypes.object
	}

	constructor (props) {
		super(props)

		this.register = this.register.bind(this)
		this.getCurrent = this.getCurrent.bind(this)
		this.getUUID = this.getUUID.bind(this)
	}

	state = { current: {}, loading: true, registered: true, uuid: "" }

	componentDidMount () {
		this.getCurrent()
		this.checkRegistration()
		this.getUUID()
	}

	async getUUID () {
		let status = await wipiFetch("GET")("serial_number")()
		let uuid = await status.json()

		this.setState({ uuid })
	}

	async checkRegisteration () {
		let status = await wipiFetch("GET")("email_address")()
		let registered = await status.json()
		// the server currently returns a JSON with { success: true } on successful device registration
		this.setState({ registered })
	}

	async getCurrent () {
		this.setState({ loading: true })
		await setTimeout(async () => {
			let r = await wipiFetch("GET")("current_network")()
			let current = await r.json()

			this.setState({ current, loading: false })
		}, 2500)
	}

	async register (email) {
		await wipiFetch("POST")("register")({ email, uuid: this.state.uuid })
		this.setState({ registered: true }) 
	}

	render () {
		return (
			<div>
				<div>
					<h2 style={ generalStyles.title } >Current Network View</h2>
					<div>{ this.state.loading && <Loading /> }</div>
					<div>
						{ !this.state.loading && Object.keys(this.state.current).length < 1 && 
							<div>You are not connected to a wireless network</div> 
						}
					</div>
					<div style={ generalStyles.body } >
						{ !this.state.loading &&
							Object.keys(this.state.current).reverse().map((k, i) =>
								<div
									style={ generalStyles.networkProperties }
									key={ i }
								>
									<span>{ k }:</span>{ this.state.current[k] }
								</div>
							)
						}
					</div>
				</div>
				{ Object.keys(this.state.current).length > 0 && 
					<Link 
						to="/"  
						onClick={ e => wipiFetch("GET")("disconnect")() } 
						style={ { ...styles.button, ...styles.inlineButton } } 
					>
						Disconnect
					</Link> 
				}
				{ !this.state.registered && <RegisterDevice register={ register } registered={ this.state.registered } /> }
			</div>
		)
	}
}