import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import httpClient from './helpers/httpClient'

// Components
import NavBar from './components/partials/Navbar';
import Footer from './components/partials/Footer';

// Views
import Home from './views/Home';
import Movies from './views/Movies';
import Profile from './views/Profile';
import LogIn from './views/LogIn';
import LogOut from './views/LogOut';
import SignUp from './views/SignUp';
import ListsContent from './views/ListsContent';

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

                        <Route exact path="/" render={(props) => {
                            return <Home {...props} currentUser={currentUser} />
                        }} />

                        <Route path="/login" render={(props) => {
						    return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} currentUser={currentUser} />
					    }} />

                        <Route path="/signup" render={(props) => {
                            return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} currentUser={currentUser} />
                        }} />

                        <Route path="/logout" render={(props) => {
                            return <LogOut onLogOut={this.logOut.bind(this)} currentUser={currentUser} />
                        }} />

                        <Route path="/movies" render={(props) => {
                            return <Movies {...props} currentUser={currentUser} />
                        }}/> 

                        <Route exact path="/lists/:type" render={(props) => {
                            return <ListsContent {...props} currentUser={currentUser} />
                        }} />                   

                        <Route path="/profile" render={(props) => {
                            return <Profile {...props} currentUser={currentUser} />
                        }} />

                    </Switch>
                </div>
                <Footer />
            </div>
        );
        
    }

}

export default App;
