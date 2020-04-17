import React, { Suspense, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Components
import NavBar from './components/Navbar';
import Footer from './components/Footer';

// Views
import Home from './views/Home';
import Movies from './views/Movies';
import Profile from './views/Profile';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

class App extends Component {

    render () {
        return (
            <Suspense fallback={(<div>Loading...</div>)}>
                <Router>
                    <NavBar/>
                    <div className="my-5" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
                        <Switch>

                            <Route exact path="/"> <Home /> </Route>
                            <Route exact path="/signin"> <SignIn /> </Route>
                            <Route exact path="/signup"> <SignUp /> </Route>
                            <Route exact path="/movies"> <Movies /> </Route>
                            <Route exact path="/profile"> <Profile /> </Route>

                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </Suspense>
        );
    }

}

export default App;
