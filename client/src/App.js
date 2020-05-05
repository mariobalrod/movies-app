import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

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
import ListConstent from './views/ListContent';
import MovieDetails from './views/MovieDetails';

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
    
    storeToastMessage(type) {
        ToastsStore.success(`Funciona! ${type}`);
    }

    render () {

        const { currentUser } = this.state;

        return (
            <div>
                <NavBar currentUser={currentUser} />
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_LEFT}/>
                <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
                    <Switch>

                        <Route exact path="/" render={(props) => {
                            return <Home {...props} currentUser={currentUser} storeToastMessage={this.storeToastMessage} />
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
                            return <ListConstent {...props} currentUser={currentUser} />
                        }} />                   

                        <Route path="/profile" render={(props) => {
                            return <Profile {...props} currentUser={currentUser} />
                        }} />

                        <Route path="/overview/:id" render={(props) => {
                            return <MovieDetails {...props} currentUser={currentUser} />
                        }} />

                    </Switch>
                </div>
                <Footer />
            </div>
        );
        
    }

}

export default App;
