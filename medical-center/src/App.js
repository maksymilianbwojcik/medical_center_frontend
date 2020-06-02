import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Faq from './Faq';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    checkLoginStatus() {
        
    }

    handleSuccessfulAuth(data) {
        //update todo
    }

    render(){
        return(
            <Router>
                <div id="page-wraper">
                    <div id="logo" className="container">
                        <h1><span className="icon icon-ambulance icon-size"></span><Link to="/">Medi<span>Shield</span></Link></h1>
                    </div>
                    <div id="wrapper" className="container">
                        <Menu />
                        <Switch>
                            <Route path="/register" component={Register}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/faq" component={Faq}></Route>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
