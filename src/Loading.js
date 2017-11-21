import React from 'react'

import { generalStyles } from './utilities' 

const styles = {
	loading: {
		fontWeight: "bold",
		fontSize: "200%",
		padding: "0.5em"
	}
}

const Loading = () => <div style={ { ...styles.loading, ...generalStyles.body } } >Loading...</div>

export default Loading