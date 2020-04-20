import React from 'react';
import { Redirect } from 'react-router-dom';

export default class LogOut extends React.Component {

	componentDidMount() {
		this.props.onLogOut();
		if(!this.props.currentUser) {
			this.props.history.push('/');
		}
	}
	
	render() {
		return <Redirect to="/" />
	}
}