import React, {Component} from 'react';

import ProfileCard from '../components/users/ProfileCard';

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
            <div className="mt-5">
                <div>
                    <h1 style={{textAlign: "center", marginBottom: 120}}>Your Profile</h1>
                </div>
                <div>
                    <ProfileCard currentUser={this.props.currentUser} />  
                </div>
            </div>
        );
    }

}
