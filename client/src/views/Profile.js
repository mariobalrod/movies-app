import React, {Component} from 'react';

export default class Profile extends Component {

    constructor () {
        super();
        this.state = {}
    }

    componentDidMount() {
        if(!this.props.currentUser) {
            this.props.history.push('/');
        }
    }

    render () {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        );
    }

}
