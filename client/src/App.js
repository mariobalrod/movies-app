import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import httpClient from './httpClient'

// Components
import NavBar from './components/Navbar';
import Footer from './components/Footer';

// Views
import Home from './views/Home';
import Movies from './views/Movies';
import Profile from './views/Profile';
import LogIn from './views/LogIn';
import LogOut from './views/LogOut';
import SignUp from './views/SignUp';

class App extends Component {

    constructor () {
        super();
        this.state = {
            currentUser: httpClient.getCurrentUser()
        }
    }

    onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() });
	}

	logOut() {
		httpClient.logOut();
		this.setState({ currentUser: null });
	}

    render () {
        const { currentUser } = this.state;
        return (
            <div>
                <NavBar currentUser={currentUser} />
                <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
                    <Switch>

                        <Route exact path="/" component={ Home } />

                        <Route path="/login" render={(props) => {
						    return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					    }} />

                        <Route path="/signup" render={(props) => {
                            return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
                        }} />

                        <Route path="/logout" render={(props) => {
                            return <LogOut onLogOut={this.logOut.bind(this)} />
                        }} />

                        <Route exact path="/movies" component={ Movies } />

                        <Route exact path="/profile" component={ Profile } />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }

}

export default App;
