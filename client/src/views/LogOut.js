import React from 'react';
import { Redirect } from 'react-router-dom';

export default class LogOut extends React.Component {

	componentDidMount() {
		this.props.onLogOut();
	}
	
	render() {
		return <Redirect to="/login" />
	}
}
